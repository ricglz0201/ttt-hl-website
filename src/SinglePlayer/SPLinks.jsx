import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const SPLinks = () => (
  <Grid container alignItems="center" justify="center" alignContent="center">
    <Grid item xs={2}>
      <Typography variant="body1" href="https://github.com/ricglz0201/Tic-Tac-Toe-HL" component="a">
        <FontAwesomeIcon icon={faGithubAlt} />
        {' '}
        Website Github
      </Typography>
    </Grid>
    <Grid item xs={1}>
      <Typography variant="body1" component="a" href="https://ricglz0201.github.io/Tic-Tac-Toe-HL/">
        Website
      </Typography>
    </Grid>
    <Grid item xs={2}>
      <Typography variant="body1" href="https://github.com/ricglz0201/ttt-react" component="a">
        <FontAwesomeIcon icon={faGithubAlt} />
        {' '}
        React version repo
      </Typography>
    </Grid>
    <Grid item xs={3}>
      <Typography variant="body1" component="a" href="https://ttt-hl-react.firebaseapp.com/">
        React website
      </Typography>
    </Grid>
  </Grid>
);

export default SPLinks;
