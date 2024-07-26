import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
import { filtersReducer } from "./filtersSlice";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfigContacts = {
    key: 'contacts',
    storage
}

// const contactsPersistedReducer = persistReducer(persistConfigContacts, contactsReducer)

const rootReducer = {
    contacts: contactsReducer,
    filters: filtersReducer,
}

export const store = configureStore({
    reducer: rootReducer
})

// export const persistor = persistStore(store)