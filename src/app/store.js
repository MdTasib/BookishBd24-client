import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/slider/sliderSlice";
import productsReducer from "../features/products/productSlice";
import questionsReducer from "../features/questons/questionSlice";
import ratesReducer from "../features/rates/rateSlice";

export const store = configureStore({
	reducer: {
		slider: sliderReducer,
		products: productsReducer,
		questions: questionsReducer,
		rates: ratesReducer,
	},
});
