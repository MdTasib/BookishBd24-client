import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useCreateReviewMutation } from "../../../features/api/apiSlice";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";


const colors = {
	orange: "#FFBA5A",
	grey: "#a9a9a9",
};

const AddReview = () => {
	const [addReveiw, { isLoading, isError, isSuccess, error, data: review }] =
		useCreateReviewMutation();
	const [singleImages, setSingleImages] = useState({});
	const { register, handleSubmit, reset } = useForm();
	const [loading, setLoading] = useState(false);
	const [rating, setRating] = useState(0);
	const [hoverValue, setHoverValue] = useState(undefined);
	const [comment, setComment] = useState("");
	const stars = Array(5).fill(0);
	const [user] = useAuthState(auth);
	console.log(user);

	// RENDER BY CONDITION
	let content;
	if (isLoading || loading) {
		content = <Loading />;
	}
	if (!isLoading && isError) {
		// content = <p className='text-red-500'>Review can't added!😢</p>;
		content = console.log(error);
	}
	if (!isError && !isLoading && isSuccess) {
		content = console.log(review);
	}

	const handleComment = e => {
		setComment(e.target.value);
	};

	const handleClick = value => {
		setRating(value);
	};
	const handleMouseOver = newHoverValue => {
		setHoverValue(newHoverValue);
	};

	const handleMouseLeave = () => {
		setHoverValue(undefined);
	};

	const onSubmit = async data => {
		// if (singleImages.length > 1) {
		// 	setLoading(false);
		// 	toast.error("Max 1 images");
		// 	return;
		// }

		// ///////////////   single images upload   //////////////////
		// // Store single images in firebase
		// const storeImage = async image => {
		// 	return new Promise((resolve, reject) => {
		// 		const storage = getStorage();
		// 		const fileName = `${image.name}-${uuidv4()}`;

		// 		const storageRef = ref(storage, "images/" + fileName);

		// 		const uploadTask = uploadBytesResumable(storageRef, image);

		// 		uploadTask.on(
		// 			"state_changed",
		// 			snapshot => {
		// 				const progress =
		// 					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
		// 				console.log("Upload is " + progress + "% done");
		// 				switch (snapshot.state) {
		// 					case "paused":
		// 						console.log("Upload is paused");
		// 						break;
		// 					case "running":
		// 						console.log("Upload is running");
		// 						break;
		// 					default:
		// 						break;
		// 				}
		// 			},
		// 			error => {
		// 				reject(error);
		// 			},
		// 			() => {
		// 				// Handle successful uploads on complete
		// 				// For instance, get the download URL: https://firebasestorage.googleapis.com/...
		// 				getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
		// 					resolve(downloadURL);
		// 				});
		// 			}
		// 		);
		// 	});
		// };

		// const imageURLS = await Promise.all(
		// 	[...singleImages].map(image => storeImage(image))
		// ).catch(() => {
		// 	toast.error("Images not uploaded");
		// 	return;
		// });

		const uploadReview = {
			review: data.review,
			name: user.displayName,
			email: user.email,
			rating: rating,
			photoURL: user?.photoURL,
			date: new Date().toDateString(),
		};

		if (!isLoading || isSuccess) {
			addReveiw(uploadReview);
			reset();
			console.log(uploadReview, content);
		}

		
	};

	return (
		<div className='w-full p-10 lg:w-1/2 mx-auto'>
			<h1 className='text-2xl text-center text-primary'>
				BookishBD24 সম্পর্কে আপনার মতামত লিখুন
			</h1>
			<form onSubmit={handleSubmit(onSubmit)} className='card-body pb-0'>
				{/* <div className='avatar mx-auto flex-col items-center gap-3'>
					<div className='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
						<label
							for='dropzone-file'
							className='flex flex-col justify-center items-center w-full bg-accent rounded-lg  cursor-pointer'>
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
									<span className='font-semibold'>upload</span>
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
				</div> */}
				<div className="avatar mx-auto flex-col items-center gap-3">
					<div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
						<img src={`${user?.photoURL ? user?.photoURL : 'https://i.pravatar.cc/300'}`} alt={`${user?.displayName}`} />
					</div>
					<h2 className="text-2xl font-bold">{user?.displayName}</h2>
				</div>

				<div className='flex flex-row justify-center'>
					{stars.map((_, index) => {
						return (
							<FaStar
								key={index}
								size={24}
								onClick={() => handleClick(index + 1)}
								onMouseOver={() => handleMouseOver(index + 1)}
								onMouseLeave={handleMouseLeave}
								color={
									(hoverValue || rating) > index ? colors.orange : colors.grey
								}
								style={{
									marginRight: 10,
									cursor: "pointer",
								}}
							/>
						);
					})}
				</div>

				<textarea
					{...register("review", { required: false, maxLength: 500 })}
					className='textarea textarea-primary h-40 my-3 w-full'
					value={comment}
					onChange={handleComment}
					placeholder='Please Your Feedback only take 120 characters'></textarea>

				<input
					type='submit'
					className='btn btn-primary'
					value='Add Review'
					disabled={!rating}
				/>
			</form>
		</div>
	);
};

export default AddReview;
