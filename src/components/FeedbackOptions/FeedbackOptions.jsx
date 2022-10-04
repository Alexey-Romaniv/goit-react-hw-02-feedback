import React from 'react';

import css from '../styles.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.centeredBox}>
      {options.map(el => (
        <button
          className={css.feedback__btn}
          type="button"
          key={el}
          onClick={() => onLeaveFeedback(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
};
