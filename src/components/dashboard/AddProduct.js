import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";
import Loading from "../ui/Loading";

const AddProduct = () => {
	const [multipleImages, setMultipleImages] = useState({});
	const { register, handleSubmit, reset } = useForm();
	const [loading, setLoading] = useState(false);

	const onSubmit = async data => {
		if (multipleImages.length > 6) {
			setLoading(false);
			toast.error("Max 6 images");
			return;
		}

		///////////////   Multiple images upload   //////////////////
		// Store multiple images in firebase
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
			[...multipleImages].map(image => storeImage(image))
		).catch(() => {
			toast.error("Images not uploaded");
			return;
		});
		console.log(imageURLS);
		///////////////   Multiple images upload   //////////////////
	};

	if (loading) {
		return <Loading />;
	}

	return (
		<div className='hero'>
			<div className='hero-content w-full'>
				<div className='card w-full shadow-2xl bg-base-100'>
					<form onSubmit={handleSubmit(onSubmit)} className='card-body'>
						<div className='form-control'>
							<div className='md:grid grid-cols-2 gap-10'>
								{/* ............................... */}
								{/* <div>
									<div className='md:grid grid-cols-2 gap-6'>
										<div>
											<label className='label'>
												<span className='label-text font-bold'>Book Name</span>
											</label>
											<input
												{...register("name", { required: true })}
												type='text'
												placeholder='Enter Book Name'
												className='input input-bordered input-primary w-full max-w-xs'
											/>
										</div>
										<div>
											<label className='label'>
												<span className='label-text font-bold'>
													Book Name in English
												</span>
											</label>
											<input
												{...register("nameEng", { required: true })}
												type='text'
												placeholder='Enter Book Name in English'
												className='input input-bordered input-primary w-full max-w-xs'
											/>
										</div>
										<div>
											<label className='label'>
												<span className='label-text font-bold'>
													Author Name
												</span>
											</label>
											<input
												{...register("author", { required: true })}
												type='text'
												placeholder='Enter authr Name'
												className='input input-bordered input-primary w-full max-w-xs'
											/>
										</div>
										<div>
											<label className='label'>
												<span className='label-text font-bold'>
													Author Namr in English
												</span>
											</label>
											<input
												{...register("authorEng", { required: true })}
												type='text'
												placeholder='Enter author Name in English'
												className='input input-bordered input-primary w-full max-w-xs'
											/>
										</div>
										<div>
											<label className='label'>
												<span className='label-text font-bold'>Category</span>
											</label>
											<input
												{...register("category", { required: true })}
												type='text'
												placeholder='Enter Category'
												className='input input-bordered input-primary w-full max-w-xs'
											/>
										</div>
										<div>
											<label className='label'>
												<span className='label-text font-bold'>
													Publication
												</span>
											</label>
											<input
												{...register("text", { required: true })}
												type='text'
												placeholder='Enter Publication'
												className='input input-bordered input-primary w-full max-w-xs'
											/>
										</div>
										<div>
											<label className='label'>
												<span className='label-text font-bold'>Subject</span>
											</label>
											<input
												{...register("text", { required: true })}
												type='text'
												placeholder='Enter Subject'
												className='input input-bordered input-primary w-full max-w-xs'
											/>
										</div>
										<div>
											<label className='label'>
												<span className='label-text font-bold'>Pages</span>
											</label>
											<input
												{...register("number", { required: true })}
												type='number'
												placeholder='Enter Pages'
												className='input input-bordered input-primary w-full max-w-xs'
											/>
										</div>
										<div>
											<label className='label'>
												<span className='label-text font-bold'>Cover</span>
											</label>
											<input
												{...register("text", { required: true })}
												type='text'
												placeholder='Enter Cover'
												className='input input-bordered input-primary w-full max-w-xs'
											/>
										</div>
										<div>
											<label className='label'>
												<span className='label-text font-bold'>Edition</span>
											</label>
											<input
												{...register("text", { required: true })}
												type='text'
												placeholder='Enter Edition'
												className='input input-bordered input-primary w-full max-w-xs'
											/>
										</div>
										<div>
											<label className='label'>
												<span className='label-text font-bold'>Language</span>
											</label>
											<input
												{...register("text", { required: true })}
												type='text'
												placeholder='Enter Language'
												className='input input-bordered input-primary w-full max-w-xs'
											/>
										</div>
										<div>
											<label className='label'>
												<span className='label-text font-bold'>Price</span>
											</label>
											<input
												{...register("price", { required: true })}
												type='number'
												placeholder='Enter Price'
												className='input input-bordered input-primary w-full max-w-xs'
											/>
										</div>
										<div>
											<label className='label'>
												<span className='label-text font-bold'>Pre Price</span>
											</label>
											<input
												{...register("price", { required: true })}
												type='number'
												placeholder='Enter Pre price'
												className='input input-bordered input-primary w-full max-w-xs'
											/>
										</div>
										<div>
											<label className='label'>
												<span className='label-text font-bold'>Discount</span>
											</label>
											<input
												{...register("text", { required: true })}
												type='text'
												placeholder='Enter Pre price'
												className='input input-bordered input-primary w-full max-w-xs'
											/>
										</div>
									</div>
									<div className='form-control'>
										<label className='label'>
											<span className='label-text font-bold'>Description</span>
										</label>
										<textarea
											{...register("description", { required: true })}
											className='textarea textarea-primary w-full max-w-xs'
											placeholder='Enter Description'></textarea>
									</div>
								</div> */}
								{/* ............................... */}
								<div>
									{/* <label className='formLabel'>Images for book</label>
									<p className='text-sm'>
										Image must be
										<span className='text-primary font-bold'>
											{" "}
											(jpg / png / jpeg)
										</span>
									</p>
									<input
										className='formInputFile'
										type='file'
										required
										{...register("imageURL", { required: true })}
									/> */}

									<div className=''>
										<label className='formLabel'>
											Multiple images for book details
										</label>
										<p className='text-sm'>
											The first image will be the cover{" "}
											<span className='text-primary font-bold'>
												(max 6) (jpg / png / jpeg)
											</span>
										</p>
										<input
											className='formInputFile'
											type='file'
											id='multipleImages'
											max='6'
											accept='.jpg,.png,.jpeg'
											multiple
											required
											onChange={e => setMultipleImages(e.target.files)}
										/>
									</div>
								</div>
							</div>
						</div>

						<div className='form-control mt-6'>
							<button type='submit' className='btn btn-primary'>
								UPLOAD
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddProduct;
