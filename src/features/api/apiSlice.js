import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "bookishbdApi",
	baseQuery: fetchBaseQuery({
		// baseUrl: "https://bookishbd24.onrender.com/api/v1/",
		baseUrl: "http://localhost:5000/api/v1/",
	}),
	tagTypes: ["books", "authors", "book", "reviews", "sliders"],
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

		// get order by email
		getOrderByEmail: builder.query({
			query: email => `/place-order?userEmail${email}`,
			keepUnusedDataFor: 800,
		}),

		// get reviews
		getReviews: builder.query({
			query: () => "/review",
			keepUnusedDataFor: 800,
			providesTags: ["reviews"],
		}),

		// get sliders
		getSlider: builder.query({
			query: () => "/slider",
			keepUnusedDataFor: 800,
			providesTags: ["sliders"],
		}),

		// post book on database
		createBook: builder.mutation({
			query: data => ({
				url: "/book",
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["books", "book"],
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

		// post review on database
		createReview: builder.mutation({
			query: data => ({
				url: "/review",
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["reviews"],
		}),

		// post slider image on database
		createSlider: builder.mutation({
			query: data => ({
				url: "/slider",
				method: "POST",
				body: data,
			}),
		}),

		// order post on database
		createOrder: builder.mutation({
			query: data => ({
				url: "/place-order",
				method: "POST",
				body: data,
			}),
		}),

		// delete book in the database
		deleteBook: builder.mutation({
			query: id => ({
				url: `/book/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["books", "book"],
		}),

		// update book mutation
		updateBook: builder.mutation({
			query: ({ id, data }) => ({
				url: `/book/${id}`,
				method: "PATCH",
				body: data,
			}),
			invalidatesTags: ["books", "book"],
		}),
	}),
});

export const {
	useGetBooksQuery,
	useGetAuthorsQuery,
	useGetAuthorDetailsQuery,
	useGetBookDetailsQuery,
	useGetReviewsQuery,
	useGetSliderQuery,
	useCreateBookMutation,
	useCreateAuthorMutation,
	useCreateReviewMutation,
	useCreateSliderMutation,
	useCreateOrderMutation,
	useDeleteBookMutation,
	useUpdateBookMutation,
} = apiSlice;
