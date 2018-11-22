import React from 'react';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import paragraphs from './SPText';
import SPLinks from './SPLinks';
import SPCarousel from './SPCarousel';
import Carousel from '../Helper/Carousel';
import Paragraphs from '../Helper/Paragraphs';

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
        lineHeight: '3em',
      },
    },
  },
});

const SPContent = () => (
  <MuiThemeProvider theme={theme}>
    <Grid container alignItems="center">
      <Grid item xs={8}>
        <Paragraphs paragraphs={paragraphs} />
        <SPLinks />
      </Grid>
      <Grid item xs={3}>
        <Carousel steps={SPCarousel} />
      </Grid>
    </Grid>
  </MuiThemeProvider>
);

export default SPContent;
