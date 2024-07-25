import { selectContacts, selectContactsError, selectContactsLoading } from "../../store/contacts/contactsSlice";
import Contact from "../Contact/Contact";
import css from './ContactList.module.css'
import Loader from '../../components/Loader/Loader';
import { selectNameFilter } from "../../store/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteContact, fetchContacts } from "../../store/contacts/contactsOps";

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const contactsLoading = useSelector(selectContactsLoading);
    const contactsError = useSelector(selectContactsError);
    const filterValue = useSelector(selectNameFilter);

    let contactList;
    if (filterValue !== "") {
        contactList = contacts.filter(contact => 
            contact.name.toLowerCase().includes(filterValue.toLowerCase())
        )
    } else {
        contactList = contacts;
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    },[dispatch])

    const handleDelete = (contactId) => {     
        dispatch(deleteContact(contactId));
    };    

    return (
        <>
            {contactsLoading && <Loader />}      
            {contactsError ? <h2>{contactsError}</h2> :                 
                <ul className={css.contactList}>
                    {contactList.map((contact) => (                    
                    <li key={contact.id} className={css.listItem}>
                        <Contact id={contact.id} name={contact.name} number={contact.number} onDelete={handleDelete} />
                    </li>
                    ))}                
                </ul>                       
            }            
        </>
    );
}

export default ContactList