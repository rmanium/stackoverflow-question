import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { Info } from '@rmanium/react-sharables';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(
  ({ palette, typography, breakpoints }) => ({
    root: {
      margin: 10,
    },
  }),
);

function Example() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Info text="Example Shared Component" link="/" />
    </Box>
  );
}

Example.defaultProps = {};
Example.propTypes = {};

export default Example;
