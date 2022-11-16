import React from "react";
import { data } from "../../data/data";
import Container from "../ui/Container";
import Product from "./Product";

const Products = () => {
	return (
		<Container>
			<div className='grid grid-cols-4 gap-4 py-20'>
				{data?.products?.map(product => (
					<Product key={product.id} product={product} />
				))}
			</div>
		</Container>
	);
};

export default Products;
