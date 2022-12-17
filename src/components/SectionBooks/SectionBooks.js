import React from "react";
import Container from "../ui/Container";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Book from "./Book";

const SectionBooks = () => {
	const items = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
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
		<section className='py-20'>
			<Container>
				<div className='shadow shadow-primary border-primary border p-3 mb-10'>
					<h2 className='text-primary font-medium'>
						ইসলামী সাহিত্য, গল্প-উপন্যাস এবং সফরনামা
					</h2>
				</div>

				<Carousel responsive={responsive}>
					{items.map(item => (
						<Book />
					))}
				</Carousel>
			</Container>
		</section>
	);
};

export default SectionBooks;
