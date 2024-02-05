import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const contactApi = createApi({
    reducerPath: "contactApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
    tagTypes: ["CONTACTS", "GROUPS"],
    endpoints: builder => ({
        getContacts: builder.query({
            query: () => `/contacts`,
            providesTags: (result) =>
                result ?
                    [
                        ...result.map(({ id }) => ({ type: "CONTACTS", id })),
                        { type: "CONTACTS", id: "LIST" }
                    ] :
                    [{ type: "CONTACTS", id: "LIST" }]
        }),
        getContact: builder.query({
            query: (contactId) => `/contacts/${contactId}`,
            providesTag: (results, error, id) => [{ type: "CONTACTS", id }]
        }),
        getGroups: builder.query({
            query: () => `/groups`,
            providesTags: ["GROUPS"]
        }),
        deleteContact: builder.mutation({
            query: (contactId) => ({
                url: `/contacts/${contactId}`,
                method: "DELETE",
            }),
            invalidatesTags: (results, error, id) => [{ type: "CONTACTS", id }]
        }),
        addContact: builder.mutation({
            query: (contact) => ({
                url: `/contacts`,
                method: "POST",
                body: contact
            }),
            invalidatesTags: [{ type: "CONTACTS", id: "LIST" }]
        }),
        editContact: builder.mutation({
            query: ({ ...contactData }) => ({
                url: `/contacts/${contactData.id}`,
                method: "PATCH",
                body: contactData
            }),
            invalidatesTags: (results, error, arg) => [
                { type: "CONTACTS", id: arg.id }
            ]
        })
    })
})

export const {
    useGetContactsQuery,
    useGetContactQuery,
    useGetGroupsQuery,
    useDeleteContactMutation,
    useAddContactMutation,
    useEditContactMutation
} = contactApi