import React, { useEffect } from "react";
import Slider from "infinite-react-carousel";
import Container from "../ui/Container";
import Loading from "../ui/Loading";
import { useDispatch, useSelector } from "react-redux";
import { fetchSlider } from "../../features/slider/sliderSlice";

const ImageSlider = () => {
	const dispatch = useDispatch();
	const { sliders, isLoading, isError, error } = useSelector(
		state => state.slider
	);

	useEffect(() => {
		dispatch(fetchSlider());
	}, [dispatch]);

	if (isLoading) {
		return <Loading />;
	}

	if (isError) {
		return (
			<div className='alert alert-error shadow-lg container mx-auto mt-10'>
				<div>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='stroke-current flex-shrink-0 h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
						/>
					</svg>
					<span>{error}</span>
				</div>
			</div>
		);
	}

	const settings = {
		arrows: false,
		autoplay: true,
		dots: true,
		pauseOnHover: false,
	};

	return (
		<Container>
			<Slider {...settings} className='mt-10'>
				{sliders.map(slider => (
					<img
						key={slider.id}
						className='w-full h-96 object-cover'
						src={slider.image}
						alt=''
					/>
				))}
			</Slider>
		</Container>
	);
};

export default ImageSlider;
