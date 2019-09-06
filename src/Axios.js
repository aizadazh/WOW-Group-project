import React, { Component } from 'react';
import axios from 'axios';
const API_URL = 'http://jsonplaceholder.typicode.com';

class App extends Component {
  state = {
    users: []
  }
  componentDidMount() {
    const url = `${API_URL}/users/`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ users: data })
      console.log(this.state.users)
     })
  }
  // [...]
}
export default App;


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Axios = () => {
//   const [photos, setPhotos] = useState([]);

//   useEffect(() => {
//     axios.get(`http://wow.kg/crm/api/?action=list&object=api_articles`).then(res => {
//       const photos = res.data;
//       setPhotos(photos);
//     });
//   }, []);

//   return (
//     <div>
//       <ul>
//         {photos.map(photo => (
//           <li key={photo.id}>
//             {photo.title}, {photo.url},{" "}
//             <img src={photo.url} alt={photo.title} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Axios;

