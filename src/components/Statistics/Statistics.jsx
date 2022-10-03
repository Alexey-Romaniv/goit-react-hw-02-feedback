import React from 'react';
import css from '../styles.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.feedback__list}>
      <li className={css.feedback__item}>Good: {good}</li>
      <li className={css.feedback__item}>Neutral: {neutral}</li>
      <li className={css.feedback__item}>Bad: {bad}</li>
      <li className={css.feedback__item}>Total: {total}</li>
      <li className={css.feedback__item}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
};
