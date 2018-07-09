import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styles from './Content.css'
import HomePageImages from './HomePageImages'

class HomePage extends React.Component {
  render() {
    return (<Grid container="container" spacing={24} alignItems="stretch" className="container" style={styles}>
      <Grid item="item" xs={12}>
        <Typography variant="headline" align="center" className="title" component="h2">
          Tic Tac Toe HL
        </Typography>
        <Typography className="title" align="center" color="textSecondary" component="p">
          Tic Tac Toe taken to a whole new level.
        </Typography>
      </Grid>
      <Grid item="item" xs={12} sm={8}>
        <Typography component="p" variant="body1">
          This project was created with the objective of learning
        </Typography>
      </Grid>
      <Grid item="item" xs={12} sm={4}>
        <HomePageImages/>
      </Grid>
    </Grid>);
  }
}

export default HomePage;
