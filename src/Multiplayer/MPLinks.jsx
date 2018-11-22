import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const SPLinks = () => (
  <Grid container alignItems="center" justify="center" alignContent="center">
    <Grid item xs={2}>
      <Typography variant="body1" href="https://github.com/ricglz0201/TTT-HL-MP" component="a">
        <FontAwesomeIcon icon={faGithubAlt} />
        {' '}
        Website Github
      </Typography>
    </Grid>
  </Grid>
);

export default SPLinks;
