import React from "react";
import cart from "../../assets/images/icon10.png";

const Book = () => {
	return (
		<div className='mx-7 max-h-min border-2 rounded hover:border-primary cursor-pointer p-2'>
			<img
				className='block mx-auto'
				src='https://wafilife-media.wafilife.com/uploads/2022/10/20221008_121307-192x254.jpg'
				alt=''
			/>
			<div className='relative'>
				<a href='/' title='' class='crt-btn flex items-center justify-center'>
					<img src={cart} alt='' />
				</a>
			</div>
			<div class='px-4'>
				<h3 className='text-sm font-bold'>শেষরাত্রির গল্পগুলো</h3>

				<span className='text-xs py-3 block'>আবদুল্লাহ মাহমুদ নজীব</span>

				<div className='grid grid-cols-2'>
					<del aria-hidden={true}>
						<bdi>245 ৳</bdi>
					</del>
					<div className='col-end-4'>
						<span className='text-md font-bold text-primary'>23 ৳</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Book;
