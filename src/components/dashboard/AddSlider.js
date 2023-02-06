import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import Loading from "../ui/Loading";
import { useCreateSliderMutation } from "../../features/api/apiSlice";

const AddSlider = () => {
	const [addSlider, { isLoading, isError, isSuccess }] =
		useCreateSliderMutation();
	const [singleImage, setSingleImage] = useState({});
	const { register, handleSubmit, reset } = useForm();
	const [loading, setLoading] = useState(false);

	// RENDER BY CONDITION
	if (isLoading || loading) {
		return <Loading />;
	}
	if (!isLoading && isError) {
		toast.error("আপনার স্লাইডারটি যোগ করতে ব্যর্থ হয়েছে| আবার চেষ্টা করুন");
	}
	if (!isError && !isLoading && isSuccess) {
		toast.success("আপনার স্লাইডারটি সফল ভাবে যোগ হয়েছে!");
	}

	const onSubmit = async data => {
		///////////////   slider image upload   //////////////////
		// Store slider image in firebase
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
						getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
							resolve(downloadURL);
						});
					}
				);
			});
		};

		const imageURL = await Promise.all(
			[...singleImage].map(image => storeImage(image))
		).catch(() => {
			toast.error("Images not uploaded");
			return;
		});

		const sliderImage = {
			image: imageURL[0],
		};

		if (!isLoading || isSuccess) {
			addSlider(sliderImage);
		}

		reset();
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
			<Helmet>
				<meta charSet='utf-8' />
				<title>AddSlider | BookishBD24</title>
				<meta name='description' content='BookishBD24 website using React JS' />
			</Helmet>
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
									onChange={e => setSingleImage(e.target.files)}
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
			<div className='mt-12'>
				<div className='overflow-x-auto'>
					<table className='table w-full'>
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
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default AddSlider;
