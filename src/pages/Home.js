import React from "react";
import Products from "../components/card/Products";
import ImageSlider from "../components/Slider/Slider";

function Home() {
	return (
		<div>
			<ImageSlider />
			<Products />
		</div>
	);
}

export default Home;
