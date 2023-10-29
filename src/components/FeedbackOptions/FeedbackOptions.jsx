import React from 'react';
import { StyledBtnList } from '../App.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options = [], onLeaveFeedback }) => {
  return (
    <div>
      <StyledBtnList>
        {options.map(option => (
          <li key={option}>
            <button name={option} onClick={() => onLeaveFeedback(option)}>
              {option}
            </button>
          </li>
        ))}
      </StyledBtnList>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
