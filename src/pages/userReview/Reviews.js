import React from "react";
import Container from "../../components/ui/Container";
import reviewPage from "../../assets/images/book-library.jpg2.jpg";
import { useGetReviewsQuery } from "../../features/api/apiSlice";
import Loading from "../../components/ui/Loading";
import Review from "./Review";

const UserReview = () => {
	const { data: reviews, isLoading, isError, error } = useGetReviewsQuery();

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
		</Container>
	);
};

export default UserReview;
