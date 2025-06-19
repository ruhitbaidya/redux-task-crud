import { baseApi } from "../fetcher/crudOpetaion/apiCreate";

const injectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => "/get-all-tasks",
    }),
    postTaskData: builder.mutation({
      query: (data) => ({
        url: "/create-tasks",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllProductQuery, usePostTaskDataMutation } = injectApi;
