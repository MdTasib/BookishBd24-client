import React, { useState } from "react";
import { useSelector } from "react-redux";
import { cartTotalPriceSelector } from "../../features/cart/selectors";

const Checkout = () => {
	const totalPrice = useSelector(cartTotalPriceSelector);
	const [select, setSelect] = useState(0);

	const handleFilters = event => setSelect(event.target.value);

	return (
		<div className='bg-[#FFFFFF] p-4'>
			<h4 className='mb-2 text-xl'>Checkout Summary</h4>
			<hr className='mb-4' />
			<div className='inline py-2 pr-2'>
				<select
					className='border border-gray-400 w-[100%]'
					onChange={handleFilters}>
					<option value={0}>Select</option>
					<option value={10}>Chittagong</option>
					<option value={20}>Dhaka</option>
					<option value={30}>Rajshahi</option>
					<option value={40}>Dinajpur</option>
				</select>
			</div>
			<div className='mt-4'>
				<hr />
				<div className='flex justify-between mt-4'>
					<p>Shipping</p>
					<p>{select} TK.</p>
				</div>
				<hr />
				<div className='flex justify-between mt-4'>
					<p>Total</p>
					<p>{totalPrice} TK.</p>
				</div>
				<hr />
				<div className='flex justify-between mt-4 font-bold text-primary'>
					<p>Payable Total</p>
					<p>{totalPrice + Number(select)} TK.</p>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
