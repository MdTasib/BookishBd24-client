import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddSlider = () => {
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = async data => {
		const image = data.image[0];
		const formData = new FormData();
		formData.append("image", image);

		fetch(
			`https://api.imgbb.com/1/upload?key=eb7bb93d7839539a8bddb41471f7e0da`,
			{
				method: "POST",
				body: formData,
			}
		)
			.then(res => res.json())
			.then(result => {
				const imageURL = result.data.url;

				const uploadImage = {
					image: imageURL,
				};

				if (result.success) {
					fetch(`https://beatnik-task-server.vercel.app/slider`, {
						method: "POST",
						headers: {
							"content-type": "application/json",
						},
						body: JSON.stringify(uploadImage),
					})
						.then(res => res.json())
						.then(data => {
							Swal.fire({
								position: "top-center",
								icon: "success",
								title: "Successfully upload a new product",
								showConfirmButton: false,
								timer: 1500,
							});

							reset();
						});
				}
			});
	};

	// SLIDER IMAGES
	const sliders = [
		{
			id: 1,
			image:
				"https://wafilife-media.wafilife.com/uploads/2021/03/%E0%A6%AA%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%95%E0%A7%87%E0%A6%9C-%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A7%87%E0%A6%87-%E0%A6%AC%E0%A7%87%E0%A6%B6%E0%A7%80-%E0%A6%9B%E0%A6%BE%E0%A6%A1%E0%A6%BC_desktop.jpg",
		},
		{
			id: 2,
			image:
				"https://wafilife-media.wafilife.com/uploads/2022/12/muslim-day-planner_desktop.jpg",
		},
		{
			id: 3,
			image:
				"https://wafilife-media.wafilife.com/uploads/2021/03/%E0%A6%AC%E0%A6%87%E0%A6%AF%E0%A6%BC%E0%A7%87%E0%A6%B0-%E0%A6%89%E0%A6%95%E0%A7%8D%E0%A6%A4%E0%A6%BF-%E0%A6%A1%E0%A6%BF%E0%A6%9C%E0%A6%BE%E0%A6%87%E0%A6%A8_desktop.jpg",
		},
	];

	return (
		<>
			<div class='flex justify-center mt-8'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					class='max-w-2xl rounded-lg shadow-xl bg-accent'>
					<div class='m-4'>
						<label class='inline-block mb-2 text-gray-500'>File Upload</label>
						<div class='flex items-center justify-center w-full'>
							<label class='flex flex-col w-full h-32 border-4 border-primary-200 border-dashed hover:bg-green-100 hover:border-green-300'>
								<div class='flex flex-col items-center justify-center pt-7'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										class='w-8 h-8 text-gray-400 group-hover:text-gray-600'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
										/>
									</svg>
									<p class='pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600'>
										Attach a file
									</p>
								</div>
								<input
									{...register("image", { required: true })}
									type='file'
									class='input-file'
								/>
							</label>
						</div>
					</div>
					<div class='flex justify-center p-2'>
						<button class='w-full px-4 py-2 btn btn-primary'>Create</button>
					</div>
				</form>
			</div>

			{/* MANAGE SLIDERS */}
			<div className="flex justify-center mt-12">
				<div class="overflow-x-auto">
					<table class="table w-full">
						<thead>
							<tr>
								<th></th>
								<th>Image</th>
								<th>Remove Slider</th>
							</tr>
						</thead>
						<tbody>
							{
								sliders?.map((slider, index) => <tr>
									<th>{index + 1}</th>
									<td><img className='h-8' src={slider.image} alt="" /></td>
									<td><button
										className="bg-red-500 px-2 rounded text-white">
										Delete
									</button></td>
								</tr>)
							}

						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default AddSlider;
