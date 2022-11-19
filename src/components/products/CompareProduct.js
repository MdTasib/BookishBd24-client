import React from "react";
import { useDispatch } from "react-redux";
import { modalProduct } from "../../features/products/productSlice";
import Modal from "../ui/Modal";

const CompareProduct = ({ product }) => {
	const { name, image, price } = product;
	const dispatch = useDispatch();

	const handleModal = product => {
		dispatch(modalProduct(product));
	};

	return (
		<>
			<div className='card bg-base-100 shadow border-2 hover:border-solid hover:border-primary'>
				<img src={image} alt='Shoes' className='w-2/3 mx-auto' />
				<div className='card-body pt-0 items-center text-center'>
					<h2 className='card-title'>{name}</h2>
					<p>$ {price}</p>
					<div className='card-actions justify-end'>
						{/* <button className='btn btn-sm btn-primary'>EMI</button> */}
						<label
							onClick={() => handleModal(product)}
							htmlFor='my-modal-3'
							className='btn btn-sm btn-primary'>
							EMI
						</label>

						{/* Modal */}
						<Modal />

						<button className='btn btn-sm btn-primary btn-outline'>BUY</button>
					</div>
				</div>
			</div>

			{/* modal */}
		</>
	);
};

export default CompareProduct;
