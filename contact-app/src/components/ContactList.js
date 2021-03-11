import React from 'react'
import ContactCard from './ContactCard';
import { Link } from "react-router-dom";

const ContactList = (props) => {
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard 
                contact={contact} 
                clickHandler={deleteContactHandler} 
                key={contact.id}
            />
        )
    });

    return (
        <div className="main">
            <h2 style={{marginBottom: '20px'}}>
                Contact List
                <Link to="/add">
                <button className="ui button blue right">Add Contact</button>
                </Link>
            </h2>
            <div className="ui celled list" style={{border: '1px solid #dededf', borderTop: 0}}>
                {renderContactList}
            </div>
        </div>
    )
}

export default ContactList
