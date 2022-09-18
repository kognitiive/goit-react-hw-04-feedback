import React, { Component } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../Feedback/FeedbackOptions';
import Section from '../Section/Section';

import { Container } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = evt => {
    const currLabel = evt.currentTarget.textContent;
    this.setState(prevState => {
      return { [currLabel]: prevState[currLabel] + 1 };
    });
  };

  countTotalFeedback = () => {
    const arr = Object.values(this.state);
    const total = arr.reduce((acc, arr) => acc + Number(arr), 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const arr = Object.values(this.state);
    const positive = Number(this.state.good);
    const total = arr.reduce((acc, arr) => acc + Number(arr), 0);
    const percentPositive = (positive / total) * 100;
    return Math.round(percentPositive);
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {total > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            'There is no feedback'
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
