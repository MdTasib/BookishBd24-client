import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productApi";

// INITIAL STATE
const initialState = {
	products: [],
	compare: [],
	isLoading: false,
	isError: false,
	error: "",
};

// create async thunk
export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async () => {
		const products = await getProducts();
		return products;
	}
);

// create slice
const productSlice = createSlice({
	name: "products",
	initialState,
	extraReducers: builder => {
		builder
			.addCase(fetchProducts.pending, (state, action) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.products = action.payload;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.isError = true;
				state.error = action.error?.message;
				state.isLoading = false;
				state.products = [];
			});
	},
});

export default productSlice.reducer;
