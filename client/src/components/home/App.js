import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '../AppBar/AppBar';
import SelectionTabs from '../SelectionTab/SelectionTab';


import './App.css';


class App extends Component {

  render() {
    return (
      <div className="container">
        {/* AppBar to represent header */}
        <AppBar />
        <div className="width-handler">
          {/* selection buttons */}
          {/* 1. Image to Text  2.Selected Image to Text */}
          <div className="selection-tab-handler">
            <SelectionTabs />
          </div>
          <Grid container spacing={0} justify="center">
            <Grid item xs={6}>
              Upload
            </Grid>
            <Grid item xs={6}>
              View
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default App;
