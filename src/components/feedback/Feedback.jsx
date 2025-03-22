import PropTypes from 'prop-types';
const Feedback = ({ feedback, positiveFeedback, totalFeedback }) => {
  return (
    <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  );
};
  Feedback.propTypes = {
    feedback: PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    }).isRequired,
    positiveFeedback: PropTypes.number.isRequired,
    totalFeedback: PropTypes.number.isRequired,
  };
  
  
  
  export default Feedback;