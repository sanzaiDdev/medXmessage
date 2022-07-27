import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const messageApi = createApi({
  reducerPath: "messagesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: () => "messages",
    }),
    getMessageDetail: builder.query({
      query: (id) => `messages/${id}`,
    }),
    getMessageAttachment: builder.query({
      query: (params) => {
        return {
          url: "messages/attachment",
          params,
        };
      },
    }),
  }),
});

export const {
  useGetMessagesQuery,
  useGetMessageDetailQuery,
  useLazyGetMessageAttachmentQuery,
} = messageApi;
