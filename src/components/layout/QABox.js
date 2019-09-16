import React from 'react';
import { TabTitleQ } from "../../Config/TabStyle";
import QAnswers from './QAnswers';

function Questions(props) {
    return (
      <div>{props.text}</div>
    );
  }
  
  class QABox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isQuestionsShowed: false}
      this.toggleQuestions = this.toggleQuestions.bind(this);
    }
  
    toggleQuestions() {
      this.setState(prevState => ({
        isQuestionsShowed: !prevState.isQuestionsShowed
      }));
    }
  
    render() {
      return (
        <div>
          {this.state.isQuestionsShowed ? 
            <Questions text={'.'}><QAnswers/></Questions> : null}
                <TabTitleQ onClick={this.toggleQuestions}>
                {this.state.isQuestionsShowed ? 'Tab 14': 'Tab 14'}
          </TabTitleQ>
        </div>
      );
    }
  }
  
    
export default QABox;