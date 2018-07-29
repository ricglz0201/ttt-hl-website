import React from 'react';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'

const theme = createMuiTheme({
  overrides: {

  }
});

class SPLinks extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Grid container alignItems='center' justify='center' alignContent='center'>
          <Grid item xs={2}>
            <Typography variant='body1' href='https://github.com/ricglz0201/Tic-Tac-Toe-HL' component='a'><FontAwesomeIcon icon={faGithubAlt} /> Website Github</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant='body1' component='a' href='https://ricglz0201.github.io/Tic-Tac-Toe-HL/'>Website</Typography>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default SPLinks;
