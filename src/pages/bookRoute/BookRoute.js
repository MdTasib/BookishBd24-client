import { useState, useEffect } from "react";
import { Pagination } from "antd";
import Book from "../../components/SectionBooks/Book";
import Container from "../../components/ui/Container";
import { useGetBooksQuery } from "../../features/api/apiSlice";
import { getUniqueListBy } from "../../utils/getUniqueListBy";
import Loading from "../../components/ui/Loading";

const BookRoute = () => {
	const [totalBooks, setTotalBooks] = useState([]);
	const [total, setTotal] = useState("");
	const [page, setPage] = useState(1);
	const [postPerPage, setPostPerPage] = useState(9);
	const [filters, setFilters] = useState("");
	const [filtersBySelect, setFiltersBySelect] = useState({
		category: "",
		publication: "",
		author: "",
		language: "",
	});

	// FILTERS QUERY
	let filtersQuery = {};
	if (filtersBySelect.category !== "") {
		filtersQuery.category = filtersBySelect.category;
	}
	if (filtersBySelect.author !== "") {
		filtersQuery.author = filtersBySelect.author;
	}
	if (filtersBySelect.publication !== "") {
		filtersQuery.publication = filtersBySelect.publication;
	}
	if (filtersBySelect.language !== "") {
		filtersQuery.language = filtersBySelect.language;
	}

	const handleResetFilter = () => {
		setFiltersBySelect({
			category: "",
			author: "",
			language: "",
			publication: "",
		});
		filtersQuery = {};
		setFilters("");
	};
	console.log("filtersQuery", filtersQuery);

	const {
		data: books,
		isLoading,
		isError,
		error,
	} = useGetBooksQuery({
		page,
		limit: postPerPage,
		sort: filters,
		...filtersQuery,
	});
	const { data, loading, ifError } = useGetBooksQuery();

	useEffect(() => {
		setTotal(books?.data?.totalBooks);
		setTotalBooks(data?.data?.books);
	}, [books?.data?.totalBooks, data?.data?.books, total]);

	// PAGINATION
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
	if (!isLoading && !isError && books?.data?.books?.length === 0) {
		content = <p className='text-red-500'>Books not found!</p>;
	}
	if (!isError && !isLoading && books?.data?.books?.length > 0) {
		content = books?.data?.books?.map(book => (
			<Book key={book._id} book={book} />
		));
	}

	const handleFilters = event => setFilters(event.target.value);
	const handleFIltersBySelect = event => {
		setFiltersBySelect({
			...filtersBySelect,
			[event.target.name]: event.target.value,
		});
	};

	const uniqueAuthors = getUniqueListBy(totalBooks, "author");
	const uniquePublications = getUniqueListBy(totalBooks, "publication");
	const uniqueCategory = getUniqueListBy(totalBooks, "category");
	const uniqueLanguage = getUniqueListBy(totalBooks, "language");

	console.log(books?.data?.books);

	return (
		<Container>
			<div>
				<div className='grid grid-cols-2 py-4'>
					<p
						className='text-start'
						data-aos='fade-right'
						data-aos-easing='ease-out-cubic'
						data-aos-duration='1000'>
						<span className='text-primary font-bold'>
							{page * postPerPage - postPerPage + 1}
						</span>{" "}
						থেকে{" "}
						<span className='text-primary font-bold'>{page * postPerPage} </span>
						দেখাচ্ছে। মোট{" "}
						<span className='text-primary font-bold'>
							{books?.data?.totalBooks}
						</span>{" "}
						টি আইটেম পাওয়া গিয়েছে
					</p>
					<div
						className='text-end'
						data-aos='fade-left'
						data-aos-easing='ease-out-cubic'
						data-aos-duration='1000'>
						<label className='font-bold mr-2 text-gray-600' htmlFor='filters'>
							সর্ট করুন
						</label>
						<div className='inline'>
							<select
								onChange={handleFilters}
								id='filters'
								className='select select-primary select-sm'>
								<option selected value=''>
									All
								</option>
								<option value='-price'>price - high to low</option>
								<option value='price'>price - low to high</option>
							</select>
						</div>
					</div>
				</div>

				<section className='md:flex lg:flex'>
					<div className='w-[300px] mr-3 h-32'>
						<div className='mb-5 overflow-hidden'>
							<div className='mb-5 bg-gray-200 pb-2'>
								<div className='flex justify-between items-center my-2 bg-primary p-2 text-white'>
									<span>লেখক</span>
									<span
										className='cursor-pointer text-sm'
										onClick={handleResetFilter}>
										রিসেট ফিল্টার
									</span>
								</div>
								<div className='pl-2 h-64 overflow-y-scroll'>
									{uniqueAuthors?.map(book => (
										<div key={book._id} className='form-control'>
											<label className='label cursor-pointer'>
												<span className='label-text'>{book.author}</span>
												<input
													onChange={handleFIltersBySelect}
													type='radio'
													name='author'
													className='radio radio-sm radio-primary'
													value={book.author}
												/>
											</label>
										</div>
									))}
								</div>
							</div>
							<div className='mb-5 bg-gray-200 pb-2'>
								<div className='flex justify-between items-center my-2 bg-primary p-2 text-white'>
									<span>প্রকাশকরা</span>
									<span
										className='cursor-pointer text-sm'
										onClick={handleResetFilter}>
										রিসেট ফিল্টার
									</span>
								</div>
								<div className='pl-2 h-64 overflow-y-scroll'>
									{uniquePublications?.map(book => (
										<div key={book._id} className='form-control'>
											<label className='label cursor-pointer'>
												<span className='label-text'>{book.publication}</span>
												<input
													onChange={handleFIltersBySelect}
													type='radio'
													name='publication'
													className='radio radio-sm radio-primary'
													value={book.publication}
												/>
											</label>
										</div>
									))}
								</div>
							</div>
							<div className='bg-gray-200 pb-3'>
								<div className='flex justify-between items-center my-2 bg-primary p-2 text-white'>
									<span>ভাষা</span>
									<span
										className='cursor-pointer text-sm'
										onClick={handleResetFilter}>
										রিসেট ফিল্টার
									</span>
								</div>
								<div className='pl-2 h-24 overflow-y-scroll'>
									{uniqueLanguage?.map(book => (
										<div key={book._id} className='form-control'>
											<label className='label cursor-pointer'>
												<span className='label-text'>{book.language}</span>
												<input
													onChange={handleFIltersBySelect}
													type='radio'
													name='language'
													className='radio radio-sm radio-primary'
													value={book.language}
												/>
											</label>
										</div>
									))}
								</div>
							</div>
							<div className='bg-gray-200 pb-3'>
								<div className='flex justify-between items-center my-2 bg-primary p-2 text-white'>
									<span>ক্যাটাগরি</span>
									<span
										className='cursor-pointer text-sm'
										onClick={handleResetFilter}>
										রিসেট ফিল্টার
									</span>
								</div>
								<div className='pl-2 h-64 overflow-y-scroll'>
									{uniqueCategory?.map(book => (
										<div key={book._id} className='form-control'>
											<label className='label cursor-pointer'>
												<span className='label-text'>{book.category}</span>
												<input
													onChange={handleFIltersBySelect}
													type='radio'
													name='category'
													className='radio radio-sm radio-primary'
													value={book.category}
												/>
											</label>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					<div
						className='w-full md:w-[82%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-y-4 my-5'
						data-aos='fade-left'
						data-aos-easing='ease-out-cubic'
						data-aos-duration='1000'>
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
			</div>
		</Container>
	);
};

export default BookRoute;
