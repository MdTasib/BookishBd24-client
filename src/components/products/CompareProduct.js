import React from "react";

const CompareProduct = ({ product: { name, image, price } }) => {
	return (
		<div className='card bg-base-100 shadow border-2 hover:border-solid hover:border-primary'>
			<img src={image} alt='Shoes' className='w-2/3 mx-auto' />
			<div className='card-body pt-0 items-center text-center'>
				<h2 className='card-title'>{name}</h2>
				<p>$ {price}</p>
				<div className='card-actions justify-end'>
					{/* <button className='btn btn-sm btn-primary'>EMI</button> */}
					<label htmlFor='my-modal-3' className='btn btn-sm btn-primary'>
						EMI
					</label>
					<button className='btn btn-sm btn-primary btn-outline'>BUY</button>
				</div>
			</div>
		</div>
	);
};

export default CompareProduct;
