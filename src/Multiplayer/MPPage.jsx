import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../Content.css';
import MPTechnologies from './MPTechnologies';
import MPContent from './MPContent';

const MPPage = () => (
  <Grid item xs={12}>
    <MPTechnologies />
    <MPContent />
  </Grid>
);

export default MPPage;
