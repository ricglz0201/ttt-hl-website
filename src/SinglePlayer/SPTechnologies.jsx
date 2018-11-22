import React from 'react';
import Grid from '@material-ui/core/Grid';
import Bootstrap from '../images/bootstrap_logo.svg';
import Css from '../images/css_logo.png';
import Html from '../images/html_logo.png';
import Js from '../images/js_logo.png';
import JQuery from '../images/jquery_logo.png';
import ReactImg from '../images/rn_logo.png';
import ChipHelper from '../Helper/ChipHelper';

const chips = [
  { img: Bootstrap, label: 'Bootstrap' },
  { img: Css, label: 'CSS' },
  { img: Html, label: 'HTML' },
  { img: Js, label: 'Javascript' },
  { img: JQuery, label: 'JQuery' },
  { img: ReactImg, label: 'React' },
];

const SPTechnologies = () => (
  <Grid container justify="center" className="technologies">
    <Grid item>
      <ChipHelper chips={chips} />
    </Grid>
  </Grid>
);

export default SPTechnologies;
