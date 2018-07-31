import React from 'react';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {firstParagraph, secondParagraph, thirdParagraph, fourthParagraph} from './MText'
import MLinks from './MLinks'
import MCarousel from './MCarousel'

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

class MContent extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Grid container alignItems='center'>
          <Grid item xs={8}>
            <Typography variant='body1' component='p'>{firstParagraph}</Typography>
            <Typography variant='body1' component='p'>{secondParagraph}</Typography>
            <Typography variant='body1' component='p'>{thirdParagraph}</Typography>
            <Typography variant='body1' component='p'>{fourthParagraph}</Typography>
            <MLinks/>
          </Grid>
          <Grid item xs={3}>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default MContent;
