import React, { useEffect, useState } from "react";
import Container from "../../components/ui/Container";
import { FaHome } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import publiser from "../../assets/images/allpublisher.png";
import AllPublisher from "./AllPublisher";
import { useGetBooksQuery } from "../../features/api/apiSlice";
import { Pagination } from "antd";
import Breadcrumb from "../../components/ui/Breadcrumb";

const Publisher = () => {
	const [total, setTotal] = useState("");
	const [page, setPage] = useState(1);
	const [postPerPage, setPostPerPage] = useState(15);
	const {
		data: books,
		isLoading,
		isError,
		error,
	} = useGetBooksQuery({ page, limit: postPerPage });

	useEffect(() => {
		setTotal(books?.data?.totalBooks);
	}, [books?.data?.totalBooks, total]);

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
		content = <h3 className='text-4xl'>Loading...</h3>;
	}
	if (!isLoading && isError) {
		content = <p className='text-red-500'>{error}</p>;
	}
	if (!isLoading && !isError && books?.data?.books?.length === 0) {
		content = <p className='text-red-500'>Books not found!</p>;
	}
	if (!isError && !isLoading && books?.data?.books?.length > 0) {
		content = books?.data?.books?.map(book => (
			<AllPublisher key={book._id} book={book} />
		));
	}
	return (
		<div>
			<Container>
				<div className='text-sm breadcrumbs py-4'>
					<ul>
						<Breadcrumb route='/' name='হোম' />
						<Breadcrumb route='/prokasok' name='প্রকাশক' />
					</ul>
				</div>

				<div>
					<img
						data-aos='fade-right'
						data-aos-easing='ease-out-cubic'
						data-aos-duration='500'
						className='w-full'
						src={publiser}
						alt=''></img>

					<p
						className='my-7 text-lg text-gray-500'
						data-aos='fade-left'
						data-aos-easing='ease-out-cubic'
						data-aos-duration='500'>
						লক্ষাধিক বইয়ের সংগ্রহ বৈশাখীবিডি-২৪ ডট কমে। বইয়ের এই বিশাল
						সমুদ্র-মন্থনে পাঠকের সুবিধার্থে প্রায় ৫০ টির মতো ক্যাটাগরি ও
						সহস্রাধিক বিষয়ভিত্তিক ক্যাটাগরি রয়েছে বৈশাখীবিডি-২৪ ডট কমে। যার ফলে
						খুব সহজেই পাঠক তার পছন্দের ক্যাটাগরি বেছে নিয়ে নির্দিষ্ট বিষয়ভিত্তিক
						বইগুলো খুঁজে পাবে খুব সহজেই। বৈশাখীবিডি-২৪ ডট কমের এই বিশাল বইয়ের
						সমুদ্রে জ্ঞানের জাহাজের নাবিক হতে আপনাকে নিমন্ত্রণ। মানচিত্রটা ধরা
						আছে নিচেই...
					</p>
				</div>

				<hr className='text-black border' />

				<div
					className='grid md:grid-cols-2 lg:grid-cols-5 py-4'
					data-aos='flip-left'
					data-aos-easing='ease-out-cubic'
					data-aos-duration='1000'>
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
		</div>
	);
};

export default Publisher;
