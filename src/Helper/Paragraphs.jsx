import React from 'react';
import Typography from '@material-ui/core/Typography';

const Paragraphs = ({ paragraphs }) => (
  paragraphs.map(paragraph => (
    <Typography key={paragraph} variant="body1" component="p">
      {paragraph}
    </Typography>
  ))
);

export default Paragraphs;
