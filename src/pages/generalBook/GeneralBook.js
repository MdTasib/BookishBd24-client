import React from "react";
import Container from "../../components/ui/Container";
import Slider from "../../components/Slider/Slider";
import Book from "../../components/SectionBooks/Book";
import { useGetBooksQuery } from "../../features/api/apiSlice";

const GeneralBook = () => {
	const { data: books, isLoading, isError, error } = useGetBooksQuery();

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
			<div>
				<Slider />
			</div>
			<div>
				<div className='shadow shadow-gray-400 border-gray-400 border p-3 mb-4'>
					<h2 className='text-red-400 font-medium'>ভর্তি গাইড</h2>
				</div>
			</div>

			<div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-4 mb-5'>
				{content}
			</div>
		</Container>
	);
};

export default GeneralBook;
