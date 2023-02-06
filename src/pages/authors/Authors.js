import React, { useEffect, useRef, useState } from "react";
import Container from "../../components/ui/Container";
import Breadcrumb from "../../components/ui/Breadcrumb";
import authorPage from "../../assets/images/author-page.jpg";
import { useGetAuthorsQuery } from "../../features/api/apiSlice";
import Author from "./Author";
import Loading from "../../components/ui/Loading";
import { Pagination } from "antd";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";



const Authors = () => {
	const [total, setTotal] = useState("");
	const [page, setPage] = useState(1);
	const [postPerPage, setPostPerPage] = useState(8);
	const {
		data: authors,
		isLoading,
		isError,
		error,
	} = useGetAuthorsQuery({ page, limit: postPerPage });
	const { data: allAuthors, loading, ifError } = useGetAuthorsQuery();

	// SEARCH AUTHOR Start
	const inputRef = useRef(null);
	const [searchListVisible, setSearchListVisible] = useState(true);

	const reSeatInput = () => {
		setSearchData([]);
		inputRef.current.value = "";
	};

	const [searchData, setSearchData] = useState([]);
	const searchItem = event => {
		const searchText = event.target.value;
		console.log(searchText);
		const result = allAuthors?.data?.authors.filter(item => {
			return (
				item.author.toLowerCase().includes(searchText.toLowerCase()) ||
				item.authorEng.toLowerCase().includes(searchText.toLowerCase())
			);
		});
		if (!searchText) {
			setSearchData([]);
		} else if (result) {
			setSearchData(result);
		} else if (result) {
			setSearchData(result);
		}
	};
	// SEARCH AUTHOR END

	useEffect(() => {
		setTotal(authors?.data?.totalAuthor);
	}, [authors?.data?.totalAuthor, total]);

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
	if (isLoading || loading) {
		content = <Loading />;
	}
	if ((!isLoading && isError) || (!loading && ifError)) {
		content = <p className='text-red-500'>{error}</p>;
	}
	if (!isLoading && !isError && authors?.data?.authors?.length === 0) {
		content = <p className='text-red-500'>authors not found!</p>;
	}
	if (!isError && !isLoading && authors?.data?.authors?.length > 0) {
		content = authors?.data?.authors?.map(author => (
			<Author key={author._id} author={author} />
		));
	}

	return (
		<Container>
			<Helmet>
				<meta charSet="utf-8"/>
				<title>Authors | BookishBD24</title>
				<meta name="description" content="BookishBD24 website using React JS"/>
			</Helmet>
			<div className='text-sm breadcrumbs py-4'>
				<ul>
					<Breadcrumb route='/' name='হোম' />
					<Breadcrumb route='/authors' name='লেখক' />
				</ul>
			</div>

			<section
				className='pb-2'
				data-aos='fade-left'
				data-aos-easing='ease-out-cubic'
				data-aos-duration='1000'>
				<img src={authorPage} alt='' className='w-full' />
				<p className='pt-2 text-gray-500 text-sm'>
					লেখক! আক্ষরিক ভাবে বলতে গেলে সৃজনশীল কোনকিছু লেখেন যিনি তাকেই লেখক বলা
					যায়। কিন্তু ‘লেখক’ শব্দটির ব্যাপ্তি আসলে এতোটুকুতেই সীমাবদ্ধ নয়। লেখক
					এই বাস্তবিক জগতের সমান্তরালে একটি কাল্পনিক পৃথিবী তৈরির ক্ষমতা রাখেন।
					কাল্পনিক চরিত্রগুলো তার লেখনী ও কলমের প্রাণখোঁচায় জীবন্ত হয়ে ওঠে। একজন
					লেখক তাঁর লেখার মাধ্যমে একটি প্রজন্মের চিন্তাধারা গড়ে দিতে পারেন। তাই
					লেখকদের কিংবদন্তী হবার পথ করে দিতে রকমারি ডট কম বদ্ধ পরিকর।
				</p>
			</section>

			<div>
				<div
					className='flex items-center py-4 relative'
					data-aos='flip-right'
					data-aos-easing='ease-out-cubic'
					data-aos-duration='500'>
					<div className='flex border border-primary border-2'>
						<input
							ref={inputRef}
							type='text'
							className='px-4 py-2 input-sm w-full md:w-80 input-primary'
							placeholder='লেখকের নাম দিয়ে অনুসন্ধান করুন'
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
				<div className='absolute z-10'>
					{searchListVisible && (
						<div>
							{searchData.length ? (
								<ul className='top-12 w-[376px] h-auto px-4 bg-accent border-2 z-10 border-primary mr-2'>
									{searchData.map(data => (
										<li
											onClick={() => reSeatInput()}
											className='cursor-pointer border-b border-primary'>
											<NavLink to={`/author/${data._id}`}>
												{data.author}
											</NavLink>
										</li>
									))}
								</ul>
							) : (
								""
							)}
						</div>
					)}
				</div>
			</div>

			<div
				className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4'
				data-aos='fade-right'
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
	);
};

export default Authors;
