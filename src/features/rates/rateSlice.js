import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRates } from "./rateApi";

// INITIAL STATE
const initialState = {
	rates: [],
	isLoading: false,
	isError: false,
	error: "",
};

// create async thunk
export const fetchRates = createAsyncThunk("rates/fetchRates", async () => {
	const rates = await getRates();
	return rates;
});

// create slice
const ratesSlice = createSlice({
	name: "rates",
	initialState,
	extraReducers: builder => {
		builder
			.addCase(fetchRates.pending, (state, action) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(fetchRates.fulfilled, (state, action) => {
				state.isLoading = false;
				state.rates = action.payload;
			})
			.addCase(fetchRates.rejected, (state, action) => {
				state.isError = true;
				state.error = action.error?.message;
				state.isLoading = false;
				state.rates = [];
			});
	},
});

export default ratesSlice.reducer;
