import React from "react";
import { useForm } from "react-hook-form";
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-hot-toast";
import Loading from "../ui/Loading";
import { useState } from "react";

const AddAuthor = () => {
	const [singleImages, setSingleImages] = useState({});
	const { register, handleSubmit, reset } = useForm();
	const [loading, setLoading] = useState(false);

	const onSubmit = async data => {
		if (singleImages.length > 1) {
			setLoading(false);
			toast.error("Max 1 images");
			return;
		}

		///////////////   single images upload   //////////////////
		// Store single images in firebase
		const storeImage = async image => {
			return new Promise((resolve, reject) => {
				const storage = getStorage();
				const fileName = `${image.name}-${uuidv4()}`;

				const storageRef = ref(storage, "images/" + fileName);

				const uploadTask = uploadBytesResumable(storageRef, image);

				uploadTask.on(
					"state_changed",
					snapshot => {
						const progress =
							(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
						console.log("Upload is " + progress + "% done");
						switch (snapshot.state) {
							case "paused":
								console.log("Upload is paused");
								break;
							case "running":
								console.log("Upload is running");
								break;
							default:
								break;
						}
					},
					error => {
						reject(error);
					},
					() => {
						// Handle successful uploads on complete
						// For instance, get the download URL: https://firebasestorage.googleapis.com/...
						getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
							resolve(downloadURL);
						});
					}
				);
			});
		};

		const imageURLS = await Promise.all(
			[...singleImages].map(image => storeImage(image))
		).catch(() => {
			toast.error("Images not uploaded");
			return;
		});
		console.log(imageURLS);
        
        const faq = {
			AuthorName: data.AuthorName,
			AuthorNameEng: data.AuthorNameEng,
			description: data.description,
			imagesURLS: imageURLS[0]
		};
		console.log(faq);
        reset()
		
    }
	if (loading) {
		return <Loading />;
	}

	return (
		<div className='hero'>
			<div className='hero-content w-full'>
				<div className='card w-full shadow-2xl bg-base-100'>
					<form onSubmit={handleSubmit(onSubmit)} className='card-body'>
						<div className='form-control'>
							<div>
								<label className='label'>
									<span className='label-text'>Upload Author Image</span>
								</label>

								<div className='flex justify-center items-center w-full'>
									<label
										for='dropzone-file'
										className='flex flex-col justify-center items-center w-full bg-accent rounded-lg border-2 border-primary border-dashed cursor-pointer'>
										<div className='flex flex-col justify-center items-center pt-5 pb-6'>
											<svg
												className='mb-3 w-5 h-5 text-primary'
												fill='none'
												stroke='currentColor'
												viewBox='0 0 24 24'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='2'
													d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'></path>
											</svg>
											<p className='mb-2 text-sm text-gray-500 dark:text-primary'>
												<span className='font-semibold'>
													Click to upload image
												</span>
											</p>
										</div>
										<input
											{...register("image", { required: true })}
											id='dropzone-file'
											type='file'
											className='hidden'
											onChange={e => setSingleImages(e.target.files)}
										/>
									</label>
								</div>
							</div>
							{/*  */}
							<div className=''>
								<label className='label'>
									<span className='label-text'>Author Name</span>
								</label>
								<input
									{...register("AuthorName", { required: true })}
									type='text'
									placeholder='Author Name'
									className='input input-bordered input-primary w-full'
								/>
							</div>
							<div className=''>
								<label className='label'>
									<span className='label-text'>Author Name English</span>
								</label>
								<input
									{...register("AuthorNameEng", { required: true })}
									type='text'
									placeholder='Author Name Eng'
									className='input input-bordered input-primary w-full'
								/>
							</div>

							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Description</span>
								</label>
								<textarea
									{...register("description", { required: true })}
									className='textarea textarea-primary w-full'
									placeholder='Description'></textarea>
							</div>
						</div>

						<div className='form-control mt-6'>
							<button className='btn btn-primary'>Upload</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddAuthor;
