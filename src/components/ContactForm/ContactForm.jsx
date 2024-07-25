import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from 'nanoid'
import css from './ContactForm.module.css'
import * as Yup from 'yup'
import { useDispatch } from "react-redux";
import { addContact } from "../../store/contacts/contactsOps";

const ContactForm = () => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Minimum number of digits is 3').max(50, 'Maximum number of digits is 50').required('This field is required'),
        number: Yup.string().min(3, 'Minimum number of digits is 3').max(50, 'Maximum number of digits is 50').required('This field is required'),
    })

    const dispatch = useDispatch()

    const handleFormInput = (contact) => {
        dispatch(addContact(contact))
    }

    return (
        <>
            <Formik
                initialValues={{ name: '', number: '', }}
                onSubmit={(values, actions) => {
                    handleFormInput({ ...values, id: nanoid() });
                    actions.resetForm();
                }}
                validationSchema={validationSchema}
            >
                <Form className={css.container}>
                    <div className={css.label}>
                        <p>Name</p>
                        <Field name='name' className={css.inputField}></Field>
                        <ErrorMessage name='name' component='p' className={css.errorMessage}/>
                    </div>
                    <div className={css.label}>
                        <p>Number</p>
                        <Field name='number' className={css.inputField}></Field>
                        <ErrorMessage name='number' component='p' className={css.errorMessage}/>
                    </div>
                    <button type='submit' className={css.addContact}>Add Contact</button>
                </Form>
            </Formik>
        </>
    );
}

export default ContactForm