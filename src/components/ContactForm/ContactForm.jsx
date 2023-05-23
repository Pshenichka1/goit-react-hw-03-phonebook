import { Formik, ErrorMessage } from "formik";
// import * as yup from 'yup';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Component } from "react";

import { FormContact, Label, Input, Button } from "../ContactForm/styled";

// const schema = yup.object().shape({
//     name: yup.string().required(),
//     number: yup.string().required().max(15),
// })

const initialValues = {
    name: '',
    number: '',
}

export class ContactForm extends Component {
    handleSubmit = ({ name, number }, { resetForm }) => {
        const nameContact = this.props.contacts.find(
       contact => contact.name.toLowerCase() === name.toLowerCase());
        if (nameContact) {
            alert(`${name} is already in contacts`);
            return;
        }
        const contact = { id: nanoid(), name, number };
        this.props.onSubmit(contact);
        resetForm();
    }
    render() {
        return (
            <Formik initialValues={initialValues}
                // validationSchema={schema}
                onSubmit={this.handleSubmit}>
                <FormContact autoComplete="off">
                    <Label htmlFor="name">Name
                        <Input type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required />
                        <ErrorMessage name="name" component="div" />
                    </Label>
                    <Label htmlFor="tel">Number
                        <Input type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required />
                        <ErrorMessage name="number" component="div" />
                    </Label>
                    <Button type="submit">Add contact</Button>
                </FormContact>
            </Formik>
        )
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
}