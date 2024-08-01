import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import initialContacts from './initialContacts.json';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [contacts, setContacts] = useState(
    localStorage.getItem('contacts')
      ? JSON.parse(localStorage.getItem('contacts'))
      : initialContacts
  );

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const addContact = contact => {
    if (
      contacts.find(
        ({ name, number }) => name === contact.name || number === contact.number
      )
    ) {
      iziToast.warning({
        position: 'topRight',
        message: 'This name or number is already exists',
      });
      return;
    }
    setContacts(prevContacts => [...prevContacts, contact]);
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={searchValue} onSearch={setSearchValue} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
