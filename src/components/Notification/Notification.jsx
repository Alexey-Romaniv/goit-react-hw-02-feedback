import React from 'react';
import css from '../styles.module.css';

export const Notification = ({ message }) => (
  <p className={css.message}>{message}</p>
);
