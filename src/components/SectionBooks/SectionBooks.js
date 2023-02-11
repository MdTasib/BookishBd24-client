import React from "react";
import Container from "../ui/Container";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Book from "./Book";
import Button from "../ui/Button";
import { useGetBooksQuery } from "../../features/api/apiSlice";
import Loading from "../../components/ui/Loading";

const SectionBooks = ({ title, filters }) => {
	const {
		data: books,
		isLoading,
		isError,
		error,
	} = useGetBooksQuery({ ...filters });

	const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 1560 },
			items: 4,
		},
		desktop: {
			breakpoint: { max: 1560, min: 1024 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 1024, min: 780 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 780, min: 0 },
			items: 1,
		},
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
		<section className='pb-10'>
			<Container>
				<div data-aos="fade-down"
				data-aos-easing="ease-out-cubic"
				data-aos-duration="1000" className='shadow shadow-primary border-primary border p-3 mb-4'>
					<h2 className='text-primary font-medium'>{title}</h2>
				</div>

				<Carousel responsive={responsive}>{content}</Carousel>

				<div className='text-center pt-4'>
					<Button>সকল নতুন প্রকাশিত বই</Button>
				</div>
			</Container>
		</section>
	);
};

export default SectionBooks;
