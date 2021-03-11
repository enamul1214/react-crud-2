import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import 'semantic-ui-css/semantic.min.css';
import api from '../api/contacts';
import AddContact from './AddContact';
import './App.css'
import ContactList from './ContactList';
import Header from './Header';
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";


function App() {
  // const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([]);

  // Retrieve Contacts
  const retrieveContacts = async () => {
    const response = await api.get('/contacts');
    return response.data;
  }

  const addContactHandler = async (contact) => {
    const request = {
      id: uuidv4(), 
      ...contact
    }
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  }

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  const removeContactHandler = async (id) => {
      await api.delete(`/contacts/${id}`);

      const contactList = contacts.filter((contact) => {
        return contact.id !== id;
      });

      setContacts(contactList);
  }

  useEffect(() => {
      // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      // if(retriveContacts){
      //   setContacts(retriveContacts);
      // }

      const getAllContacts = async () => {
        const allContacts = await retrieveContacts();
        if(allContacts) {
          setContacts(allContacts);
        }
      }

      getAllContacts()
  }, []);

  useEffect(() => {
      // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
    
    return (
      <div className="ui container">
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <ContactList
                  {...props}
                  contacts={contacts}
                  getContactId={removeContactHandler}
                />
              )}
            />
            <Route
              path="/add"
              render={(props) => (
                <AddContact {...props} addContactHandler={addContactHandler} />
              )}
            />

            <Route
              path="/edit"
              render={(props) => (
                <EditContact
                  {...props}
                  updateContactHandler={updateContactHandler}
                />
              )}
            />

            <Route path="/contact/:id" component={ContactDetail} />
          </Switch>
        </Router>
      </div>
    );
}

export default App;
