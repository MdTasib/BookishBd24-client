import React from "react";
import SectionBooks from "../../components/SectionBooks/SectionBooks";
import ImageSlider from "../../components/Slider/Slider";

function Home() {
	return (
		<div>
			<ImageSlider />
			<SectionBooks title='ইসলামী সাহিত্য, গল্প-উপন্যাস এবং সফরনামা' />
			<SectionBooks title='ঈমান আক্বিদা ও বিশ্বাস' />
			<SectionBooks
				title='শিশু-কিশোরদের ইসলামী বই
'
			/>
		</div>
	);
}

export default Home;
