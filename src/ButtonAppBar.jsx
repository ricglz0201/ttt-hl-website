import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import HomePage from './Home/HomePage';
import SPPage from './SinglePlayer/SPPage';
import MPPage from './Multiplayer/MPPage';
import MPage from './Mobile/MPage';
import TabContainer from './TabContainer';

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: 'white',
        color: '#B2956B',
      },
    },
    MuiTabs: {
      indicator: {
        backgroundColor: '#E6F5FF',
      },
    },
  },
});

function ContainedComponent({ index }) {
  switch (index) {
    case 0:
      return <HomePage />;
    case 1:
      return <SPPage />;
    case 2:
      return <MPPage />;
    case 3:
      return <MPage />;
    default:
      return null;
  }
}

ContainedComponent.propTypes = {
  index: PropTypes.number.isRequired,
};

function ButtonAppBar() {
  const [index, setIndex] = React.useState(0);

  const handleChange = React.useCallback((_, newIndex) => {
    setIndex(newIndex);
  }, []);

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <AppBar position="static">
          <Tabs value={index} onChange={handleChange} centered>
            <Tab label="Home" href="#" />
            <Tab label="Single player" href="#SinglePlayer" />
            <Tab label="Multiplayer" href="#MultiPlayer" />
            <Tab label="Mobile" href="#Mobile" />
          </Tabs>
        </AppBar>
        <TabContainer>
          <ContainedComponent index={index} />
        </TabContainer>
      </MuiThemeProvider>
    </div>
  );
}

export default ButtonAppBar;
