import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import '../Technologies.css';
import ReactNative from '../images/rn_logo.png';

const MTechnologies = () => (
  <Grid container justify="center" className="technologies">
    <Grid item>
      <Chip avatar={<Avatar src={ReactNative} />} label="React native" />
    </Grid>
  </Grid>
);

export default MTechnologies;
