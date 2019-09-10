import React, {Component} from 'react';
    import Contacts from '../layout/Contacts';
    
    class Cont extends Component {
        render() {
            return (
                <ProductCardBox/>
                )
    }
    
    export default Cont

//     componentDidMount() {
//         const proxyurl = "https://cors-anywhere.herokuapp.com/";
//         const url = "http://wow.kg/crm/api/?action=view&object=api_products&id=223"; 
//         fetch(proxyurl + url) 
//         .then(response => response.text())
//         .then(contents => console.log(contents))
//         .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
         
//     }
// }

// export default Cont

