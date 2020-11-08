import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(
  ({ palette, typography, breakpoints }) => ({
    root: {},
  }),
);

const TestButton = ({ text = '', onClick }) => {
  const classes = useStyles();
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Button
      onClick={handleOnClick}
      className={classes.root}
      variant="contained"
    >
      {text}
    </Button>
  );
};

TestButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default TestButton;
