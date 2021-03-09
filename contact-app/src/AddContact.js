import React from 'react'

function AddContact() {
  return (
    <div style={{textAlign: 'left', padding: '0 15px 15px'}}>
        <h4>Add Contact</h4>

        <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="input-control"/>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="input-control"/>
            </div>
            <button className="button" type="submit">Save</button>
        </form>
    </div>
  )
}

export default AddContact
