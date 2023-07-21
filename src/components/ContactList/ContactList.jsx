import { nanoid } from 'nanoid';

const ContactList = ({ contacts, filter }) => {
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul>
      {visibleContacts.map(contact => {
        return (
          <li key={nanoid()}>
            {contact.name}: {contact.number}
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
