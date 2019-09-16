import React, {Component} from "react";  
import PhotoList from "../layout/PostList";
import SearchPhotos from "../layout/SearchPhotos";

class SearchFunction extends Component {

    constructor() {
      super();
      this.state = {
        results: [],
        loading: true
      };
    }
  
    componentDidMount() {
      this.performSearch();
    }
  
    performSearch = (query = 'camping') => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "http://wow.kg/crm/api/?action=view&object=api_articles&id=64"; 
        fetch(proxyurl + url)
        .then(response => response.json())
        .then(responseData => {
          this.setState({
            results: responseData.data,
            loading: false
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
    }
  
    render() {
  
      return ( 
        <div className = "App">
          <SearchPhotos onSearch = {this.performSearch} /> 
          <div> 
            {
              (this.state.loading) ? <p>Loading</p> :<PhotoList results={this.state.results} />
            } 
          </div> 
        </div>
      );
    }
  }
  
  export default SearchFunction;
  