import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "bookishbdApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:5000/api/v1",
	}),
	tagTypes: ["books", "authors", "book"],
	endpoints: builder => ({
		// get books on database
		getBooks: builder.query({
			query: arg => {
				return {
					url: "/book",
					params: { ...arg },
				};
			},
			keepUnusedDataFor: 800,
			providesTags: ["books"],
		}),

		// get book details by id
		getBookDetails: builder.query({
			query: id => `/book/${id}`,
			keepUnusedDataFor: 800,
			providesTags: ["books", "book"],
		}),

		// get authors on database
		getAuthors: builder.query({
			query: arg => {
				return {
					url: "/author",
					params: { ...arg },
				};
			},
			keepUnusedDataFor: 800,
			providesTags: ["authors"],
		}),

		// get author details by id
		getAuthorDetails: builder.query({
			query: id => `/author/${id}`,
			keepUnusedDataFor: 800,
			providesTags: ["auhtors", "author"],
		}),

		// post book on database
		createBook: builder.mutation({
			query: data => ({
				url: "/book",
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["books"],
		}),

		// post author on database
		createAuthor: builder.mutation({
			query: data => ({
				url: "/author",
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["authors"],
		}),
	}),
});

export const {
	useGetBooksQuery,
	useGetAuthorsQuery,
	useGetAuthorDetailsQuery,
	useGetBookDetailsQuery,
	useCreateBookMutation,
	useCreateAuthorMutation,
} = apiSlice;
