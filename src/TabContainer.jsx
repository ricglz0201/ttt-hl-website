import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const TabContainer = ({ children }) => (
  <Grid container spacing={24} className="container">
    {children}
  </Grid>
);

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabContainer;
