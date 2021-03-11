import React, {useState, useEffect} from 'react';
import uuid from 'uuidv4';
import 'semantic-ui-css/semantic.min.css'
import AddContact from './AddContact';
import './App.css'
import ContactList from './ContactList';
import Header from './Header';


function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, {id: uuid(), ...contact}]);
  }

  const removeContactHandler = (id) => {
      const contactList = contacts.filter((contact) => {
        return contact.id !== id;
      });

      setContacts(contactList);
  }

  useEffect(() => {
      const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if(retriveContacts){
        setContacts(retriveContacts);
      }
  }, []);

  useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // const contacts = [
  //   {
  //     id: '1',
  //     name: 'Enamul',
  //     email: 'enamul@gmail.com'
  //   },
  //   {
  //     id: '2',
  //     name: 'Kabir',
  //     email: 'kabir@gmail.com'
  //   },
  //   {
  //     id: '3',
  //     name: 'Jahan',
  //     email: 'jahan@gmail.com'
  //   }
  // ]
    
    return (
      <div className="ui container">
          <Header />
          <AddContact addContactHandler={addContactHandler} />
          <ContactList contacts={contacts} getContactId={removeContactHandler} />
      </div>
    );
}

export default App;
