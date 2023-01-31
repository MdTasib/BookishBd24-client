import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddProduct = () => {
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = async data => {
		console.log(data);
		// const image = data.image[0];
		// const formData = new FormData();
		// formData.append("image", image);

		// fetch(
		// 	`https://api.imgbb.com/1/upload?key=eb7bb93d7839539a8bddb41471f7e0da`,
		// 	{
		// 		method: "POST",
		// 		body: formData,
		// 	}
		// )
		// 	.then(res => res.json())
		// 	.then(result => {
		// 		const imgURL = result.data.url;

		// 		const uploadProduct = {
		// 			name: data.name,
		// 			nameEng: data.nameEng,
		// 			author: data.author,
		// 			authorEng: data.authorEng,
		// 			publication: data.publication,
		// 			subject: data.subject,
		// 			pages: data.pages,
		// 			cover: data.cover,
		// 			edition: data.edition,
		// 			language: data.language,
		// 			description: data.description,
		// 			price: data.price,
		// 			prePrice: data.prePrice,
		// 			quentity: data.quentity,
		// 			discount: data.discount,
		// 			image: imgURL,
		// 			category: data.category,
		// 		};

		// 		if (result.success) {
		// 			fetch(`https://beatnik-task-server.vercel.app/product`, {
		// 				method: "POST",
		// 				headers: {
		// 					"content-type": "application/json",
		// 				},
		// 				body: JSON.stringify(uploadProduct),
		// 			})
		// 				.then(res => res.json())
		// 				.then(data => {
		// 					reset();
		// 					Swal.fire({
		// 						position: "top-center",
		// 						icon: "success",
		// 						title: "Successfully upload a new product",
		// 						showConfirmButton: false,
		// 						timer: 1500,
		// 					});
		// 				});
		// 		}
		// 	});
	};

	return (
		<div className='hero'>
			<div className='hero-content w-full'>
				<div className='card w-full shadow-2xl bg-base-100'>
					<form onSubmit={handleSubmit(onSubmit)} className='card-body'>
						<div className='form-control'>
							<div className='md:grid grid-cols-2 gap-10'>
								{/* ............................... */}
								<div>
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
								</div>
								{/* ............................... */}
								<div>
									<label className='formLabel'>Images for book</label>
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
										max='6'
										accept='.jpg,.png,.jpeg'
										required
										{...register("imageURL", { required: true })}
									/>

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
											id='images'
											max='6'
											accept='.jpg,.png,.jpeg'
											multiple
											required
											{...register("imagesURL", { required: true })}
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
