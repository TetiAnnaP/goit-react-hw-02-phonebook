import { Component } from 'react';
import css from "./ContactList.module.css"
import {nanoid} from "nanoid";

export class ContactList extends Component{
   state = this.props.state;

    render() {
        return (
            <>
                <h2 className={css.h2}>Contacts</h2>
                <ul>
                    {this.state.contacts.map(contact => {
                        return (
                            <li key={nanoid()}>{contact.name}: {contact.number}</li>
                        )
                    })}
                </ul>
            </>
        )
    }
}