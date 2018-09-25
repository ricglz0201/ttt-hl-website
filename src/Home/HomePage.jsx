import React from "react";
import Grid from "@material-ui/core/Grid";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ClicketyClack from "react-clicketyclack";
import "../Content.css";
import { headline, subHead } from "./HomePageText";

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      display3: {
        color: "#7D9DB2"
      },
      display1: {
        color: "#7D9DB2"
      }
    }
  }
});

class HomePage extends React.Component {
  render() {
    const line = [subHead];
    return (
      <MuiThemeProvider theme={theme}>
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <Typography
              variant="display3"
              align="center"
              className="title"
              component="h2"
            >
              {headline}
            </Typography>
            <Typography
              variant="display1"
              align="center"
              className="title"
              component="p"
            >
              Tic Tac Toe taken to a{" "}
              <ClicketyClack
                lines={line}
                erase="true"
                repeat="true"
                style={{ color: "#FF9A16" }}
              />
              <span style={{ color: "#FF9A16" }}>|</span>
            </Typography>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default HomePage;
