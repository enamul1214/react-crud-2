import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import AddContact from './AddContact';
import './App.css'
import ContactCard from './ContactCard';
import ContactList from './ContactList';
import EditContact from './EditContact';
import Header from './Header';


function App() {
    
    return (
      <div className="App">
          <Header />
          <AddContact />
          <ContactList />
      </div>
    );
}

export default App;
