import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getQuestions } from "./questionApi";

// INITIAL STATE
const initialState = {
	questions: [],
	isLoading: false,
	isError: false,
	error: "",
};

// create async thunk
export const fetchQuestions = createAsyncThunk(
	"questions/fetchQuestions",
	async () => {
		const questions = await getQuestions();
		return questions;
	}
);

// create slice
const questionsSlice = createSlice({
	name: "questions",
	initialState,
	extraReducers: builder => {
		builder
			.addCase(fetchQuestions.pending, (state, action) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(fetchQuestions.fulfilled, (state, action) => {
				state.isLoading = false;
				state.questions = action.payload;
			})
			.addCase(fetchQuestions.rejected, (state, action) => {
				state.isError = true;
				state.error = action.error?.message;
				state.isLoading = false;
				state.questions = [];
			});
	},
});

export default questionsSlice.reducer;
