import React from 'react'
import user from '../images/user.png';

const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    return (
        <div className="item" style={{padding: `0 10px !important`}}>
            <img className="ui avatar image" src={user} alt={name}/>
            <div className="content">
                <div className="header">{name}</div>
                <div className="">{email}</div>
            </div>
            <i className="trash outline alternate icon" style={{color: 'red'}} 
            onClick={() => props.clickHandler(id)}></i>
            <i className="pencil alternate icon" style={{color: 'blue',marginRight: '5px'}}></i>
        </div>
    )
}

export default ContactCard
