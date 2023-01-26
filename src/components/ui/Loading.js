import React from "react";

const Loading = () => {
	return (
		<>
			{/* <div class='flex items-center justify-center space-x-2 animate-bounce py-20'>
				<div class='w-8 h-8 bg-primary rounded-full'></div>
				<div class='w-8 h-8 bg-green-400 rounded-full'></div>
				<div class='w-8 h-8 bg-accent rounded-full'></div>
			</div> */}
			<div class='flex justify-center py-20'>
				<div class='relative'>
					<div
						class='w-12 h-12 rounded-full absolute
                            border-8 border-dashed border-gray-200'></div>

					<div
						class='w-12 h-12 rounded-full animate-spin absolute
                            border-8 border-dashed border-primary border-t-transparent'></div>
				</div>
			</div>
		</>
	);
};

export default Loading;
