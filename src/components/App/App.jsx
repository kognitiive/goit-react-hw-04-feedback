import React from 'react';
import { useState } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../Feedback/FeedbackOptions';
import Section from '../Section/Section';

import { Container } from './App.styled';


export default function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const optionsNames = ['good', 'neutral', 'bad']
  const optionsValues = [good, neutral, bad]

  const addFeedback = evt => {
    const currLabel = evt.currentTarget.textContent;
    
    switch (currLabel) { 
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default: return;
    }
  };

  const countTotalFeedback = () => {
    const arr = optionsValues;
    const total = arr.reduce((acc, arr) => acc + Number(arr), 0);
    return total;
  };

  const total = countTotalFeedback()

  const countPositiveFeedbackPercentage = () => {
    const arr = optionsValues;
    const positive = Number(good);
    const total = arr.reduce((acc, arr) => acc + Number(arr), 0);
    const percentPositive = (positive / total) * 100;
    return Math.round(percentPositive);
  };

  const positivePercentage = countPositiveFeedbackPercentage()

  return (

      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={optionsNames}
            onLeaveFeedback={addFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
        {
          total > 0 ? (

            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
        )
          : (
            <p>There is no feedback</p>
          )
        }
        </Section>
      </Container>
    );
}

