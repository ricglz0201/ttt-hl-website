import React from 'react';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './Content.css';
import SPTechnologies from './SPTechnologies'
import SPContent from './SPContent'

const theme = createMuiTheme({
  overrides: {

  }
});

class SPPage extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Grid item xs={12}>
          <SPTechnologies/>
          <SPContent/>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default SPPage;
