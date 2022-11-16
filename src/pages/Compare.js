import React from "react";
import CompareProduct from "../components/products/CompareProduct";
import Container from "../components/ui/Container";
import { data } from "../data/data";

const Compare = () => {
	return (
		<section className='py-20'>
			<Container>
				<div className='grid grid-cols-4 gap-4'>
					{data?.products?.map(product => (
						<CompareProduct key={product.id} product={product} />
					))}
				</div>
				<div className='text-center pt-10'>
					<div className='btn btn-primary'>ADD TO COMPARE</div>
				</div>

				{/* modal */}
				<input type='checkbox' id='my-modal-3' className='modal-toggle' />
				<div className='modal'>
					<div className='modal-box relative'>
						<label
							htmlFor='my-modal-3'
							className='btn btn-sm btn-circle absolute right-2 top-2'>
							✕
						</label>
						<h3 className='text-lg font-bold'>
							Congratulations random Internet user!
						</h3>
						<p className='py-4'>
							You've been selected for a chance to get one year of subscription
							to use Wikipedia for free!
						</p>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Compare;
