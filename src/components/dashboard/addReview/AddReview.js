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
import { Helmet } from "react-helmet";

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
	console.log("user - ", user);

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
			name: user?.displayName,
			email: user?.email,
			rating: rating,
			photoURL: user?.photoURL,
			date: new Date().toDateString(),
		};

		if (!isLoading || isSuccess) {
			addReveiw(uploadReview);
			reset();
		}
	};

	return (
		<div className='w-full p-10 lg:w-1/2 mx-auto'>
			{/*=== React-Helmet Start ===*/}
			<Helmet>
				<meta charSet='utf-8' />
				<title>AddReview | BookishBD24</title>
				<meta name='description' content='BookishBD24 website using React JS' />
			</Helmet>
			{/*=== React-Helmet End ===*/}
			<h1 className='text-xl text-center text-primary'>
				BookishBD24 সম্পর্কে আপনার মতামত লিখুন
			</h1>
			<form onSubmit={handleSubmit(onSubmit)} className='card-body pb-0'>
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
