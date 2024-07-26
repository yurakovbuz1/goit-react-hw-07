import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = 'https://66a24e53967c89168f1f90dd.mockapi.io/';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const receivedContacts = await axios('/contacts');
            return receivedContacts.data;
        } catch (error) {
            return  thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact, thunkAPI) => {
        try {
            const responseAddContact = await axios.post(('/contacts'))
            // console.log('responseAddContact :>> ', responseAddContact);
            return newContact;
        } catch (error) {                    
            return  thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const { data } = await axios.delete((`/contacts/${contactId}`))
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)