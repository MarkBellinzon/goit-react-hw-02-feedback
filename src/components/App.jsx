import React, { Component } from 'react';


import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification'; 
import { Section } from './Section/Section'; 

export class App extends Component {
 
    state = {
      good:0,
      neutral: 0,
      bad: 0,
    };
  

  countTotalFeedback = () => {
     const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  handleLeaveFeedback = e => {
   const {name} = e.target;
   this.setState((prevState) => {
      return {
        [name]: prevState[name] + 1,
      };
  });
  };

  render() {
    const { good, neutral, bad } = this.state;
    // const total = this.countTotalFeedback();
    // const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleLeaveFeedback} 
          />
          
            { this.countTotalFeedback() === 0 ? (<Notification message="There is no feedback"></Notification>) : (<Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
            />)}
        </Section>
        
      </>  
    );
  }
}