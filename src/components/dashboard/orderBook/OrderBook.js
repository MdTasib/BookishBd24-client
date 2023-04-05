import React from "react";
import { Helmet } from "react-helmet";
import bookimg from "../../../assets/images/book.png";
import { useGetOrderByEmailQuery } from "../../../features/api/apiSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../ui/Loading";
import { Link } from "react-router-dom";

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
		content = orderBooks?.data?.orders.map((order, index) => (
			<tr>
				<td>
					<img className='h-8' src={order.imageURL} alt="" />
				</td>
				<td>
					{order.name.slice(0, 25)} {order.name.length > 25 ? "..." : ""}
				</td>
				<td>
					{order.author.slice(0, 25)} {order.author.length > 25 ? "..." : ""}
				</td>
				<td>
					{order.qty}
				</td>
				<td>
					{order.price * order.qty}
				</td>
				<td>
					<Link to={`/dashboard/payment/${order._id}`}><button className='bg-green-100 px-2 rounded-md'>পেমেন্ট করুন</button></Link>
				</td>
			</tr>
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
			<table className='table w-full'>
				<thead>
					<tr>
						<th>ছবি</th>
						<th>নাম</th>
						<th>লেখক নাম</th>
						<th>বই সংখ্যা</th>
						<th>দাম</th>
						<th>পেমেন্ট</th>
					</tr>
				</thead>
				<tbody>{content}</tbody>
			</table>
		</div>
	);
};

export default OrderBook;