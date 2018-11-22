import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../Technologies.css';
import I18n from '../images/i18n_logo.png';
import Js from '../images/js_logo.png';
import Md from '../images/md_logo.png';
import Ror from '../images/ror_logo.png';
import Rubocop from '../images/rubocop_logo.png';
import ChipHelper from '../Helper/ChipHelper';

const chips = [
  { img: I18n, label: 'I18n' },
  { img: Js, label: 'Javascript' },
  { img: Md, label: 'Material design' },
  { img: Ror, label: 'Ruby on Rails' },
  { img: Rubocop, label: 'Rubocop' },
];

const MPTechnologies = () => (
  <Grid container spacing={8} justify="center" style={{ marginTop: 13 }}>
    <ChipHelper chips={chips} />
  </Grid>
);

export default MPTechnologies;
