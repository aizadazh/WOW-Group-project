// import React, {Component} from 'react';

// class Qa extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             items: [],
//             isLoaded: false
//         }
//     }

//     componentDidMount() {
//         fetch('http://wow.kg/crm/api/?action=list&object=api_articles')
//         .then( result => result.json())
//         .then( json => {
//             this.setState({
//                 items:json,
//                 isLoaded: true
//             })
//         });
//     }

//     render() {
//         var {isLoaded, items} = this.state;

//         if ( !isLoaded ) {
//             return (
//                 <div>Loading...</div>
//             );
//         } else {
//             return (
//                 <div className="Qa">
//                   <ul>
//                       {items.map(item => (
//                           <li><a href={item.link}>{item.title.rendered}</a></li>
//                       ))}
//                   </ul>
//                 </div>
//             );
//         }
//     }
// }

// export default Qa;

import React from 'react'

const Contacts = ({contacts}) => {
    return (
        <div>
            <center><h1>Contact List</h1></center>
            {contacts.map((contact) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{contact.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
                        <p class="card-text">{contact.company.catchPhrase}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Contacts