import React from 'react'
import { Link } from 'react-router-dom'

function ContactList() {
  return (
    <div className="contact-list-wrapper">
        <div className="contact-list-heading">
            <h1>Contact Details</h1>
            <Link className="button" to="/add">Add Contact</Link>
        </div>
    </div>
  )
}

export default ContactList
