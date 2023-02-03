import { Tooltip } from "@material-tailwind/react";

import React from "react";
import publisher from "../../assets/images/publisher.png";

const AllPublisher = ({ book: { publication } }) => {
	
	return (
		<div>
			<div className='my-10'>
				<Tooltip
					className='center text-green-900 bg-gray-300'
					content={publication}
					animate={{
						mount: { scale: 1, y: 0 },
						unmount: { scale: 0, y: 25 },
					}}>
					
					<img
						className='hover:scale-90 transform transition-all justify-center align-center mx-auto'
						src={publisher}
						alt=''>
					</img>
					
				</Tooltip>
				<h1 className='text-center mt-3 text-green-900 text-bold'>{publication}</h1>
			</div>

			
		</div>
	);
};

export default AllPublisher;