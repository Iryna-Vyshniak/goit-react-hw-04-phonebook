import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastifyOptions } from 'utils/toastifyOptions';

import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Section } from './Section/Section';
import { Title } from './Title/Title';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

import Filter from './Filter/Filter';

import initialContacts from 'data/contacts.json';
import useLocalStorage from 'hooks/useLocalStorage';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    contacts.some(
      contact =>
        contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim() ||
        contact.number.trim() === newContact.number.trim()
    )
      ? toast.error(
          `${newContact.name}: is already in contacts`,
          toastifyOptions
        )
      : setContacts(contacts => [newContact, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.target.value.toLowerCase().trim());
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(normalizedFilter)
    );

    if (normalizedFilter && !filteredContacts.length) {
      toast.warn(`No contacts matching your request`, toastifyOptions);
    }

    return filteredContacts;
  };

  return (
    <Layout>
      <Section title="Phonebook">
        <ContactForm onAddContact={addContact} />
        <Title title="Contacts" />
        <Filter value={filter} onChange={changeFilter} />
        <ContactList onDelete={deleteContact} contacts={getVisibleContacts()} />
      </Section>
      <ToastContainer />
      <GlobalStyle />
    </Layout>
  );
}

// export default class App extends Component {
//   state = {
//     contacts: initialContacts,
//     filter: '',
//   };

//   componentDidMount() {
//     const contactsFromLS = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contactsFromLS);
//     if (!parsedContacts) return;
//     this.setState({ contacts: parsedContacts });
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = newContact => {
//     const { contacts } = this.state;

//     contacts.some(
//       contact =>
//         contact.name.toLowerCase().trim() ===
//           newContact.name.toLowerCase().trim() ||
//         contact.number.trim() === newContact.number.trim()
//     )
//       ? toast.error(`${newContact.name}: is already in contacts`, notifyOptions)
//       : this.setState(prevState => ({
//           contacts: [newContact, ...prevState.contacts],
//         }));
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => {
//       return {
//         contacts: prevState.contacts.filter(
//           contact => contact.id !== contactId
//         ),
//       };
//     });
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.target.value.toLowerCase().trim() });
//   };

//   getVisibleContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().trim().includes(normalizedFilter)
//     );
//   };

//   render() {
//     const { filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();
//     return (
//       <Layout>
//         <Section title="Phonebook">
//           <ContactForm onAddContact={this.addContact} />
//           <Title title="Contacts" />
//           <Filter value={filter} onChange={this.changeFilter} />
//           <ContactList
//             onDelete={this.deleteContact}
//             contacts={visibleContacts}
//           />
//         </Section>
//         <ToastContainer />
//         <GlobalStyle />
//       </Layout>
//     );
//   }
// }
