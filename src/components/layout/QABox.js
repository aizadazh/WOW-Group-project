import React from 'react';
import { TabTitleQ } from "../../Config/TabStyle";
//import QAnswers from './QAnswers';

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
            <Questions text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the'}></Questions> : null}
                <TabTitleQ onClick={this.toggleQuestions}>
                {this.state.isQuestionsShowed ? 'Lorem ipsum is simply dummy text': 'Lorem ipsum is simply dummy text'}
          </TabTitleQ>
        </div>
      );
    }
  }
  
    
export default QABox;