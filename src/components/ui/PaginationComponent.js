import { Pagination } from "antd";
import React, { useEffect, useState } from "react";

const PaginationComponent = () => {
	const [total, setTotal] = useState("");
	const [page, setPage] = useState(1);
	const [postPerPage, setPostPerPage] = useState(9);
	// const {
	// 	data: books,
	// 	isLoading,
	// 	isError,
	// 	error,
	// } = useGetBooksQuery({ page, limit: postPerPage });

	// useEffect(() => {
	// 	setTotal(books?.data?.totalBooks);
	// }, [books?.data?.totalBooks, total]);

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

	return (
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
	);
};

export default PaginationComponent;
