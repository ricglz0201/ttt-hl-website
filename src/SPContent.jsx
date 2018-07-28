import React from 'react';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import './Content.css';
import SPTechnologies from './SPTechnologies'

const theme = createMuiTheme({
  overrides: {
    MuiGrid: {
      container: {
        marginTop: 25
      }
    },
    MuiTypography: {
      body1: {
        paddingLeft: 30
      }
    },
  }
});

class SPContent extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Grid container>
          <Grid item xs={8}>
            <Typography>Hello world</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Hello world</Typography>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default SPContent;
