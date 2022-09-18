import PropTypes from 'prop-types';
import { FeedbackList, Button } from './FeedbackOption.syled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const feedbackLabels = Object.keys(options);
  return (
    <FeedbackList>
      {feedbackLabels.map((label, index) => (
        <li key={index}>
          <Button type="button" onClick={onLeaveFeedback}>
            {label}
          </Button>
        </li>
      ))}
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
