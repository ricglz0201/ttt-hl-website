import React from "react";
import Grid from "@material-ui/core/Grid";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "../Content.css";
import MTechnologies from "./MTechnologies";
import MContent from "./MContent";

const theme = createMuiTheme({
  overrides: {}
});

class MPage extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Grid item xs={12}>
          <MTechnologies />
          <MContent />
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default MPage;
