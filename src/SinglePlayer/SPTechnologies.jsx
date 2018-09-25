import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import "../Technologies.css";
import Bootstrap from "../images/bootstrap_logo.svg";
import Css from "../images/css_logo.png";
import Html from "../images/html_logo.png";
import Js from "../images/js_logo.png";
import JQuery from "../images/jquery_logo.png";
import ReactImg from "../images/rn_logo.png";

export default class SPTechnologies extends React.Component {
  render() {
    return (
      <Grid container justify="center" className="technologies">
        <Grid item>
          <Chip avatar={<Avatar src={Bootstrap} />} label="Bootstrap" />
          <Chip avatar={<Avatar src={Css} />} label="CSS" />
          <Chip avatar={<Avatar src={Html} />} label="HTML" />
          <Chip avatar={<Avatar src={Js} />} label="Javascript" />
          <Chip avatar={<Avatar src={JQuery} />} label="JQuery" />
          <Chip avatar={<Avatar src={ReactImg} />} label="React" />
        </Grid>
      </Grid>
    );
  }
}
