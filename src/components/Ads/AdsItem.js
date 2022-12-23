import React from "react";

const AdsItem = ({ ads: { image, url } }) => {
	return (
		<>
			{/* <div class='relative overflow-hidden bg-no-repeat bg-cover max-w-xs  cursor-pointer'>
				<img src={image} class='max-w-xs h-full' alt='Louvre' />
				<div class='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70'></div>
			</div> */}
			<div class='relative overflow-hidden bg-no-repeat bg-cover max-w-xs  cursor-pointer'>
				<img src={image} class='max-w-xs h-full' alt='Louvre' />
				<div class='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-primary via-primary to-accent hover:opacity-70'></div>
			</div>
		</>
	);
};

export default AdsItem;
