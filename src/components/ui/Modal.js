import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../ui/Loading";
import { fetchRates } from "../../features/rates/rateSlice";

const Modal = () => {
	const [month, setMonth] = useState(3);
	const [bank, setBank] = useState("dbbl");
	const [money, setMoney] = useState(0);
	const [monthlyInst, setMonthlyInst] = useState(0);
	const [rate, setRate] = useState(0);
	const dispatch = useDispatch();
	const { modal, isLoading } = useSelector(state => state.products);
	const {
		rates,
		isLoading: loading,
		isError,
		error,
	} = useSelector(state => state.rates);

	useEffect(() => {
		dispatch(fetchRates());
	}, [dispatch]);

	if (loading || isLoading) {
		return <Loading />;
	}

	if (isError) {
		return (
			<h2 className='text-red-500 font-bold text-2xl text-center'>{error}</h2>
		);
	}

	const { name, price, image } = modal[modal.length - 1] || {};
	const { months, banks, rates: ratesArray = [] } = rates[0] || {};

	const handleMonth = e => setMonth(e.target.value);
	const handleBank = e => setBank(e.target.value);
	const handleMoney = e => setMoney(e.target.value);

	// // calculate

	const handleCalculate = () => {
		const selectMonth = months?.findIndex(x => x == month);
		const selectBank = banks?.findIndex(x => x === bank);
		const interestRate = ratesArray[selectBank][selectMonth];
		const restMoney = price - Number(money);
		const monthlyInstallment = restMoney * interestRate;
		setRate(interestRate);
		setMonthlyInst(monthlyInstallment);
	};

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
								<p className='py-6'>Price: {price}</p>
							</div>
						</div>
					</div>

					<div className='grid grid-cols-2 items-center px-14 py-2'>
						<p className='font-bold'>Select Bank</p>
						<select
							className='select select-sm select-primary w-full max-w-xs uppercase'
							onChange={handleBank}>
							{banks?.map(bank => (
								<>
									<option value={bank}>{bank}</option>
								</>
							))}
						</select>
					</div>
					<div className='grid grid-cols-2 items-center px-14 py-2'>
						<p className='font-bold'>Select Pariod</p>
						<select
							className='select select-sm select-primary w-full max-w-xs'
							onChange={handleMonth}>
							{months?.map(month => (
								<>
									<option value={month}>{month}</option>
								</>
							))}
						</select>
					</div>
					<div className='grid grid-cols-2 items-center px-14 py-2'>
						<p className='font-bold'>Advance Payment</p>
						<input
							onChange={handleMoney}
							type='text'
							placeholder='Type here'
							className='input input-bordered input-primary input-sm w-full max-w-xs'
						/>
					</div>
					<div className='text-center py-4'>
						<button
							className='btn btn-primary btn-sm'
							onClick={handleCalculate}>
							Calculate
						</button>
					</div>

					{/* calculate result  */}
					<div className='grid grid-cols-2 items-center px-14 py-2'>
						<p className='font-bold'>Monthly Installment</p>
						<p className='text-right'>{monthlyInst}</p>
					</div>
					<div className='grid grid-cols-2 items-center px-14 py-2'>
						<p className='font-bold'>Interest Rate</p>
						<p className='text-right'>{rate}%</p>
					</div>
					<div className='grid grid-cols-2 items-center px-14 py-2'>
						<p className='font-bold'>EMI Period</p>
						<p className='text-right'>{month} months</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
