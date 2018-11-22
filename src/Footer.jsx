import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import LinkContainer from './Helper/LinkContainer';

const styles = () => ({
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

const links = [
  {
    link: 'https://github.com/ricglz0201/ttt-hl-website',
    img: faGithubAlt,
    label: 'Github',
  },
];

const Footer = ({ classes }) => (
  <div className={classes.root}>
    <LinkContainer links={links} />
  </div>
);

Footer.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};

export default withStyles(styles)(Footer);
