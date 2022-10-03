import React from 'react';
import css from '../styles.module.css';

export const Section = ({ children, title }) => {
  return (
    <section className={css.feedback__section}>
      <h2 className={css.feedback__title}>{title}</h2>
      {children}
    </section>
  );
};
