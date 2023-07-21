import { Component } from 'react';
import css from "./Fiter.module.css"

export class Filter extends Component {
  
    contactsList = this.props.contactsList
    
    

    handleByFilter = (e) => {
        const value = e.target.value;
       
        const filteredContacts = this.contactsList.filter(contact => contact.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
        // console.log(this.contactsList);
        // console.log(filteredContacts);
         this.props.foundContacts(filteredContacts, value)
    }

    render() {
        return (
            <>
                {console.log('filter component')}
                {console.log(this.contactsList)}
            <p>Find contact by name</p>
                <input
                    className={css.inputName}
                    type="text"
                    name="filter"
                    value={this.props.filter}
                    onChange={this.handleByFilter}
                /></>
        )
    }
}