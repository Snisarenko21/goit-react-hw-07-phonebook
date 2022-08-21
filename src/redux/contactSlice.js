import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63021694e71700618a4323fb.mockapi.io',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({ url: '/contacts' }),
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Contacts', id })),
              { type: 'Contacts', id: 'LIST' },
            ]
          : [{ type: 'Contacts', id: 'LIST' }],
    }),
    addContact: builder.mutation({
      query: body => ({
        url: `/contacts`,
        method: 'POST',
        body,
      }),
      transformResponse: response => response.data,
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      transformResponse: response => response.data,
      invalidatesTags: contact => [{ type: 'Contacts', id: contact?.id }],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;

// import { createSlice } from '@reduxjs/toolkit';


// export const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     filter: '',
//   },
//   reducers: {
//     addContact: (state, { payload }) => {
//       state.items.push(payload);
//     },

//     removeContact: (state, { payload }) => {
//       state.items = state.items.filter(({ id }) => id !== payload);
//     },

//     setFilter: (state, { payload }) => {
//       state.filter = payload;
//     },
//   },
// });

// export const { addContact, removeContact, setFilter } = contactSlice.actions;

// // SELECTORS

// export const getFilter = state => state.contacts.filter;
// export const getContacts = state => state.contacts.items;
