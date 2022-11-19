import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../../data/data";
import { fetchProducts } from "../../features/products/productSlice";
import Container from "../ui/Container";
import Loading from "../ui/Loading";
import Product from "./Product";

const Products = () => {
	const dispatch = useDispatch();
	const { products, isLoading, isError, error } = useSelector(
		state => state.products
	);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	if (isLoading) {
		return <Loading />;
	}

	if (isError) {
		return (
			<h2 className='text-red-500 font-bold text-2xl text-center'>{error}</h2>
		);
	}

	return (
		<Container>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-20'>
				{products?.map(product => (
					<Product key={product.id} product={product} />
				))}
			</div>
		</Container>
	);
};

export default Products;
