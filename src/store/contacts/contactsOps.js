import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = 'https://66a24e53967c89168f1f90dd.mockapi.io/';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async () => {
        const receivedContacts = await axios('/contacts');
        return receivedContacts.data;
    }
)

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact) => {
        const responseAddContact = await axios.post(('/contacts'))
        console.log('responseAddContact :>> ', responseAddContact);
        return newContact;
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId) => {
        const { data } = await axios.delete((`/contacts/${contactId}`))
        return data;
    }
)