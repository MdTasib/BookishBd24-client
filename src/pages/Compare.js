import React from "react";
import CompareProduct from "../components/products/CompareProduct";
import Container from "../components/ui/Container";
import Modal from "../components/ui/Modal";
import { data } from "../data/data";

const Compare = () => {
	return (
		<section className='py-20'>
			<Container>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
					{data?.products?.map(product => (
						<CompareProduct key={product.id} product={product} />
					))}
				</div>
				<div className='text-center pt-10'>
					<div className='btn btn-primary'>ADD TO COMPARE</div>
				</div>

				{/* modal */}
				<Modal />
			</Container>
		</section>
	);
};

export default Compare;
