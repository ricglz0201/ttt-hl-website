import React from 'react';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import LinkContainer from '../Helper/LinkContainer';

const links = [
  { link: 'https://github.com/ricglz0201/TTT-HL-MP', img: faGithubAlt, label: 'Repo' },
];

const MPLinks = () => (
  <LinkContainer links={links} />
);

export default MPLinks;
