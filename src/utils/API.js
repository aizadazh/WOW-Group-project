import React, {Component} from 'react';

export default class MainTab extends Component {
  constructor(props) {
      super(props);
      this.state = {
          items: [],
          isLoaded: false,
      }
  }
  componentDidMount() {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = "http://wow.kg/crm/api/?action=view&object=api_articles&id=64"; 
      fetch(proxyurl + url)
      .then(response => response.json())
      .then(json => { 
          this.setState({
              isLoaded: true,
              items: json.api_articles
          })
      })
      .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
      
  }
  
  render() {
      let {isLoaded, items} = this.state;

      if (!isLoaded) {
          return <div> Loading... </div>
      } else {
          return (
              <h1>{items.id}</h1>
          );
      }
  }
}