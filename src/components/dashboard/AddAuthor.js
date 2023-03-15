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
import { useCreateAuthorMutation } from "../../features/api/apiSlice";
import { Helmet } from "react-helmet";

const AddAuthor = () => {
	const [singleImages, setSingleImages] = useState({});
	const { register, handleSubmit, reset } = useForm();
	const [addAuthor, { isLoading, isError, isSuccess }] =
		useCreateAuthorMutation();

	if (isLoading) {
		return <Loading />;
	}
	if (!isLoading && isError) {
		toast.error("আপনার লেখক যোগ করতে ব্যর্থ হয়েছে। আবার চেষ্টা করুন!");
	}
	if (!isError && !isLoading && isSuccess) {
		toast.success("আপনার লেখক যোগ হয়েছে।");
	}

	const onSubmit = async data => {
		if (singleImages.length > 1) {
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

		const author = {
			author: data.authorName,
			authorEng: data.authorNameEng,
			description: data.description,
			imageUrl: imageURLS[0],
		};

		if (!isLoading || isSuccess) {
			addAuthor(author);
		}

		reset();
	};

	return (
		<div className='hero'>
			<Helmet>
				<meta charSet='utf-8' />
				<title>AddAuthor | BookishBD24</title>
				<meta name='description' content='BookishBD24 website using React JS' />
			</Helmet>
			<div className='hero-content w-full'>
				<div className='card w-full shadow-2xl bg-base-100'>
					<form onSubmit={handleSubmit(onSubmit)} className='card-body'>
						<div className='form-control'>
							<div>
								<label className='label'>
									<span className='label-text'>লেখকের ছবি আপলোড করুন</span>
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
													ছবি আপলোড করতে ক্লিক করুন
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
									<span className='label-text'>লেখকের নাম</span>
								</label>
								<input
									{...register("authorName", { required: true })}
									type='text'
									placeholder='লেখকের নাম'
									className='input input-bordered input-primary w-full'
								/>
							</div>
							<div className=''>
								<label className='label'>
									<span className='label-text'>লেখকের নাম ইংরেজিতে</span>
								</label>
								<input
									{...register("authorNameEng", { required: true })}
									type='text'
									placeholder='লেখকের নাম ইংরেজিতে'
									className='input input-bordered input-primary w-full'
								/>
							</div>

							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>লেখকের পরিচিতি</span>
								</label>
								<textarea
									{...register("description", { required: true })}
									className='textarea textarea-primary w-full'
									placeholder='লেখকের পরিচিতি'></textarea>
							</div>
						</div>

						<div className='form-control mt-6'>
							<button className='btn btn-primary'>আপলোড করুন</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddAuthor;
