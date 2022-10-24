import PropTypes from 'prop-types';
import { FeedbackList, Button } from './FeedbackOption.syled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map((label, index) => (
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
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
