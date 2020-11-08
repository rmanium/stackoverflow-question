import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Button } from '@rmanium/react-sharables';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
}));
const App = () => {
  const classes = useStyles();
  return (
    <ThemeProvider>
      <CssBaseline />
      <div className={classes.root}>
        <Button text="Simple Button" />
      </div>
    </ThemeProvider>
  );
};

export default App;
