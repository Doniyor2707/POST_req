import { comments_api, posts_api, users_api } from "../api";
import { apiSlice } from "../apiSlice";

// POSTS
export const authPosts_api = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    posts: builder.mutation({
      query: ({ title, content, category }) => ({
        url: posts_api.posts,
        method: "POST",
        body: {
          title,
          content,
          category,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

// COMMENTS

export const authComments_api = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    comments: builder.mutation({
      query: ({ userId, comment }) => ({
        url: comments_api.comments,
        method: "POST",
        body: {
          userId,
          comment,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

// USERS
export const authUsers_api = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    users: builder.mutation({
      query: ({ username, password }) => ({
        url: users_api.users,
        method: "POST",
        body: {
          username,
          password,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { usePostsMutation, useCommentsMutation, useUsersMutation } =
  authAPI;
