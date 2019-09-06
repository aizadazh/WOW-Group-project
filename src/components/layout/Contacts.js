import React from 'react'

const Contacts = ({contacts}) => {
    return (
        <div>
            <center><h1>Contact List</h1></center>
            {contacts.map((contact) => (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{contact.type}</h5>
                        
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Contacts