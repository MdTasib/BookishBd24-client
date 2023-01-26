import React from "react";
import { Link, useParams } from "react-router-dom";
import {
	useGetBookDetailsQuery,
	useGetBooksQuery,
} from "../../features/api/apiSlice";
import bookImg2 from "../../assets/images/book2.png";
import addimg1 from "../../assets/images/Adds/add1.png";
import addimg2 from "../../assets/images/Adds/add2.png";
import addimg3 from "../../assets/images/Adds/add3.png";
import addimg4 from "../../assets/images/Adds/add4.png";
import Container from "../../components/ui/Container";
import Review from "./Review";
import Loading from "../../components/ui/Loading";
import { useState } from "react";

const Details = () => {
	const [seeMore, setSeeMore] = useState(false);
	const { id } = useParams();
	const { data: book, isLoading, isError, error } = useGetBookDetailsQuery(id);
	const {
		data: relatedBooks,
		isLoading: isRelatedBookLoading,
		isError: isRelatedBookError,
	} = useGetBooksQuery({ category: book?.data?.category });

	// conent loaded
	let content = null;
	if (isLoading && isRelatedBookLoading) {
		content = <Loading />;
	}
	if (
		(!isLoading && isError) ||
		(!isRelatedBookLoading && isRelatedBookError)
	) {
		content = <p className='text-red-500'>{error}</p>;
	}
	if (!isLoading && !isError) {
		content = (
			<div className='md:flex lg:flex gap-4'>
				<div className='basis-1/4'>
					<img className='h-1/2' src={book?.data?.imageURL} alt='' />
				</div>
				<div className='basis-3/4'>
					<div className='mb-3'>
						<h2 className='text-xl'>{book?.data?.name}</h2>
						<p>
							লেখক :{" "}
							<span className='text-[#F23534]'>{book?.data?.author}</span>
						</p>
						<p>
							প্রকাশনী :{" "}
							<span className='text-[#F23534]'>{book?.data?.publication}</span>
						</p>
						<p>
							বিষয় :{" "}
							<span className='text-[#F23534]'>{book?.data?.subject}</span>
						</p>
						<small>
							পৃষ্ঠা : {book?.data?.pages}, কভার : {book?.data?.cover}, সংস্করণ
							: {book?.data?.edition}
						</small>
						<small>ভাষা : বাংলা</small>
					</div>
					{/* <p className='mb-6'>{book?.data?.description}</p> */}

					{seeMore ? book?.data?.description : `${book?.data?.description.substring(0, 250)}`}
					<button onClick={() => setSeeMore(!seeMore)} className="">
						<p className="text-red-600">
							{seeMore ? "...অল্প পড়ুন" : "...আরো পড়ুন"}
						</p>
					</button>


					<h2 className='text-xl mb-3 text-[#F23534]'>
						{book?.data?.price} ৳{" "}
						<del className='text-gray-500'>{book?.data?.prePrice} ৳</del>(
						{book?.data?.discount}% ছাড়ে)
					</h2>
					<div>
						<button className='bg-[#F23534] text-white px-4 py-2 rounded'>
							অর্ডার করুন
						</button>
						<button className='bg-[#F29434] text-white px-4 py-2 rounded ml-3 hover:bg-[#F23534]'>
							আরও পড়ুন
						</button>
					</div>

					{/* ADDS IMAGES------------------------------- */}
					<div className='mt-4 md:grid grid-cols-2 gap-4'>
						<img className='w-80 h-auto mb-4 md:mb-0' src={addimg1} alt='' />
						<img className='w-80 h-auto mb-4 md:mb-0' src={addimg2} alt='' />
						<img className='w-80 h-auto mb-4 md:mb-0' src={addimg3} alt='' />
						<img className='w-80 h-auto mb-4 md:mb-0' src={addimg4} alt='' />
					</div>
				</div>
			</div>
		);
	}

	return (
		<Container>
			<div className='py-10'>
				<div className='md:grid grid-cols-[70%,30%] justify-around gap-4'>
					<div>
						{content}
						<Review />
					</div>

					<div className=''>
						<div className='border border-gray-500 '>
							<h2 className='text-primary font-medium border-b border-t-primary border-t-2 border-gray-500 p-3'>
								আরো দেখুন…
							</h2>

							{!isRelatedBookLoading && !isRelatedBookError
								? relatedBooks?.data?.books.slice(0, 8).map(book => (
									<Link key={book._id} to={`/book/${book._id}`}>
										<div className='flex gap-2 border-b border-gray-500 p-2 hover:border-primary'>
											<img className='h-24 w-20' src={book.imageURL} alt='' />
											<div>
												<h4 className='mb-2'>
													{book.name.slice(0, 30)}{" "}
													{book.name.length > 30 ? "..." : ""}
												</h4>
												<small className='text-gray-700 block'>
													{book.author.slice(0, 30)}{" "}
													{book.author.length > 30 ? "..." : ""}
												</small>
												<small className='text-gray-700 block'>
													{book.publication}
												</small>
												<small>
													<del className='text-gray-600'>{book.prePrice}</del>
												</small>
												<small className='text-[#F23534] ml-4'>
													{book.price}
												</small>
											</div>
										</div>
									</Link>
								))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Details;
