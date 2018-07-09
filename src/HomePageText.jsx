import React from 'react';

export const headline = "Tic Tac Toe HL";
export const subHead = "Tic Tac Toe taken to a whole new level.";
export const body1 = "This project was created with the objective of learning different technologies and methods of computer science. For example:"
const technologies = ["React", "React Native", "Ruby on Rails", "Action Cable", "Material Design", "Javascript", "Bootstrap4"]
export const listTechnologies = technologies.map((technology) =>
  <li key={technology}>
    {technology}
  </li>
);
