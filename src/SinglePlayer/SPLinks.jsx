import React from 'react';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import LinkContainer from '../Helper/LinkContainer';

const links = [
  { link: 'https://github.com/ricglz0201/Tic-Tac-Toe-HL', img: faGithubAlt, label: 'Repo' },
  { link: 'https://ricglz0201.github.io/Tic-Tac-Toe-HL/', img: faGamepad, label: 'Website' },
  { link: 'https://github.com/ricglz0201/ttt-react', img: faGithubAlt, label: 'Repo' },
  { link: 'https://ttt-hl-react.firebaseapp.com/', img: faGamepad, label: 'Website' },
];

const SPLinks = () => (
  <LinkContainer links={links} />
);

export default SPLinks;
