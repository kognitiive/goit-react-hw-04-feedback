import PropTypes from 'prop-types';

import { StatisticsList } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsList>
      <li>
        <p>good: {good}</p>
      </li>
      <li>
        <p>neutral: {neutral}</p>
      </li>
      <li>
        <p>bad: {bad}</p>
      </li>
      <li>
        <p>total: {total}</p>
      </li>
      <li>
        <p>
          positive feedback:{' '}
          {isNaN(positivePercentage) ? '0' : positivePercentage}%
        </p>
      </li>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
