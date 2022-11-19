import React from "react";
import { useSelector } from "react-redux";
import Loading from "../ui/Loading";

const Modal = () => {
	const { modal, isLoading } = useSelector(state => state.products);

	if (isLoading) {
		return <Loading />;
	}

	const { name, price, image } = modal[modal.length - 1] || {};

	return (
		<>
			<input type='checkbox' id='my-modal-3' className='modal-toggle' />
			<div className='modal'>
				<div className='modal-box relative'>
					<label
						htmlFor='my-modal-3'
						className='btn btn-sm btn-primary btn-circle absolute right-2 top-2'>
						✕
					</label>

					{/* modal content */}
					<div className='hero'>
						<div className='hero-content flex-col lg:flex-row'>
							<img
								src={image}
								className='max-w-sm w-40 rounded-lg shadow-2xl'
								alt=''
							/>
							<div>
								<h2 className='text-2xl font-bold'>{name}</h2>
								<p className='py-6'>Price: ${price}</p>
							</div>
						</div>
					</div>

					<div className='grid grid-cols-2 items-center px-14 py-2'>
						<p className='font-bold'>Select Bank</p>
						<select className='select select-sm select-primary w-full max-w-xs'>
							<option disabled selected>
								Dark mode or light mode?
							</option>
							<option>Auto</option>
							<option>Dark mode</option>
							<option>Light mode</option>
						</select>
					</div>
					<div className='grid grid-cols-2 items-center px-14 py-2'>
						<p className='font-bold'>Select Pariod</p>
						<select className='select select-sm select-primary w-full max-w-xs'>
							<option disabled selected>
								Dark mode or light mode?
							</option>
							<option>Auto</option>
							<option>Dark mode</option>
							<option>Light mode</option>
						</select>
					</div>
					<div className='grid grid-cols-2 items-center px-14 py-2'>
						<p className='font-bold'>Advance Payment</p>
						<input
							type='text'
							placeholder='Type here'
							className='input input-bordered input-primary input-sm w-full max-w-xs'
						/>
					</div>
					<div className='text-center py-4'>
						<div className='btn btn-primary btn-sm'>Calculate</div>
					</div>

					{/* calculate result  */}
					<div className='grid grid-cols-2 items-center px-14 py-2'>
						<p className='font-bold'>Monthly Installment</p>
						<p className='text-right'>$0000</p>
					</div>
					<div className='grid grid-cols-2 items-center px-14 py-2'>
						<p className='font-bold'>Interest Rate</p>
						<p className='text-right'>4%</p>
					</div>
					<div className='grid grid-cols-2 items-center px-14 py-2'>
						<p className='font-bold'>EMI Period</p>
						<p className='text-right'>3 months</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
