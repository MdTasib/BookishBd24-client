import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CompareProduct from "../components/products/CompareProduct";
import Container from "../components/ui/Container";
import ImageSlider from "../components/Slider/Slider";

const Compare = () => {
	const { compare } = useSelector(state => state.products);

	return (
		<>
			<ImageSlider />
			<section className='py-20'>
				<Container>
					{compare.length === 0 ? (
						<h4 className='text-center font-bold text-4xl'>
							Compare Products Not Found
						</h4>
					) : (
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
							{compare?.map(product => (
								<>
									<CompareProduct key={product.id} product={product} />
								</>
							))}
						</div>
					)}
					<div className='text-center pt-10'>
						<Link to='/' className='btn btn-primary'>
							ADD TO COMPARE
						</Link>
					</div>
				</Container>
			</section>
		</>
	);
};

export default Compare;
