import React, { Component } from 'react';
const Button = ({ addFeedback, label }) => (
  <button type="button" onClick={addFeedback}>
    {label}
  </button>
);

class Feedback extends Component {
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

  render() {
    const feedbackLabels = Object.keys(this.state);

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
      </div>
    );
  }
}

export default Feedback;
