import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  appbar: {
    background: '#ffffff'
  },
  typo:{
    color: '#5f6368'
  }
})

function AppBarCmp() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        <Typography variant="h6" className={classes.typo}>
          Image2Text
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default AppBarCmp;