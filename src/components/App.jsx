import { useState } from 'react';
import { nanoid } from 'nanoid';

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
    const isExist = contacts.some(
      ({ name, number }) =>
        name.toLowerCase().trim() === newContact.name.toLowerCase().trim() ||
        number.trim() === newContact.number.trim()
    );

    if (isExist) {
      return toast.error(
        `${newContact.name}: is already in contacts`,
        toastifyOptions
      );
    }

    setContacts(contacts => [{ ...newContact, id: nanoid() }, ...contacts]);
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

        {contacts.length > 0 && (
          <>
            <Title title="Contacts" />
            <Filter value={filter} onChange={changeFilter} />
            <ContactList
              onDelete={deleteContact}
              contacts={getVisibleContacts()}
            />
          </>
        )}
      </Section>
      <ToastContainer />
      <GlobalStyle />
    </Layout>
  );
}
