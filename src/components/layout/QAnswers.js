import React, { Component } from "react";
import BoxForQA from "./BoxForQA";
import { TabTitleQ } from "../../Config/TabStyle";


class QAnswers extends Component {

    constructor(props) {
        super(props)
        this.state = {show: false};

        this.toggleDiv = this.toggleDiv.bind(this)
    }
    toggleDiv = () => {
        const { show } = this.state;
        this.setState( {show : !show })
    }
render () {
    return(
        <div >
            <div onClick={ this.toggleDiv }><TabTitleQ>Tab 13</TabTitleQ></div>
            { this.state.show && <BoxForQA/>}
        </div>
        
    );
}
}

export default QAnswers
