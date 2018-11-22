import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Link from './Link';

const LinkContainer = ({ links }) => (
  <Grid container justify="center">
    {links.map(({ link, img, label }) => (
      <Link key={link} link={link} href={link} img={img} label={label} />
    ))}
  </Grid>
);

LinkContainer.propTypes = {
  links: PropTypes.instanceOf(Array).isRequired,
};

export default LinkContainer;
