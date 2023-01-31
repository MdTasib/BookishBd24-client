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
			<div className='flex justify-center mt-8'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='max-w-2xl rounded-lg shadow-xl bg-accent'>
					<div className='m-4'>
						<label className='inline-block mb-2 text-gray-500'>
							File Upload
						</label>
						<div className='flex items-center justify-center w-full'>
							<label className='flex flex-col w-full h-32 border-4 border-primary-200 border-dashed hover:bg-green-100 hover:border-green-300'>
								<div className='flex flex-col items-center justify-center pt-7'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-8 h-8 text-gray-400 group-hover:text-gray-600'
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
									<p className='pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600'>
										Attach a file
									</p>
								</div>
								<input
									{...register("image", { required: true })}
									type='file'
									className='input-file'
								/>
							</label>
						</div>
					</div>
					<div className='flex justify-center p-2'>
						<button className='w-full px-4 py-2 btn btn-primary'>Create</button>
					</div>
				</form>
			</div>

			{/* MANAGE SLIDERS */}

			<div className="mt-12">
				<div class="overflow-x-auto w-full">
					<table class="table w-full">
						<thead>
							<tr>
								<th></th>
								<th className="pl-24">Image</th>
								<th className="flex justify-end pr-14">Remove Slider</th>
							</tr>
						</thead>
						<tbody>
							{
								sliders?.map((slider, index) => <tr>
									<th>{index + 1}</th>
									<td className="pl-8"><img className='h-8' src={slider.image} alt="" /></td>
									<td className="flex justify-end mr-14"><button
										className="bg-red-500 px-2 rounded text-white block">
										Delete
									</button></td>
								</tr>)
							}
							
						</tbody>
					</table>
				</div>
			</div>
			{/* <div className="mt-12">
				<div class="overflow-x-auto">
					<table class="table w-full">
=======
			<div className='mt-12'>
				<div className='overflow-x-auto'>
					<table className='table w-full'>
>>>>>>> 56e6b20bd077dcea99c4fe6cd04ffc2dad46edb0
						<thead>
							<tr>
								<th></th>
								<th>Image</th>
								<th>Remove Slider</th>
							</tr>
						</thead>
						<tbody>
							{sliders?.map((slider, index) => (
								<tr>
									<th>{index + 1}</th>
<<<<<<< HEAD
									<td><img className='h-8' src={slider.image} alt="" /></td>
									<td><button
										className="bg-red-500 px-2 rounded text-white">
										Delete
									</button></td>
								</tr>)
							}
							
=======
									<td>
										<img className='h-8' src={slider.image} alt='' />
									</td>
									<td>
										<button className='bg-red-500 px-2 rounded text-white'>
											Delete
										</button>
									</td>
								</tr>
							))}
>>>>>>> 56e6b20bd077dcea99c4fe6cd04ffc2dad46edb0
						</tbody>
					</table>
				</div>
			</div> */}
		</>
	);
};

export default AddSlider;
