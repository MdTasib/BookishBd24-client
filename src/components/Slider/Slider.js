import React from "react";
import Slider from "infinite-react-carousel";
import Container from "../ui/Container";

const ImageSlider = () => {
	// fake slider data
	const sliders = [
		{
			id: 1,
			image:
				"https://wafilife-media.wafilife.com/uploads/2021/03/%E0%A6%AA%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%95%E0%A7%87%E0%A6%9C-%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A7%87%E0%A6%87-%E0%A6%AC%E0%A7%87%E0%A6%B6%E0%A7%80-%E0%A6%9B%E0%A6%BE%E0%A6%A1%E0%A6%BC_desktop.jpg",
		},
		{
			id: 2,
			image:
				"https://wafilife-media.wafilife.com/uploads/2022/12/muslim-day-planner_desktop.jpg",
		},
		{
			id: 3,
			image:
				"https://wafilife-media.wafilife.com/uploads/2021/03/%E0%A6%AC%E0%A6%87%E0%A6%AF%E0%A6%BC%E0%A7%87%E0%A6%B0-%E0%A6%89%E0%A6%95%E0%A7%8D%E0%A6%A4%E0%A6%BF-%E0%A6%A1%E0%A6%BF%E0%A6%9C%E0%A6%BE%E0%A6%87%E0%A6%A8_desktop.jpg",
		},
	];

	const settings = {
		arrows: false,
		autoplay: true,
		dots: true,
		pauseOnHover: false,
	};

	return (
		<Container>
			<Slider {...settings} className='my-10'>
				{sliders?.map(slider => (
					<img
						key={slider.id}
						className='w-full h-64 object-cover'
						src={slider.image}
						alt=''
					/>
				))}
			</Slider>
		</Container>
	);
};

export default ImageSlider;
