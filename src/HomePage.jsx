import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './Content.css'
import {headline, subHead} from './HomePageText';

class HomePage extends React.Component {
  render() {
    return (
      <Grid item xs={12}>
        <Typography variant="headline" align="center" className="title" component="h2">
          {headline}
        </Typography>
        <Typography className="title" align="center" color="textSecondary" component="p">
          {subHead}
        </Typography>
      </Grid>
    );
  }
}

export default HomePage;
