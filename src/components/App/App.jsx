// import Feedback from 'components/Feedback/Feedback';
import React, { Component } from 'react';

const Button = ({ addFeedback, label }) => (
  <button type="button" onClick={addFeedback}>
    {label}
  </button>
);

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
    const feedbackLabels = Object.keys(this.state);
    const feedback = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <h2>Please leave feedback</h2>
        <ul>
          {feedbackLabels.map((label, index) => (
            <li key={index}>
              <Button label={label} addFeedback={this.addFeedback} />
            </li>
          ))}
        </ul>
        <h2>Statistics</h2>
        <ul>
          {feedbackLabels.map((label, index) => (
            <li key={index}>
              <p>
                {[label]}: {this.state[label]}
              </p>
            </li>
          ))}
          <li>total: {this.countTotalFeedback()}</li>
          <li>positive feedback: {isNaN(feedback) ? '0' : feedback}%</li>
        </ul>
      </div>
    );
  }
}

export default App;
