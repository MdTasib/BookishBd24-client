import React from "react";
import { Helmet } from "react-helmet";
import bookimg from "../../../assets/images/book.png";
import { useGetOrderByEmailQuery } from "../../../features/api/apiSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../ui/Loading";

const OrderBook = () => {
	const [user, loading] = useAuthState(auth);
	const {
		data: orderBooks,
		isLoading,
		isError,
		error,
	} = useGetOrderByEmailQuery(user?.email);

	// conent loaded
	let content = null;
	if (isLoading || loading) {
		content = <Loading />;
	}
	if ((!isLoading && isError) || loading) {
		content = <p className='text-red-500'>{error}</p>;
	}
	if (orderBooks?.data?.orders?.length === 0) {
		content = <p className='text-red-500'>No orders found</p>;
	}
	if (orderBooks?.data?.orders?.length > 0) {
		content = orderBooks?.data?.orders.map(order => (
			<div className='flex gap-4 border bg-white mt-2 lg:ml-2 md:ml-2 p-4 rounded-md shadow-md'>
				<div>
					<img className='h-16' src={order.imageURL} alt='' />
				</div>
				<div>
					<h4 className='font-bold'>
						{order.name.slice(0, 25)} {order.name.length > 25 ? "..." : ""}
					</h4>
					<p>
						{" "}
						{order.author.slice(0, 25)} {order.author.length > 25 ? "..." : ""}
					</p>
					<button className='bg-green-100 px-2 rounded-md'>Unpaid</button>
				</div>
			</div>
		));
	}

	console.log(orderBooks?.data?.orders);
	console.log(user?.email);

	return (
		<div className='bg-[#F3F6FC] h-[100vh]'>
			<Helmet>
				<meta charSet='utf-8' />
				<title>OrderBook | BookishBD24</title>
				<meta name='description' content='BookishBD24 website using React JS' />
			</Helmet>
			<div className='lg:grid md:grid grid-cols-4 gap-4 p-2'>{content}</div>
		</div>
	);
};

export default OrderBook;