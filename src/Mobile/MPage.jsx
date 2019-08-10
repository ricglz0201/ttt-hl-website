import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../Content.css';
import MTechnologies from './MTechnologies';
import MContent from './MContent';

const MPage = () => (
  <Grid item xs={12}>
    <MTechnologies />
    <MContent />
  </Grid>
);

export default MPage;
