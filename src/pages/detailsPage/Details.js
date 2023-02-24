import React from "react";
import { Link, useParams } from "react-router-dom";
import {
	useGetBookDetailsQuery,
	useGetBooksQuery,
} from "../../features/api/apiSlice";
import addimg1 from "../../assets/images/Adds/add1.png";
import addimg2 from "../../assets/images/Adds/add2.png";
import addimg3 from "../../assets/images/Adds/add3.png";
import addimg4 from "../../assets/images/Adds/add4.png";
import Container from "../../components/ui/Container";
import Loading from "../../components/ui/Loading";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

const Details = () => {
	const models = [
		{
			id: 1,
			image:
				"https://s3-ap-southeast-1.amazonaws.com/rokomari110/LookInside20190827/7046f8b31_188057-3.jpg",
		},
		{
			id: 2,
			image:
				"https://s3-ap-southeast-1.amazonaws.com/rokomari110/LookInside20190827/b7f556d65_188057-4.jpg",
		},
	];
	const [seeMore, setSeeMore] = useState(false);
	const { id } = useParams();
	const dispatch = useDispatch();
	const { data: book, isLoading, isError, error } = useGetBookDetailsQuery(id);
	const {
		data: relatedBooks,
		isLoading: isRelatedBookLoading,
		isError: isRelatedBookError,
	} = useGetBooksQuery({
		author: book?.data?.author,
	});

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

					{seeMore
						? book?.data?.description
						: `${book?.data?.description.substring(0, 250)}`}
					<button onClick={() => setSeeMore(!seeMore)} className=''>
						<p className='text-red-600'>
							{seeMore ? "...অল্প পড়ুন" : "...আরো পড়ুন"}
						</p>
					</button>

					<h2 className='text-xl mb-3 text-[#F23534] animate-pulse'>
						{book?.data?.price} ৳{" "}
						<del className='text-gray-500'>{book?.data?.prePrice} ৳</del>(
						{book?.data?.discount}% ছাড়ে)
					</h2>
					<div>
						<button
							onClick={() => dispatch(addToCart(book?.data))}
							className='bg-[#F23534] text-white px-4 py-2 rounded'>
							অর্ডার করুন
						</button>
						
			{/* The button to open modal */}
  <label htmlFor="my-modal-3" className="bg-[#F29434] text-white px-4 py-2 rounded ml-3 hover:bg-[#F23534] cursor-pointer">আরও পড়ুন</label>
  <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold text-center">{book?.data?.name}</h3>
    <p className="text-center">{book?.data?.author}</p>
	{models?.map(model => (
				<img
					key={model.id}
					className='w-full'
					src={model.image}
					alt=''
					/>
				))}
     </div>
    </div>
	</div>

					{/* ADDS IMAGES------------------------------- */}
					<div className='mt-4 md:grid grid-cols-2 gap-4'>
						<img
							data-aos='flip-left'
							data-aos-easing='ease-out-cubic'
							data-aos-duration='500'
							className='w-80 h-auto mb-4 md:mb-0'
							src={addimg1}
							alt=''
						/>
						<img
							data-aos='flip-right'
							data-aos-easing='ease-out-cubic'
							data-aos-duration='500'
							className='w-80 h-auto mb-4 md:mb-0'
							src={addimg2}
							alt=''
						/>
						<img className='w-80 h-auto mb-4 md:mb-0' src={addimg3} alt='' />
						<img className='w-80 h-auto mb-4 md:mb-0' src={addimg4} alt='' />
					</div>
				</div>
			</div>
		);
	}

	return (
		<Container>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Details | BookishBD24</title>
				<meta name='description' content='BookishBD24 website using React JS' />
			</Helmet>
			<div className='py-10'>
				<div className='md:grid grid-cols-[70%,30%] justify-around gap-4'>
					<div>
						{content}
						{/* <Review /> */}
					</div>

					<div className=''>
						<div className='border border-gray-500 '>
							<h2 className='text-primary font-bold border-b border-t-primary border-t-2 border-gray-500 p-3 animate-pulse'>
								আরো দেখুন…
							</h2>

							{!isRelatedBookLoading &&
							!isRelatedBookError &&
							relatedBooks?.data?.books.length > 0 ? (
								relatedBooks?.data?.books.slice(0, 8).map(book => (
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
							) : (
								<p className='text-primary font-medium text-center py-2'>
									এই লেখকের অন্য কোন বই পাওয়া যায়নি
								</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Details;
