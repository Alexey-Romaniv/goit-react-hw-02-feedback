import React from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {' '}
      {options.map(el => (
        <button type="button" key={el} onClick={() => onLeaveFeedback(el)}>
          {el}
        </button>
      ))}
    </>
  );
};
