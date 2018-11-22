import React from 'react';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import LinkContainer from '../Helper/LinkContainer';

const links = [
  { link: 'https://github.com/ricglz0201/ttt-mobile', img: faGithubAlt, label: 'Repo' },
];

const MLinks = () => (
  <LinkContainer links={links} />
);

export default MLinks;
