import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import uuid from 'uuidv4'
import api from './api/contacts'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import ContactDetails from './ContactDetails'
import contacts from './api/contacts';


function App() {
    const LOCAL_STORAGE_KEY = "contacts"
    const [contact, setContacts] = useState([]);

    // Retrieve Contacts
    const retrieveContacts = async () => {
        const response = await api.get("/contacts");
        return response.data;
        console.log(response);
    }

    // Add Contact
    const addContactHandler = (contact) => {
      console.log(contact);
      setContacts([...contacts, {id: uuid(), ...contact}]);
    }

    // Remove Contact
    const removeContactHandler = (id) => {
      const newContactList = contacts.filter((contact) => {
        return contact.id !== id;
      })

      setContacts(newContactList);
    }

    useEffect(() => {

    }, []);
    

    return (
      <div className="App">
          <Router>
              <Header />
              <Switch>
                <Route exact path="/" component={ContactList} />
                <Route exact path="/add" component={AddContact} />
                <Route exact path="/details/:id" component={ContactDetails} />
              </Switch>
          </Router>
      </div>
    );
}

export default App;
