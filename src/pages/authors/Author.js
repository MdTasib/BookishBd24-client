import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";

const Author = ({ author: { _id, author, imageUrl } }) => {
	return (
		<div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md'>
			<div className='flex flex-col items-center py-3'>
				<img
					className='w-24 border-primary border border-3 h-24 mb-3 rounded-full shadow-lg'
					src={imageUrl}
					alt={author}
				/>
				<h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
					{author}
				</h5>
				<div className='text-center'>
					<Link to={`/author/${_id}`}>
						<Button>বিস্তারিত</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Author;
