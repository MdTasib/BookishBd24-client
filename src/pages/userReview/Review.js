import React from "react";

const Review = ({
	review: { review, rating = 1, photoURL, name, email, date },
}) => {
	return (
		<div className='shadow-xl p-4 rounded-md'>
			<div className='flex items-center gap-4'>
				{photoURL ? (
					<div className='avatar'>
						<div className='w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
							<img
								src={photoURL}
								alt={name ? name : email}
								className='object-cover'
							/>
						</div>
					</div>
				) : (
					<div className='avatar placeholder'>
						<div className='bg-accent rounded-full w-16 ring ring-primary'>
							<span className='text-xl'>{email.slice(0, 1)}</span>
						</div>
					</div>
				)}
				<div>
					<h3 className='font-bold animate-pulse'>{name ? name : email}</h3>
					<div className='rating rating-sm'>
						{[...Array(Number(rating))]?.map((star, index) => (
							<input
								type='radio'
								name='rating-4'
								className='mask mask-star-2 bg-green-500'
							/>
						))}
					</div>
					<h3 className='font-xs'>
						<span className='font-bold'>Date:</span>{" "}
						{date ? date?.split(" ").join(" - ") : "2 year ago"}
					</h3>
				</div>
			</div>
			<p className='pt-2'>{review}</p>
		</div>
	);
};

export default Review;
