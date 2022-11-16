import React from "react";
import Products from "../components/card/Products";
import Questions from "../components/questions/Questions";
import ImageSlider from "../components/Slider/Slider";

function Home() {
	return (
		<div>
			<ImageSlider />
			<Products />
			<Questions />
		</div>
	);
}

export default Home;
