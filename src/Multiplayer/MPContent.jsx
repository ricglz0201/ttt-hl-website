import React from 'react';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {firstParagraph, secondParagraph, thirdParagraph, fourthParagraph, fifthParagraph, sixthParagraph} from './MPText'
import MPLinks from './MPLinks'
import MPCarousel from './MPCarousel'

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

class MPContent extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Grid container alignItems='center'>
          <Grid item xs={8}>
            <Typography variant='body1' component='p'>{firstParagraph}</Typography>
            <Typography variant='body1' component='p'>{secondParagraph}</Typography>
            <Typography variant='body1' component='p'>{thirdParagraph}</Typography>
            <Typography variant='body1' component='p'>{fourthParagraph}</Typography>
            <Typography variant='body1' component='p'>{fifthParagraph}</Typography>
            <Typography variant='body1' component='p'>{sixthParagraph}</Typography>
            <MPLinks/>
          </Grid>
          <Grid item xs={3}>
            <MPCarousel/>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default MPContent;
