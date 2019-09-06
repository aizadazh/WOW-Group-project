import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from './reducers/index';

const store = createStore(rootReducer)

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));
serviceWorker.unregister();

// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import Axios from "./Axios";

// const App = () => {
//   const [countries] = useState([
//     { id: "1", country: "Cambodia" },
//   ]);
//    return (
//     <div>
//         <label>
//             {countries.map(item => (
//               <option key={item.id} value={item.country}>
//                 {item.country}
//               </option>
//             ))}
//                 </label>
//       <Axios />
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.querySelector("#root"));