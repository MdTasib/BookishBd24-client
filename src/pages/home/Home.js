import React from "react";
import { Helmet } from "react-helmet";
import AdsGrid from "../../components/Ads/AdsGrid";
import SectionBooks from "../../components/SectionBooks/SectionBooks";
import ImageSlider from "../../components/Slider/Slider";
import Education from "./education/Education";
import PopularAuthor from "./popularAuthor/PopularAuthor";

function Home() {
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8"/>
				<title>Home । BookishBD24</title>
				<meta name="description" content="BookishBD24 website using React JS"/>
			</Helmet>
			<ImageSlider />
			<Education />
			<SectionBooks 
				filters={{ category: "বইমেলা" }}
				title='ইসলামী সাহিত্য, গল্প-উপন্যাস এবং সফরনামা'
			/>
			<SectionBooks
				filters={{ category: "ইবাদত" }}
				title='ঈমান আক্বিদা ও বিশ্বাস'
			/>
			<AdsGrid />
			<SectionBooks
				filters={{ category: "ঈমান" }}
				title='শিশু-কিশোরদের ইসলামী বই
'
			/>
			<PopularAuthor />
		</div>
	);
}

export default Home;
