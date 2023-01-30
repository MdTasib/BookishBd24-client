import React from "react";
import AdsGrid from "../../components/Ads/AdsGrid";
import SectionBooks from "../../components/SectionBooks/SectionBooks";
import ImageSlider from "../../components/Slider/Slider";

function Home() {
	return (
		<div>
			<ImageSlider />
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
		</div>
	);
}

export default Home;
