import React, { useRef, useState } from "react";
import { FaHome } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import Container from "../../components/ui/Container";
import bg_img from "../../assets/images/allcategory.png";
import SubjectCategory from "./SubjectCategory";
import { useGetBooksQuery } from "../../features/api/apiSlice";
import { getUniqueListBy } from "../../utils/getUniqueListBy";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ColumnGroup from "antd/es/table/ColumnGroup";

const Subject = () => {
	const { data: books, isLoading, isError, error } = useGetBooksQuery();
	const navigate = useNavigate();
	const navigateBookPage = () => {
		navigate("/bookroute")
	}

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
		// content = books?.data?.books?.map(book => (
		// 	<SubjectCategory key={book._id} book={book} />
		// ));

		const categorys = getUniqueListBy(books?.data?.books, "category");
		content = categorys?.map(book => (
			<SubjectCategory key={book._id} book={book} />
		));
	}


	// SEARCH AUTHOR Start
	const inputRef = useRef(null)
	const [searchListVisible, setSearchListVisible] = useState(true);

	const reSeatInput = () => {
		setSearchData([]);
		inputRef.current.value = "";
		// console.log(inputRef.current.value);
	}

	const [searchData, setSearchData] = useState([]);
	// console.log(searchData);
	const searchItem = event => {
		const searchText = event.target.value;
		// console.log(searchText);
		const result = books?.data?.books.filter(item => {
			return (
				item.category.toLowerCase().includes(searchText.toLowerCase()) ||
				item.category.toLowerCase().includes(searchText.toLowerCase())
			);
		});
		if (!searchText) {
			setSearchData([]);
			console.log("hello world");
		} else if (result) {
			setSearchData(result);
		}
		else if (result) {
			setSearchData(result)
		}
	}
	// SEARCH AUTHOR END

	return (
		<Container>
			<section className='flex my-5'>
				<FaHome className='hover:cursor-pointer' />
				<RiArrowRightSLine className='mx-1 mt-0.5' />
				<button>বই</button>
				<RiArrowRightSLine className='mx-1 mt-0.5' />
				<h1>বিষয়</h1>
			</section>

			<div>
				<img
					data-aos='fade-right'
					data-aos-easing='ease-out-cubic'
					data-aos-duration='1000'
					className='w-full'
					src={bg_img}
					alt=''></img>
				<p
					data-aos='fade-left'
					data-aos-easing='ease-out-cubic'
					data-aos-duration='1000'
					className='pt-2 text-gray-500 text-sm'>
					লক্ষাধিক বইয়ের সংগ্রহ রকমারি ডট কমে। বইয়ের এই বিশাল সমুদ্র-মন্থনে
					পাঠকের সুবিধার্থে প্রায় ৫০ টির মতো ক্যাটাগরি ও সহস্রাধিক বিষয়ভিত্তিক
					ক্যাটাগরি রয়েছে রকমারি ডট কমে। যার ফলে খুব সহজেই পাঠক তার পছন্দের
					ক্যাটাগরি বেছে নিয়ে নির্দিষ্ট বিষয়ভিত্তিক বইগুলো খুঁজে পাবে খুব সহজেই।
					রকমারি ডট কমের এই বিশাল বইয়ের সমুদ্রে জ্ঞানের জাহাজের নাবিক হতে আপনাকে
					নিমন্ত্রণ। মানচিত্রটা ধরা আছে নিচেই...
				</p>
			</div>

			<section className='flex justify-center items-center my-5'>
				<div className='mr-8'>
					<h1
						className='text-xl text-gray-700'
						data-aos='fade-down'
						data-aos-easing='ease-out-cubic'
						data-aos-duration='1000'>
						Search your favorite category
					</h1>
				</div>

				<div className='flex items-center justify-center'>
					<div className="relative">
						<div
							className='flex border border-primary border-2'
							data-aos='fade-up'
							data-aos-easing='ease-out-cubic'
							data-aos-duration='1000'>
							<input
								ref={inputRef}
								type='text'
								className='px-4 py-2 input-sm w-24 md:w-80 input-primary'
								placeholder='বইয়ের নাম ও লেখক দিয়ে অনুসন্ধান করুন'
								onChange={event => searchItem(event)}
							/>
							<button className='flex items-center justify-center px-4 bg-primary'>
								<svg
									className='w-6 h-6 text-white'
									fill='currentColor'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'>
									<path d='M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z' />
								</svg>
							</button>
						</div>
					</div>
					<div className="absolute z-10">
						{searchListVisible && (
							<div>
								{searchData.length ?
									<ul className="mt-[285px] w-[376px] h-auto px-4 bg-accent border-2 z-10 border-primary mr-1">
										{searchData.map(data =>
											<li onClick={() => reSeatInput()} className="cursor-pointer border-b border-primary"><Link to="/bookroute" >{data.category}</Link></li>)
										}

									</ul>
									:
									""
								}
							</div>
						)}
					</div>
				</div>
			</section>

			<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 py-10'>
				{content}
			</div>
		</Container>
	);
};

export default Subject;
