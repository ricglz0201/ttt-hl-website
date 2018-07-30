import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import '../Technologies.css'
import I18n from '../images/i18n_logo.png'
import Js from '../images/js_logo.png'
import Md from '../images/md_logo.png'
import Ror from '../images/ror_logo.png'

export default class MPTechnologies extends React.Component {
  render() {
    return (
      <Grid container justify='center' className='technologies'>
        <Grid item>
          <Chip
            avatar={<Avatar src={I18n} />}
            label="I18n"
          />
          <Chip
            avatar={<Avatar src={Js} />}
            label="Javascript"
          />
          <Chip
            avatar={<Avatar src={Md} />}
            label="Material design"
          />
          <Chip
            avatar={<Avatar src={Ror} />}
            label="Ruby on Rails"
          />
        </Grid>
      </Grid>
    );
  }
}
