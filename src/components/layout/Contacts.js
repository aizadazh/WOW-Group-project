import React from 'react';

const Contacts = ({contacts}) => {
    return (
        <div>
            <center><h1>Contact List</h1></center>
            {contacts.map((contacts) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{contacts.api_products.id}</h5>
                        
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Contacts

