import { comments_api, posts_api, users_api } from "../api";
import { apiSlice } from "../apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    authPosts: build.mutation({
      query: (body) => ({
        url: posts_api.posts,
        method: "POST",
        body,
      }),
    }),

    authUsers: build.mutation({
      query: (body) => ({
        url: users_api.users,
        method: "POST",
        body,
      }),
    }),
    
    authComments: build.mutation({
      query: (body) => ({
        url: comments_api.comments,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useAuthPostsMutation,
  useAuthUsersMutation,
  useAuthCommentsMutation,
} = authApi;
