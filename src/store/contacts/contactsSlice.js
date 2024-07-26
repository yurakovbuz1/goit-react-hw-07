import { createSelector, createSlice } from "@reduxjs/toolkit"
import { addContact, deleteContact, fetchContacts } from "./contactsOps";
import { selectNameFilter } from "../filtersSlice";
import { useSelector } from "react-redux";

export const contactsSlice = createSlice({
	name: 'contacts',
    initialState: {
        contacts: {
            items: [],
            loading: false,
            error: null,
        },
        filters: {
            name: " ",
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.contacts.loading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, { payload }) => {
                state.contacts.loading = false;
                state.contacts.error = null;
                state.contacts.items = payload;
                
            })
            .addCase(fetchContacts.rejected, (state, { payload }) => {
                state.contacts.loading = false;
                state.contacts.error = payload;
            })
            //ADD
            .addCase(addContact.pending, (state) => {
                state.contacts.loading = true;
            })   
            .addCase(addContact.fulfilled, (state, { payload }) => {
                state.contacts.loading = false;
                state.contacts.error = null;
                state.contacts.items.push(payload);
                console.log('payload :>> ', payload);
                
            })
            .addCase(addContact.rejected, (state, { payload }) => {
                state.contacts.loading = false;
                state.contacts.error = payload;
            })
            //DELETE
            .addCase(deleteContact.pending, (state) => {
                state.contacts.loading = true;
            })   
            .addCase(deleteContact.fulfilled, (state, { payload }) => {
                state.contacts.loading = false;
                state.contacts.error = null;                
                state.contacts.items = state.contacts.items.filter(contact => contact.id !== payload.id);  
            })
            .addCase(deleteContact.rejected, (state, { payload }) => {
                state.contacts.loading = false;
                state.contacts.error = payload;
            })
        
        
    }
})

const selectContacts = (state) => state.contacts.contacts.items;

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, filterValue) => {
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue?.toLowerCase()));
})
export const selectContactsLoading = (state) => state.contacts.contacts.loading;
export const selectContactsError = (state) => state.contacts.contacts.error;
export const contactsReducer = contactsSlice.reducer;