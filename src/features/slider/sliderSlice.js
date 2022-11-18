import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSliders } from "./sliderApi";

// INITIAL STATE
const initialState = {
	sliders: [],
	isLoading: false,
	isError: false,
	error: "",
};

// create async thunk
export const fetchSlider = createAsyncThunk("slider/fetchSlider", async () => {
	const sliders = await getSliders();
	return sliders;
});

// create slice
const sliderSlice = createSlice({
	name: "sliders",
	initialState,
	extraReducers: builder => {
		builder
			.addCase(fetchSlider.pending, (state, action) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(fetchSlider.fulfilled, (state, action) => {
				state.isLoading = false;
				state.sliders = action.payload;
			})
			.addCase(fetchSlider.rejected, (state, action) => {
				state.isError = true;
				state.error = action.error?.message;
				state.isLoading = false;
				state.sliders = [];
			});
	},
});

export default sliderSlice.reducer;
