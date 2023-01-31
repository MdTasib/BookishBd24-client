import React from "react";
import cart from "../../assets/images/icon10.png";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";

const PreOrderBook = ({ item: { name, image, price, prevPrice, author } }) => {
	return (
		<div className='mx-7 max-h-min border-2 rounded hover:border-primary cursor-pointer p-2'>
			<img
				className='block mx-auto transform transition-all hover:scale-90'
				src={image}
				alt=''
			/>
			<div className='relative'>
				<a
					href='/'
					title=''
					className='crt-btn flex items-center justify-center'>
					<img src={cart} alt='' />
				</a>
			</div>
			<div className='px-4'>
				<h3 className='text-sm font-bold'>{name}</h3>

				<span className='text-xs py-2 block'>{author}</span>

				<div className='grid grid-cols-2'>
					<del aria-hidden={true}>
						<bdi>{prevPrice} ৳</bdi>
					</del>
					<div className='col-end-4'>
						<span className='text-md font-bold text-primary'>{price} ৳</span>
					</div>
				</div>
			</div>
			{/* <button className='border border-green-900 mt-2 hover:bg-green-800 text-black py-2 px-4 rounded'>অর্ডার করুন</button> */}
			<div className='text-center mt-2'>
				<Link to={`/pri-order/${author.id}`}>
					<Button>অর্ডার করুন</Button>
				</Link>
			</div>
		</div>
	);
};

export default PreOrderBook;
