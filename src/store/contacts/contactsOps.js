import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = 'https://66a24e53967c89168f1f90dd.mockapi.io/';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAllContacts',
    async () => {
        const receivedContacts = await axios('/contacts');
        // console.log('receivedContacts :>> ', receivedContacts);
        return receivedContacts.data;
    }
)