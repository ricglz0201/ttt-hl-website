import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import HomePage from './HomePage'

function TabContainer(props) {
  return (
    <Grid container spacing={24} alignItems="center" className="container">
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
        color: 'grey'
      },
    },
    MuiTabs: {
      indicator: {
        backgroundColor: 'skyblue'
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
              <Tab label="Home" />
              <Tab label="Single player" />
              <Tab label="Multiplayer" />
              <Tab label="Mobile" />
              <Tab label="About me" href="#basic-tabs" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><HomePage/></TabContainer>}
          {value === 1 && <TabContainer>Item Two</TabContainer>}
          {value === 2 && <TabContainer>Item Three</TabContainer>}
          {value === 3 && <TabContainer>Item Four</TabContainer>}
          {value === 4 && <TabContainer>Item Five</TabContainer>}
        </MuiThemeProvider>
      </div>
    );
  }
}

export default ButtonAppBar;
