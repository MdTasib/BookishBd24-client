import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCompare } from "../../features/products/productSlice";

const Product = ({ product }) => {
	const dispatch = useDispatch();

	const handleAddCompare = product => {
		dispatch(addCompare(product));
	};

	const { name, image, price } = product;

	return (
		<div className='card bg-base-100 shadow border-2 hover:border-solid hover:border-primary'>
			<img src={image} alt='Shoes' className='w-2/3 mx-auto pt-2' />
			<div className='card-body pt-0 items-center text-center'>
				<h2 className='card-title'>{name}</h2>
				<p className=''>$ {price}</p>
				<div className='card-actions'>
					<Link
						to='/compare'
						onClick={() => handleAddCompare(product)}
						className='btn btn-sm btn-primary text-white'>
						Compare
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Product;
