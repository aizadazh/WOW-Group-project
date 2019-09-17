//import Search from 'react-search'
//import ReactDOM from 'react-dom'
import React, { Component } from 'react'

class TabQA extends Component {
    token = null;
    state = {
      query: "",
      people: []
    };
  
    onChange = e => {
      const { value } = e.target;
      this.setState({
        query: value
      });
  
      this.search(value);
    };
  
    search = query => {
      const url = `https://swapi.co/api/people?search=${query}`;
      const token = {};
      this.token = token;
  
      fetch(url)
        .then(results => results.json())
        .then(data => {
          if (this.token === token) {
            this.setState({ people: data.results });
          }
        });
    };
  
    componentDidMount() {
      this.search("");
    }
  
    render() {
      return (
        <form>
          <input
            type="text"
            className="search-box"
            placeholder="Search for..."
            onChange={this.onChange}
          />
          {this.state.people.map(person => (
            <ul key={person.name}>
              <li>{person.name}</li>
            </ul>
          ))}
        </form>
      );
    }
  }

  export default TabQA
//******************** */
// import Search from 'react-search'
// import ReactDOM from 'react-dom'
// import React, { Component, PropTypes } from 'react'
 
// class TabQA extends Component {
 
//   constructor (props) {
//     super(props)
//     this.state = { repos: [] }
//   }
 
//   getItemsAsync(searchValue, cb) {
//     let url = "http://wow.kg/crm/api/?action=list&object=api_articles"
//     fetch(url).then( (response) => {
//       return response.json();
//     }).then((results) => {
//       if(results.items != undefined){
//         let items = results.items.map( (res, i) => { return { id: i, value: res.api_articles } })
//         this.setState({ repos: items })
//         cb(searchValue)
//       }
//     });
//   }
 
//   render () {
//     return (
//       <div>
//         <Search items={this.state.repos}
//                 multiple={true}
//                 getItemsAsync={this.getItemsAsync.bind(this)}
//                 onItemsChanged={this.HiItems.bind(this)} />
//       </div>
//     )
//   }
// }
 
// export default TabQA
//********************* */

// import React, { Fragment } from "react";
// //import ReactDOM from "react-dom";
// import data from "./data";
// import "./styles.css";
// import posed from "react-pose";

// const Content = posed.div({
//   closed: { height: 0 },
//   open: { height: "auto" }
// });

// class TabQA extends Component {
//   state = { open: false };

//   render() {
//     const { open } = this.state;
//     return (
//       <Fragment>
//          {data.map(({ title, content }, i) => (
//           <Fragment>
//             <h2
//               className="title"
//               onClick={() => this.setState({ open: open === i ? false : i })}
//             >
//               {title}
//             </h2>
//             <Content className="content" pose={open === i ? "open" : "closed"}>
//               <div className="content-wrapper">{content}</div>
//             </Content>
//           </Fragment>
//         ))}
//       </Fragment>
//     );
//   }
// }

// export default TabQA