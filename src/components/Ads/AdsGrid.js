import React from "react";
import { adsImages } from "../../data/data";
import AdsItem from "./AdsItem";
import Container from "../ui/Container";

const AdsGrid = () => {
	return (
		<section className='px-4 pb-14 pt-4'>
			<Container>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{adsImages.slice(0, 3).map(ads => (
						<AdsItem key={ads.id} ads={ads} />
					))}
				</div>
			</Container>
		</section>
	);
};

export default AdsGrid;
