import React from "react";
import Slider from "infinite-react-carousel";
import Container from "../ui/Container";

const ImageSlider = () => {
	const images = [
		"https://cdn.pixabay.com/photo/2022/11/12/10/53/landscape-7586742__340.jpg",
		"https://cdn.pixabay.com/photo/2022/11/11/16/05/mushroom-7585277__340.jpg",
		"https://cdn.pixabay.com/photo/2022/11/07/18/29/bird-7576994__340.jpg",
		"https://cdn.pixabay.com/photo/2022/11/12/16/42/hydrangea-7587413__340.jpg",
		"https://cdn.pixabay.com/photo/2022/11/13/12/49/bubble-7589151__340.jpg",
	];

	const settings = {
		arrows: false,
		autoplay: true,
		dots: true,
		pauseOnHover: false,
	};

	return (
		<Container>
			<Slider {...settings} className='bg-red-500 '>
				{images.map(image => (
					<img className='w-full' src={image} height={100} alt='' />
				))}
			</Slider>
		</Container>
	);
};

export default ImageSlider;
