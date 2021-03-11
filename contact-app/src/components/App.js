import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import AddContact from './AddContact';
import './App.css'
import ContactList from './ContactList';
import Header from './Header';


function App() {

  const contacts = [
    {
      id: '1',
      name: 'Enamul',
      email: 'enamul@gmail.com'
    },
    {
      id: '2',
      name: 'Kabir',
      email: 'kabir@gmail.com'
    },
    {
      id: '3',
      name: 'Jahan',
      email: 'jahan@gmail.com'
    }
  ]
    
    return (
      <div className="ui container">
          <Header />
          <AddContact />
          <ContactList contacts={contacts} />
      </div>
    );
}

export default App;
