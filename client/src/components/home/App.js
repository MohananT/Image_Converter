import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '../AppBar/AppBar';
import SelectionTabs from '../SelectionTab/SelectionTab';
import Uploader from '../Uploader/Uploader';
import Accordion from '../Accordion/Accordion';

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
          <Grid container spacing={0} justify="center" className="card">
            {/* accordion to enable image processing mechanism */}
            <Accordion />
            <Grid item xs={5}>
              <Uploader />
            </Grid>
            <Grid item xs={1}>
              
            </Grid>
            <Grid item xs={5}>
              
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default App;
