import React from 'react';
import paragraphs from './MPText';
import MPLinks from './MPLinks';
import MPCarousel from './MPCarousel';
import PageWithCarousel from '../Helper/PageWithCarousel';

const MPContent = () => (
  <PageWithCarousel
    Links={MPLinks}
    steps={MPCarousel}
    paragraphs={paragraphs}
  />
);

export default MPContent;
