import { Component } from 'react';
import { ContactsForm } from '../ContactsForm/ContactForm';
import css from './App.module.css';
import ContactList from 'components/ContactList/ContactList';
import { Filter } from '../Filter/Filter';

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

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    console.log(this.state.contacts);
  };

  foundContacts = (filteredContacts, value) => {
    this.setState({
      contacts: filteredContacts,
      filter: value,
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <div className={css.wrapper}>
          <h1 className={css.h1}>Phonebook</h1>
          <ContactsForm stateApp={this.state} addContact={this.addContact} />
          <Filter
            contactsList={this.state.contacts}
            foundContacts={this.foundContacts}
            filter={this.state.filter}
          />
          <ContactList contacts={this.state.contacts} />
        </div>
      </div>
    );
  }
}
