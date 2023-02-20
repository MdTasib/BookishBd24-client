import { Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
	useDeleteBookMutation,
	useGetBooksQuery,
} from "../../../features/api/apiSlice";
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
	const [deleteBook, { loading, ifError }] = useDeleteBookMutation();
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

	const handleDeleteBook = id => {
		Swal.fire({
			title: "Are you sure?",
			text: "You Delete This Product",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#d33",
			cancelButtonColor: "#3085d6",
			confirmButtonText: "Yes, delete it!",
		}).then(result => {
			if (result.isConfirmed) {
				deleteBook(id);
				Swal.fire("Deleted!", "Product has been deleted.", "success");
			}
		});
	};

	// conent loaded
	let content = null;
	if (isLoading || loading) {
		content = <Loading />;
	}
	if ((!isLoading && isError) || ifError) {
		content = <p className='text-red-500'>{error}</p>;
	}
	if (!isLoading && !isError && books?.data?.books?.length === 0) {
		content = <p className='text-red-500'>Books not found!</p>;
	}
	if (!isError && !isLoading && books?.data?.books?.length > 0) {
		content = books?.data?.books?.map((book, index) => (
			<tr>
				<td></td>
				<td>
					<img className='h-8' src={book.imageURL} alt='' />
				</td>
				<td>{book.name.slice(0, 30)}</td>
				<td>${book.prePrice}</td>
				<td>{book.price}</td>
				<td>
					<button
						onClick={() => handleDeleteBook(book._id)}
						className='bg-red-500 px-2 rounded text-white'>
						Delete
					</button>
				</td>
				<td>
					<button
						for='edit-modal'
						className='bg-primary px-3 rounded text-white'
						onClick={() => editBook(book._id)}>
						Edit
					</button>
				</td>
			</tr>
		));
	}

	const editBook = id => {
		navigate(`/dashboard/edit-book/${id}`);
	};

	return (
		<div className='overflow-x-auto'>
			<Helmet>
				<meta charSet='utf-8' />
				<title>ManageBook | BookishBD24</title>
				<meta name='description' content='BookishBD24 website using React JS' />
			</Helmet>
			<table className='table w-full'>
				<thead>
					<tr>
						<th></th>
						<th>ছবি</th>
						<th>নাম</th>
						<th>পর্ব মূল্য</th>
						<th>দাম</th>
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
