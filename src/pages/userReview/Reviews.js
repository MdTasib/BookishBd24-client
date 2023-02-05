import React, { useEffect, useState } from "react";
import Container from "../../components/ui/Container";
import reviewPage from "../../assets/images/book-library.jpg2.jpg";
import { useGetReviewsQuery } from "../../features/api/apiSlice";
import Loading from "../../components/ui/Loading";
import Review from "./Review";
import Breadcrumb from "../../components/ui/Breadcrumb";
import { Pagination } from "antd";

const UserReview = () => {
	const [total, setTotal] = useState("");
	const [page, setPage] = useState(1);
	const [postPerPage, setPostPerPage] = useState(9);
	const { data: reviews, isLoading, isError, error } = useGetReviewsQuery({ page, limit: postPerPage });
    
    useEffect(() => {
		setTotal(reviews?.data?.totalBooks);
	}, [ reviews?.data?.totalBooks, total]);

	const onShowSizeChange = (current, pageSize) => {
		setPostPerPage(pageSize);
	};

	const itemRender = (current, type, originalElement) => {
		if (type === "prev") {
			return <p>Previous</p>;
		}
		if (type === "next") {
			return <p>Next</p>;
		}
		return originalElement;
	};


	// conent loaded
	let content = null;
	if (isLoading) {
		content = <Loading />;
	}
	if (!isLoading && isError) {
		content = <p className='text-red-500'>{error}</p>;
	}
	if (!isError && !isLoading && reviews?.data?.reviews?.length > 0) {
		content = reviews?.data?.reviews?.map(review => (
			<Review key={review._id} review={review} />
		));
	}

	return (
		<Container>
			<div>
			<div className='text-sm breadcrumbs py-4'>
				<ul>
					<Breadcrumb route='/' name='হোম' />
					<Breadcrumb route='/user-review' name='রিভিউসমূহ' />
				</ul>
			</div>
				<img
					data-aos='flip-left'
					data-aos-easing='ease-out-cubic'
					data-aos-duration='1000'
					className='w-full h-[250px]'
					src={reviewPage}
					alt=''
				/>
				<h3 className='text-2xl mt-2 mb-4'>
					বুকিশওয়ার্ড২৪ সম্পর্কে ক্রেতাদের মতামত:
				</h3>
			</div>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-5'>
				{content}
			</div>
			<div className='text-center py-10'>
				<Pagination
					onChange={value => setPage(value)}
					pageSize={postPerPage}
					total={total}
					current={page}
					showSizeChanger
					showQuickJumper
					onShowSizeChange={onShowSizeChange}
					itemRender={itemRender}
				/>
			</div>
		</Container>
	);
};

export default UserReview;
