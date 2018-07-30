import React from 'react';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '../Content.css';
import MPTechnologies from './MPTechnologies'
import MPContent from './MPContent'

const theme = createMuiTheme({
  overrides: {

  }
});

class MPPage extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Grid item xs={12}>
          <MPTechnologies/>
          <MPContent/>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default MPPage;
