import React from 'react';
import Grid from '@material-ui/core/Grid';
import ReactNative from '../images/rn_logo.png';
import ChipHelper from '../Helper/ChipHelper';

const chips = [
  { img: ReactNative, label: 'React native' },
];

const MTechnologies = () => (
  <Grid container justify="center" className="technologies">
    <Grid item>
      <ChipHelper chips={chips} />
    </Grid>
  </Grid>
);

export default MTechnologies;
