import css from "./ContactsForm.module.css"
import {nanoid} from "nanoid";
import { Component } from 'react'

export class ContactsForm extends Component {

    state = {
        name: '',
        number: ''
    }

    handleChangeName = (e) => {        
        this.setState({ name: e.target.value });
     }

    handleChangeNumber=(e) => {
        this.setState({ number: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
    const newContact = {
        id: nanoid(),
        name: this.state.name,
        number: this.state.number,
        };
        
        this.props.addContact(newContact);

        this.setState({ name: '', number: '' });
       
    }



    // handleByFilter = (e) => {
    //     const value = e.target.value;
    //      const filteredContacts = this.contactsList.filter(contact => contact.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    //     this.setState({
    //         filter: e.target.value,
    //         contacts: filteredContacts
    //     })
       
    //     console.log(e.target.value);
    //     console.log(this.state);
       
    // }
    
    render() {
        const { contacts } = this.props.stateApp;
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label  className={css.label}>Name
                        <input
                            className={css.inputName}
                            type="text"
                            name="name"
                            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            value={this.state.name}
                            required
                            onChange={this.handleChangeName}
                        /> </label>
                    
                    <label className={css.label}>Number
                        <input
                            className={css.inputName}
                            type="tel"
                            name="number"
                            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            value={this.state.number}
                            required
                            onChange={this.handleChangeNumber} />
                    </label>
                <button className={css.sbmBtn} type="submit">Add contact</button>
                </form>
                <h2 className={css.h2}>Contacts</h2>
                <ul>
                    {contacts.map(contact => {
                        return (
                            <li key={nanoid()}>{contact.name}: {contact.number}</li>
                        )
                    })}
                </ul>



                
{/* 
                <p>Find contact by name</p>
                <input
                    className={css.inputName}
                    type="text"
                    name="filter"
                    value={this.state.filter}
                    onChange={this.handleByFilter}
                /> */}
                </>

                
            
              
        )
            
    }
}

