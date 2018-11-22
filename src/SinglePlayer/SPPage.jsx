import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../Content.css';
import SPTechnologies from './SPTechnologies';
import SPContent from './SPContent';

const SPPage = () => (
  <Grid item xs={12}>
    <SPTechnologies />
    <SPContent />
  </Grid>
);

export default SPPage;
