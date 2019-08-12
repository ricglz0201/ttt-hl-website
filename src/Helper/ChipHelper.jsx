import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import '../Technologies.css';

const ChipHelper = ({ chips }) => (
  chips.map(({ img, label }) => (
    <Chip key={img} avatar={<Avatar src={img} />} label={label} />
  ))
);

export default ChipHelper;
