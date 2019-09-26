import React, { Component } from 'react'

class TabQA extends Component {
    token = null;
    state = {
      query: "",
      api_articles: []
    };
  
    onChange = e => {
      const { value } = e.target;
      this.setState({
        query: value
      });
  
      this.search(value);
    };
  
    search = query => {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = `http://wow.kg/crm/api/?action=list&object=api_articles=${query}`;
      const token = {};
      this.token = token;
  
      fetch(proxyurl + url)
        .then(results => results.json())
        .then(data => {
          if (this.token === token) {
            this.setState({ api_articles: data.results });
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
          {this.state.api_articles.map(person => (
            <ul key={person.id}>
              <li>{person.id}</li>
            </ul>
          ))}
        </form>
      );
    }
  }

  export default TabQA
