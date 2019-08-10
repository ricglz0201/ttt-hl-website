import React from 'react';
import paragraphs from './SPText';
import SPLinks from './SPLinks';
import SPCarousel from './SPCarousel';
import PageWithCarousel from '../Helper/PageWithCarousel';

const SPContent = () => (
  <PageWithCarousel
    Links={SPLinks}
    steps={SPCarousel}
    paragraphs={paragraphs}
  />
);

export default SPContent;
