import React from 'react';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import paragraphs from './MText';
import MLinks from './MLinks';
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

const MContent = () => (
  <MuiThemeProvider theme={theme}>
    <Grid container alignItems="center">
      <Grid item xs={8}>
        <Paragraphs paragraphs={paragraphs} />
        <MLinks />
      </Grid>
      <Grid item xs={3} />
    </Grid>
  </MuiThemeProvider>
);

export default MContent;
