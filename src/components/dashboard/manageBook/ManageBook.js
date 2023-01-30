import { Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetBooksQuery } from "../../../features/api/apiSlice";
import Loading from "../../ui/Loading";

const ManageBook = () => {
	const [total, setTotal] = useState("");
	const [page, setPage] = useState(1);
	const [postPerPage, setPostPerPage] = useState(9);
	const {
		data: books,
		isLoading,
		isError,
		error,
	} = useGetBooksQuery({ page, limit: postPerPage });
	const navigate = useNavigate();

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
		content = books?.data?.books?.map((book, index) => (
			<tr>
				<td>
					<img className='h-8' src={book.imageURL} alt='' />
				</td>
				<td>{book.name.slice(0, 30)}</td>
				<td>${book.prePrice}</td>
				<td>{book.price}</td>
				<td>{book.author.slice(0, 30)}</td>
				<td>
					<button className='bg-red-500 px-2 rounded text-white'>Delete</button>
				</td>
				<td>
					<button
						for='edit-modal'
						className='bg-primary px-3 rounded text-white'
						onClick={() => editBook()}>
						Edit
					</button>
				</td>
			</tr>
		));
	}

	const editBook = () => {
		navigate("/dashboard/edit-book");
	};

	return (
		<div className='overflow-x-auto'>
			<table className='table w-full'>
				<thead>
					<tr>
						<th></th>
						<th>ছবি</th>
						<th>নাম</th>
						<th>পর্ব মূল্য</th>
						<th>দাম</th>
						<th>লেখক</th>
						<th>Delete Book</th>
						<th>Update Book</th>
					</tr>
				</thead>
				<tbody>{content}</tbody>
			</table>

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
	);
};

export default ManageBook;
