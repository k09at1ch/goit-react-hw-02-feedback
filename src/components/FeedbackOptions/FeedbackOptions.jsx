import React from 'react';
import PropTypes from 'prop-types';
import style from '../Styles.module.css'
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={style.btns}>
      {options.map(option => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
