import React from 'react';
import { string } from 'prop-types';

export const Button = ({ classes, label, type }) => {
  return (
    <Button type={type} className={classes}>{label}</Button>
  );
}

Button.propTypes = {
  classes: string,
  label: string,
}
