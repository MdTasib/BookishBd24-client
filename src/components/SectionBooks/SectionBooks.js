import React from "react";
import Container from "../ui/Container";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Book from "./Book";
import Button from "../ui/Button";
import { products } from "../../data/data";

const SectionBooks = ({ title }) => {
	const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 1560 },
			items: 6,
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

	return (
		<section className='pb-10'>
			<Container>
				<div className='shadow shadow-primary border-primary border p-3 mb-4'>
					<h2 className='text-primary font-medium'>{title}</h2>
				</div>

				<Carousel responsive={responsive}>
					{products?.map(item => (
						<Book key={item.id} item={item} />
					))}
				</Carousel>

				<div className='text-center pt-4'>
					<Button>সকল নতুন প্রকাশিত বই</Button>
				</div>
			</Container>
		</section>
	);
};

export default SectionBooks;
