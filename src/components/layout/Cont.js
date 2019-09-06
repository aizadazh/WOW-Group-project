import React, {Component} from 'react';
import Contacts from '../layout/Contacts';

class Cont extends Component {
    render() {
        return (
            <Contacts contacts={this.state.contacts} />
        )
    }

    state = {
        contacts: []
    };

    componentDidMount() {
        fetch("http://wow.kg/crm/api/?action=list&object=api_articles", {
      mode: "no-cors"
    })
      .then(res => console.log(res.data))
      .then(data => {
        this.setState({ contacts: data.api_articles });
      })
      .catch(console.log);
    }
}

export default Cont