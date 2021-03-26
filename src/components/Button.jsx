import React from 'react';
import { string } from 'prop-types';

export const Button = ({ label, type }) => {
  return (
    <Button type={type}>{label}</Button>
  );
}

Button.propTypes = {
  label: string,
}
