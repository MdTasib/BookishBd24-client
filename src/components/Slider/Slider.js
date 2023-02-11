import React, { useState } from "react";
import Slider from "infinite-react-carousel";
import Container from "../ui/Container";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const ImageSlider = () => {
	// const { data, isLoading, isError, error } = useGetSliderQuery();

	// // conent loaded
	// let content = null;
	// if (isLoading) {
	// 	content = <Loading />;
	// }
	// if (!isLoading && isError) {
	// 	content = <p className='text-red-500'>{error}</p>;
	// }
	// if (!isLoading && !isError && data?.data.length === 0) {
	// 	content = (
	// 		<p className='text-red-500 text-xl font-bold'>
	// 			কোনো স্লাইডার পাওয়া যায়নি!
	// 		</p>
	// 	);
	// }
	// if (!isError && !isLoading && data?.data?.length > 0) {
	// 	content = data?.data?.map((slider, index) => (
	// 		<img
	// 					key={slider.id}
	// 					className='w-full h-64 object-cover'
	// 					src={slider.image}
	// 					alt=''
	// 				/>
	// 	));
	// }

	// fake slider data
	const sliders = [
		{
			id: 1,
			url:
				"https://wafilife-media.wafilife.com/uploads/2021/03/%E0%A6%AA%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%95%E0%A7%87%E0%A6%9C-%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A7%87%E0%A6%87-%E0%A6%AC%E0%A7%87%E0%A6%B6%E0%A7%80-%E0%A6%9B%E0%A6%BE%E0%A6%A1%E0%A6%BC_desktop.jpg",
		},
		{
			id: 2,
			url:
				"https://wafilife-media.wafilife.com/uploads/2022/12/muslim-day-planner_desktop.jpg",
		},
		{
			id: 3,
			url:
				"https://wafilife-media.wafilife.com/uploads/2021/03/%E0%A6%AC%E0%A6%87%E0%A6%AF%E0%A6%BC%E0%A7%87%E0%A6%B0-%E0%A6%89%E0%A6%95%E0%A7%8D%E0%A6%A4%E0%A6%BF-%E0%A6%A1%E0%A6%BF%E0%A6%9C%E0%A6%BE%E0%A6%87%E0%A6%A8_desktop.jpg",
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === sliders.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};


	return (

		<div className='max-w-[1400px] h-[350px] w-full py-8 mt-0 px-4 relative group'>
			<div
				style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
				className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
			></div>
			{/* Left Arrow */}
			<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
				<BsChevronCompactLeft onClick={prevSlide} size={30} />
			</div>
			{/* Right Arrow */}
			<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
				<BsChevronCompactRight onClick={nextSlide} size={30} />
			</div>
			<div className='flex top-4 justify-center py-2'>
				{sliders.map((slide, slideIndex) => (
					<div
						key={slideIndex}
						onClick={() => goToSlide(slideIndex)}
						className='text-2xl cursor-pointer'
					>
						<RxDotFilled />
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageSlider;
