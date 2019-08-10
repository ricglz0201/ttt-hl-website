import React from 'react';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Carousel from './Carousel';
import Paragraphs from './Paragraphs';

export const theme = createMuiTheme({
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

const PageWithCarousel = ({ Links, steps, paragraphs }) => (
  <MuiThemeProvider theme={theme}>
    <Grid container alignItems="center">
      <Grid item xs={8}>
        <Paragraphs paragraphs={paragraphs} />
        <Links />
      </Grid>
      <Grid item xs={3}>
        <Carousel steps={steps} />
      </Grid>
    </Grid>
  </MuiThemeProvider>
);

PageWithCarousel.propTypes = {
  Links: PropTypes.elementType.isRequired,
  steps: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PageWithCarousel;
