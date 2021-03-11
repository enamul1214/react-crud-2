import React from 'react'

function AddContact() {
    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form">
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="Enter Name" />
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Enter Email" />
                </div>
                <button type="submit" className="ui button blue">Submit</button>
            </form>
        </div>
    )
}

export default AddContact
