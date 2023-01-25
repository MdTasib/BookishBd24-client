import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "bookishbdApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:5000/api/v1",
	}),
	endpoints: builder => ({
		getBooks: builder.query({
			// query: ({}) => "/book",
			query: arg => {
				return {
					url: "/book",
					params: { ...arg },
				};
			},
		}),
	}),
});

export const { useGetBooksQuery } = apiSlice;