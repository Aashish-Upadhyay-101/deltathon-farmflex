import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const farmApi = createApi({
  reducerPath: "farmApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api/",
  }),
  prepareHeaders: (headers, { getState }) => {
    headers.set("Content-Type", "application/json");
    headers.set("Authorization", `Bearer ${localStorage.getItem("access")}`);
  },
  endpoints: (builder) => ({
    login: builder.mutation({
      query(data) {
        return {
          method: "POST",
          url: "user/login/",
          body: data,
        };
      },
    }),
    signup: builder.mutation({
      query(data) {
        return {
          method: "POST",
          url: "user/signup/",
          body: data,
        };
      },
    }),
    sendVerificationEmail: builder.mutation({
      query: (username) => `user/activate-link/${username}/`,
    }),

    profileUpdate: builder.mutation({
      query(data) {
        return {
          method: "PATCH",
          url: `profile/${data.username}/`,
          body: data,
        };
      },
    }),

    getStores: builder.query({
      query: () => "store/all/",
    }),

    getStoreProducts: builder.mutation({
      query: (store_id) => `store/${store_id}/get-all-products/`,
    }),

    bookStore: builder.mutation({}),

    getOneProductDetail: builder.query({
      query: (id) => `store/${id}/`,
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useSendVerificationEmailMutation,
  useProfileUpdateMutation,
  useGetStoresQuery,
  useGetStoreProductsMutation,
  useGetOneProductDetailQuery,
} = farmApi;
