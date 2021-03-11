import React from 'react'
import ContactCard from './ContactCard';

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
        <div className="ui celled list" style={{padding: '0 15px 15px'}}>
            {renderContactList}
        </div>
    )
}

export default ContactList
