import { createSlice } from "@reduxjs/toolkit"
import { fetchContacts } from "./contactsOps";

export const contactsSlice = createSlice({
	name: 'contacts',
    initialState: {
        contacts: {
            items: [
                // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
                // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
                // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
                // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
            ],
            isLoading: false,
            error: null,
        },
        filters: {
            name: " ",
        },
    },
	reducers: {
		addContact: (state, { payload }) => {
            state.contacts.items.push(payload);
        },
        deleteContact: (state, { payload }) => {
            state.contacts.items = state.contacts.items.filter(contact => contact.id !== payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.contacts.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, {payload}) => {
                state.contacts.isLoading = false;
                state.contacts.error = null;
                state.contacts.items = payload;
                
            })
            .addCase(fetchContacts.rejected, (state, {error}) => {
                state.contacts.error = error.message;
            })
        
        
    }
})

export const selectContacts = (state) => state.contacts.contacts.items;
export const selectContactsLoading = (state) => state.contacts.contacts.isLoading;
export const selectContactsError = (state) => state.contacts.contacts.isError;
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;