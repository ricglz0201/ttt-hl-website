import React from 'react';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import './Content.css';
import {firstParagraph, secondParagraph, thirdParagraph} from './SPText'
import SPLinks from './SPLinks'
import SPCarousel from './SPCarousel'

const theme = createMuiTheme({
  overrides: {
    MuiGrid: {
      container: {
        marginTop: 25,
      },
      item: {
        marginRight: 50,
      },
    },
    MuiTypography: {
      body1: {
        paddingLeft: 30,
        lineHeight: '3em'
      }
    },
  }
});

class SPContent extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Grid container alignItems='center'>
          <Grid item xs={8}>
            <Typography variant='body1' component='p'>{firstParagraph}</Typography>
            <Typography variant='body1' component='p'>{secondParagraph}</Typography>
            <Typography variant='body1' component='p'>{thirdParagraph}</Typography>
            <SPLinks/>
          </Grid>
          <Grid item xs={3}>
            <SPCarousel/>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default SPContent;
