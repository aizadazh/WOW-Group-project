import React, {Component} from 'react';

class Qa extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('http://www.pradipdebnath.com/wp-json/wp/v2/posts')
        .then( result => result.json())
        .then( json => {
            this.setState({
                items:json,
                isLoaded: true
            })
        });
    }

    render() {
        var {isLoaded, items} = this.state;

        if ( !isLoaded ) {
            return (
                <div>Loading...</div>
            );
        } else {
            return (
                <div className="Qa">
                  <ul>
                      {items.map(item => (
                          <li><a href={item.link}>{item.title.rendered}</a></li>
                      ))}
                  </ul>
                </div>
            );
        }
    }
}

export default Qa;