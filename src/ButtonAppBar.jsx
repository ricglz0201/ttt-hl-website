import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
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

class ButtonAppBar extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <AppBar position="static">
            <Tabs value={value} onChange={this.handleChange} centered>
              <Tab label="Home" href="#" />
              <Tab label="Single player" href="#SinglePlayer" />
              <Tab label="Multiplayer" href="#MultiPlayer" />
              <Tab label="Mobile" href="#Mobile" />
            </Tabs>
          </AppBar>
          <TabContainer>
            {value === 0 && (
              <HomePage />
            )}
            {value === 1 && (
              <SPPage />
            )}
            {value === 2 && (
              <MPPage />
            )}
            {value === 3 && (
              <MPage />
            )}
          </TabContainer>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default ButtonAppBar;
