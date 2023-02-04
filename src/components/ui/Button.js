import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, classes }) => {
	return (
		<>
			{/* button 1 */}
			<div data-aos="fade-right"
				data-aos-easing="ease-out-cubic"
				data-aos-duration="1000">
				<button
					className={`relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring ${classes ? classes : ""
						}`}>
					<span className='absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-primary group-hover:translate-y-0 group-hover:translate-x-0'></span>

					<span className='relative block px-8 py-3 bg-primary border border-current'>
						{children}
					</span>
				</button>
			</div>

			{/* button 2 */}
			{/* <button className='relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring'>
				<span className='absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#1A2238] group-hover:translate-y-0 group-hover:translate-x-0'></span>

				<span className='relative block px-8 py-3 bg-[#1A2238] border border-current'>
					{children}
				</span>
			</button> */}

			{/* <div className='b relative mx-auto h-16 w-64 flex justify-center items-center'>
				<div className='i h-10 w-60 bg-primary items-center rounded-xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out'></div>
				<span className='text-center text-white font-semibold z-10 pointer-events-none'>
					{children}
				</span>
				<span className='absolute flex h-4 w-4 top-0 right-0 transform translate-x-0.2 -translate-y-0.2'>
					<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75'></span>
					<span className='absolute inline-flex rounded-full h-4 w-4 bg-primary'></span>
				</span>
			</div> */}
		</>
	);
};

export default Button;
