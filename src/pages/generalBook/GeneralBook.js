import React, { useEffect, useState } from "react";
import Container from "../../components/ui/Container";
import Slider from "infinite-react-carousel";
import Book from "../../components/SectionBooks/Book";
import { useGetBooksQuery } from "../../features/api/apiSlice";
import { Pagination } from "antd";
import GeneralBookSlider from "./GeneralBookSlider";

const GeneralBook = () => {
	const [total, setTotal] = useState("");
	const [page, setPage] = useState(1);
	const [postPerPage, setPostPerPage] = useState(12);
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
			<Book key={book._id} book={book} />
		));
	}

	

	return (
		<Container>
			<GeneralBookSlider />
			<div>
				<div className='shadow shadow-gray-400 border-gray-400 border p-3 my-6'>
					<h2 className='text-primary font-bold animate-pulse'>ভর্তি গাইড</h2>
				</div>
			</div>

			<div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-4 mb-5' data-aos="flip-left"
				data-aos-easing="ease-out-cubic"
				data-aos-duration="500">
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

export default GeneralBook;
