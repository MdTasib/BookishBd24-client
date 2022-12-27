import React from "react";

const Loading = () => {
	return (
		<>
			<div class='flex items-center justify-center space-x-2 animate-bounce py-20'>
				<div class='w-8 h-8 bg-primary rounded-full'></div>
				<div class='w-8 h-8 bg-green-400 rounded-full'></div>
				<div class='w-8 h-8 bg-accent rounded-full'></div>
			</div>
		</>
	);
};

export default Loading;
