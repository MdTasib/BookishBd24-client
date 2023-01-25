import React from "react";
import { Link } from "react-router-dom";
import cart from "../../assets/images/icon10.png";

const Book = ({ book: { _id, name, imageURL, price, prePrice, author } }) => {
	return (
		<Link to={`/book/${_id}`}>
			<div className='mx-7 max-h-min border-2 rounded hover:border-primary cursor-pointer p-2'>
				<img className='block mx-auto max-h-60' src={imageURL} alt='' />
				<div className='relative'>
					<a href='/' title='' class='crt-btn flex items-center justify-center'>
						<img src={cart} alt='' />
					</a>
				</div>
				<div class='px-4'>
					<h3 className='text-sm font-bold'>
						{name.slice(0, 25)} {name.length > 25 ? "..." : ""}
					</h3>

					<span className='text-xs py-2 block'>
						{author.slice(0, 40)} {author.length > 40 ? "..." : ""}
					</span>

					<div className='grid grid-cols-2'>
						<del aria-hidden={true}>
							<bdi>{prePrice} ৳</bdi>
						</del>
						<div className='col-end-4'>
							<span className='text-md font-bold text-primary'>{price} ৳</span>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Book;
