import { configData } from "@/config";
import { RootState } from "@/store/Store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useSelector } from "react-redux";

const axiosBaseQuery = fetchBaseQuery({
  baseUrl: configData?.targetUrl, // Set your base URL
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).user?.accessToken;
    console.log(token, "token223143");
    headers.append("app", "MTIzNDV8Vmdud2Vi");
    headers.set("mode", "no-cors");

    return headers;
  },
});

export const api = createApi({
  reducerPath: "certificate",
  baseQuery: axiosBaseQuery,
  tagTypes: ["Certificate", "item"],
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getCertificate: builder.query<any[], void>({
      query: () => `/registrations`,
    }),
    getCertificateId: builder.query<any, number>({
      query: (number) => `/registrations/${number}`,
    }),
    addCertificate: builder.mutation({
      query: (body) => ({
        url: `/registrations`,
        method: "POST",
        body,
      }),
    }),

    updateCertificate: builder.mutation({
      query: ({ body, id }) => ({
        url: `/registrations/${id}`,
        method: "PUT",
        body,
      }),
    }),

    deleteCertificate: builder.mutation({
      query: (id) => ({
        url: `/registrations/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetCertificateQuery,
  useGetCertificateIdQuery,
  useAddCertificateMutation,
  useUpdateCertificateMutation,
  useDeleteCertificateMutation,
} = api;
export const { endpoints } = api;
