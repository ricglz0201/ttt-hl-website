import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import "../Technologies.css";
import I18n from "../images/i18n_logo.png";
import Js from "../images/js_logo.png";
import Md from "../images/md_logo.png";
import Ror from "../images/ror_logo.png";
import Rubocop from "../images/rubocop_logo.png";

export default class MPTechnologies extends React.Component {
  render() {
    return (
      <Grid container spacing={8} justify="center" style={{ marginTop: 13 }}>
        <Grid item>
          <Chip avatar={<Avatar src={I18n} />} label="I18n" />
        </Grid>
        <Grid item>
          <Chip avatar={<Avatar src={Js} />} label="Javascript" />
        </Grid>
        <Grid item>
          <Chip avatar={<Avatar src={Md} />} label="Material design" />
        </Grid>
        <Grid item>
          <Chip avatar={<Avatar src={Ror} />} label="Ruby on Rails" />
        </Grid>
        <Grid item>
          <Chip avatar={<Avatar src={Rubocop} />} label="Rubocop" />
        </Grid>
      </Grid>
    );
  }
}
