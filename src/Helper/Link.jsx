import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const Link = ({ link, img, label }) => (
  <Grid item xs={2}>
    <Typography variant="body1" href={link} component="a">
      <FontAwesomeIcon icon={img} />
      {` ${label}`}
    </Typography>
  </Grid>
);

Link.propTypes = {
  link: PropTypes.string.isRequired,
  img: PropTypes.instanceOf(Object).isRequired,
  label: PropTypes.string.isRequired,
};

export default Link;
