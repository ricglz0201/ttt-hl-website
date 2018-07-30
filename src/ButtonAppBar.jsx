import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import HomePage from './Home/HomePage';
import SPPage from './SinglePlayer/SPPage';
import MPPage from './Multiplayer/MPPage';
import MPage from './Mobile/MPage';

function TabContainer(props) {
  return (
    <Grid container spacing={24} className="container">
      {props.children}
    </Grid>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: 'white',
        color: '#B2956B'
      },
    },
    MuiTabs: {
      indicator: {
        backgroundColor: '#E6F5FF'
      }
    }
  }
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
              <Tab label="About me" href="#About" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><HomePage/></TabContainer>}
          {value === 1 && <TabContainer><SPPage/></TabContainer>}
          {value === 2 && <TabContainer><MPPage/></TabContainer>}
          {value === 3 && <TabContainer><MPage/></TabContainer>}
          {value === 4 && <TabContainer>Item Five</TabContainer>}
        </MuiThemeProvider>
      </div>
    );
  }
}

export default ButtonAppBar;
