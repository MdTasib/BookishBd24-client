import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";
import { toast } from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useCreateReviewMutation } from "../../../features/api/apiSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import profileIcon from "../../../assets/icons/user.png";

const colors = {
	orange: "#FFBA5A",
	grey: "#a9a9a9",
};

const AddReview = () => {
	const [addReveiw, { isLoading, isError, isSuccess }] =
		useCreateReviewMutation();
	const { register, handleSubmit, reset } = useForm();
	const [loading, setLoading] = useState(false);
	const [rating, setRating] = useState(0);
	const [hoverValue, setHoverValue] = useState(undefined);
	const [comment, setComment] = useState("");
	const stars = Array(5).fill(0);
	const [user] = useAuthState(auth);

	// RENDER BY CONDITION
	if (isLoading || loading) {
		return <Loading />;
	}
	if (!isLoading && isError) {
		toast.error("Review can't added!😢");
	}
	if (!isError && !isLoading && isSuccess) {
		toast.success("Review added");
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
		const uploadReview = {
			review: data.review,
			name: user.displayName,
			email: user.email,
			rating: rating,
			photoURL: user?.photoURL,
			date: new Date().toDateString(),
		};
		console.log(uploadReview);

		if (!isLoading || isSuccess) {
			addReveiw(uploadReview);
			reset();
		}
	};

	return (
		<div className='w-full p-10 lg:w-1/2 mx-auto'>
			<h1 className='text-xl text-center text-primary'>
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
				<div className='avatar mx-auto flex-col items-center gap-3'>
					<div className='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
						<img
							src={`${user?.photoURL ? user?.photoURL : profileIcon}`}
							alt={`${user?.displayName}`}
						/>
					</div>
					<h2 className='text-2xl font-bold'>{user?.displayName}</h2>
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
