import React from "react";
import Container from "../../components/ui/Container";
import cartIcon from "../../assets/icons/shopping-cart.gif";
import Checkout from "./Checkout";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteToCart } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
	const { cart } = useSelector(state => state);
	const dispatch = useDispatch();

	return (
		<div className='bg-[#F1F2F4]'>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Cart | BookishBD24</title>
				<meta name='description' content='BookishBD24 website using React JS' />
			</Helmet>
			<Container>
				<div className='md:flex lg:flex justify-between gap-6'>
					<div className='md:w-[82%] lg:w-[82%]'>
						<h3 className='text-xl pt-6'>আপনার শপিং ব্যাগে ৫টি আইটেম আছে</h3>

						<div className='bg-[#FFF] mt-8 mb-8'>
							<div className='py-6'>
								{cart.length > 0 ? (
									cart.map(item => (
										<div className='lg:flex md:flex items-center justify-between border-b-2 border-b-primary'>
											<div className='flex items-center gap-5 mt-5 mb-5 md:ml-10 lg:ml-10 ml-4 pt-5 md:pt-0 lg:pt-0'>
												<img className='h-[100px]' src={item.imageURL} alt='' />
												<div>
													<p>
														{item.name.length > 40
															? item.name.slice(0, 40)
															: item.name}
													</p>
													<p>
														{item.author.length > 40
															? item.author.slice(0, 40)
															: item.author}
													</p>
													<p>
														<small>{item.publication}</small>
													</p>
												</div>
											</div>
											<div className='border border-gray-500 inline ml-4 md:ml-0 lg:ml-0'>
												<button
													onClick={() => dispatch(deleteToCart(item))}
													className='px-4 border-r border-gray-500 bg-gray-200'>
													-
												</button>
												<button className='px-4 border-r border-gray-500 bg-white cursor-auto'>
													{item.qty}
												</button>
												<button
													onClick={() => dispatch(addToCart(item))}
													className='px-4 bg-gray-200'>
													+
												</button>
											</div>
											<div className='md:mr-10 lg:mr-10 ml-4 md:ml-0 lg:ml-0'>
												<p>TK. {item.price}</p>
												<p>
													<del className='text-red-600'>
														TK. {item.prePrice}
													</del>
												</p>
											</div>
										</div>
									))
								) : (
									<div className='text-center'>
										<img
											src={cartIcon}
											alt=''
											className='w-25 mx-auto block'
											width='200'
										/>
										<h2 className='font-bold text-2xl'>তোমার থলে তো খালি!</h2>
										<p className='text-xl'>
											মনে হচ্ছে আপনি এখনও অর্ডার করেননি।
										</p>
										<Link
											to='/bookroute'
											className='text-sm font-bold text-primary'>
											কেনাকাটা চালিয়ে যান
										</Link>
									</div>
								)}
							</div>
							{cart.length > 0 ? (
								<div className='bg-[#FFFFFF] p-8 relative'>
									<button className='bg-primary text-white py-2 px-6 absolute right-0 top-2 mr-5 rounded'>
										Place Order
									</button>
								</div>
							) : (
								""
							)}
						</div>
					</div>

					<div className='md:w-[300px] lg:w-[300px] mt-8 pb-4 md:pb-0 lg:pb-0'>
						<Checkout />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Cart;
