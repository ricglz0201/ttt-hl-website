import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: 'black',
    textAlign: 'center',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

const Footer = ({ classes }) => (
  <div className={classes.root}>
    <Typography component="div" style={{ padding: 12 }}>
      <a style={{ color: 'black' }} href="https://github.com/ricglz0201/ttt-hl-website">
        <FontAwesomeIcon icon={faGithubAlt} />
        Github
      </a>
    </Typography>
  </div>
);

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
