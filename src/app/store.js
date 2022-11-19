import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/slider/sliderSlice";
import productsReducer from "../features/products/productSlice";

export const store = configureStore({
	reducer: {
		slider: sliderReducer,
		products: productsReducer,
	},
});
