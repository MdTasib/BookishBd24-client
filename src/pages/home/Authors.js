import React from 'react';
import { Link } from 'react-router-dom';

const Authors = ({ author: { _id, author, imageUrl } }) => {
    return (
        <div data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000" className='w-full max-w-sm bg-white'>
			<div className='flex flex-col items-center py-3'>
				<img
					className='w-28 border-primary border border-3 h-28 mb-3 rounded-full shadow-lg'
					src={imageUrl}
					alt={author}
				/>
				<h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
					{author}
				</h5>
				<div className='text-center'>
					{/* <Link to={`/author/${_id}`}>
						<Button>বিস্তারিত</Button>
					</Link> */}
				</div>
			</div>
		</div>
    );
};

export default Authors;