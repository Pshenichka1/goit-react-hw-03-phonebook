import { Component } from "react";
import { ContactForm } from '../components/ContactForm';
import { ContactList } from '../components/ContactList';
import { Filter } from "../components/Filter";
import { Container } from "../components/Container";
import { TitlePhonebook, TitleContacts } from "../components/AppStyled";

export class App extends Component {
   state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmitForm = ({ id, name, number }) => {
    const contact = { id, name, number };
    this.setState(({ contacts }) => {
      return { contacts: [contact, ...contacts] }
    })
  };

  onFilter = e => {
    this.setState({ filter: e.target.value })
  };

  handleDel = id => {
    const filteredContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState(prevState => {
      return { ...prevState, contacts: [...filteredContacts] };
    });
  };

   onFilterContacts = () => {
    let filterContact = [];
    if (this.state.filter) {
      filterContact = this.state.contacts.filter(
        contact =>
          contact.name.includes(this.state.filter) ||
          contact.name.toLowerCase().includes(this.state.filter)
      );
    } else {
      return this.state.contacts;
    }
    return filterContact;
  };



  render() {
    const { contacts, filter } = this.state;
      return (
    <Container>
      <TitlePhonebook>Phonebook</TitlePhonebook>
          <ContactForm onSubmit={this.handleSubmitForm} contacts={contacts} />

      <TitleContacts>Contacts</TitleContacts>
          <Filter onChange={this.onFilter} value={filter} />
          <ContactList
            contacts={contacts}
            filter={filter}
            onDelete={this.handleDel}
            filterContacts={this.onFilterContacts}
          /> 
    </Container>
  );
  }
};