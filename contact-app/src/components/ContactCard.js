import React from 'react'
import user from '../images/user.png';
import { Link } from "react-router-dom";

const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt={name}/>
            <div className="content">
                <Link
                    to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
                >
                <div className="header">{name}</div>
                <div className="">{email}</div>
                </Link>
            </div>
            <i className="trash outline alternate icon" style={{color: 'red'}} 
            onClick={() => props.clickHandler(id)}></i>
            <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
                <i className="edit alternate icon" style={{marginRight: '5px'}}></i>
            </Link>
        </div>
    )
}

export default ContactCard
