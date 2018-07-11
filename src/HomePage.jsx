import React from 'react';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ClicketyClack from 'react-clicketyclack'
import './Content.css'
import {headline, subHead} from './HomePageText';

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      display3: {
        color: 'blue'
      },
      display1: {
        color: 'blue'
      }
    },
  }
});

class HomePage extends React.Component {
  render() {
    const line = [subHead];
    return (
      <MuiThemeProvider theme={theme}>
        <Grid item xs={12}>
          <Typography variant="display3" align="center" className="title" component="h2">
            {headline}
          </Typography>
          <Typography variant="display1" align="center" className="title" component="p">
            Tic Tac Toe taken to a <ClicketyClack lines={line} erase="true" repeat="true" style={{color: 'purple'}} />
          </Typography>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default HomePage;
