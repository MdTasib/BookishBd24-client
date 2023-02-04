import React from "react";

const Review = ({ review: { review, rating, photoURL, name, email } }) => {
	return (
		<div className='shadow-xl p-4 rounded-md'>
			<div className='flex items-center gap-4'>
				<img
					className='w-24 border-primary border border-3 h-24 mb-3 rounded-full shadow-lg'
					src={photoURL ? photoURL : name.slice(0, 1)}
					alt=''
				/>
				<div>
					<h3 className='font-bold animate-pulse'>{name}</h3>
					<div className='rating rating-sm'>
						<input
							type='radio'
							name='rating-4'
							className='mask mask-star-2 bg-green-500'
						/>
						<input
							type='radio'
							name='rating-4'
							className='mask mask-star-2 bg-green-500'
							checked
						/>
						<input
							type='radio'
							name='rating-4'
							className='mask mask-star-2 bg-green-500'
						/>
						<input
							type='radio'
							name='rating-4'
							className='mask mask-star-2 bg-green-500'
						/>
						<input
							type='radio'
							name='rating-4'
							className='mask mask-star-2 bg-green-500'
						/>
					</div>
				</div>
			</div>
			<div>
				<p>{review}</p>
			</div>
		</div>
	);
};

export default Review;
