import { useState } from "react";
import Book from "../../components/SectionBooks/Book";
import Container from "../../components/ui/Container";
import { useGetBooksQuery } from "../../features/api/apiSlice";
import FilterBook from "./FilterBook";
import Loading from "../../components/ui/Loading";
import { Pagination } from "antd";
import { useEffect } from "react";

const BookRoute = () => {
	const [total, setTotal] = useState("");
	const [page, setPage] = useState(1);
	const [postPerPage, setPostPerPage] = useState(9);
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
		content = <Loading />;
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
			<div>
				<h1 className='text-2xl'>বই</h1>
			</div>

			<div className='flex items-center md:ml-[950px] lg:md:ml-[950px]'>
				<div>
					<label className='font-bold mr-2 text-gray-600' htmlFor='filters'>
						সর্ট করুন
					</label>
				</div>
				<div className='inline'>
					<select
						id='filters'
						className='select select-primary select-sm w-full max-w-xs'>
						<option selected>All</option>
						<option>price - high to low</option>
						<option>price - low to high</option>
					</select>
				</div>
			</div>

			<section className='md:flex lg:flex'>
				<div className='w-[300px] mr-3'>
					<FilterBook />
				</div>

				<div className='w-full md:w-[82%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-y-4 my-5' data-aos="fade-up"
					data-aos-easing="ease-out-cubic"
					data-aos-duration="1000">
					{content}
				</div>
			</section>

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

export default BookRoute;
