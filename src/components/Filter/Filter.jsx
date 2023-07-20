import { Component } from 'react';

export class Filter extends Component {
    state = {

    }

    handleByFilter = (e) => {
        const value = e.target.value;
         const filteredContacts = this.contactsList.filter(contact => contact.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
        this.setState({
            filter: e.target.value,
            contacts: filteredContacts
        })
       
        console.log(e.target.value);
        console.log(this.state);
       
    }

    render() {
        return (
            <>
            <p>Find contact by name</p>
                <input
                    className={css.inputName}
                    type="text"
                    name="filter"
                    value={this.state.filter}
                    onChange={this.handleByFilter}
                /></>
        )
    }
}