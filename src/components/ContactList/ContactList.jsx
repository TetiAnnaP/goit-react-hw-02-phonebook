import { nanoid } from 'nanoid';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => {
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
