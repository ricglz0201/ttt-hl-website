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
            <Typography variant='body1' href='https://github.com/ricglz0201/TTT-HL-MP' component='a'><FontAwesomeIcon icon={faGithubAlt} /> Website Github</Typography>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default SPLinks;
