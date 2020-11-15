
import React from 'react';
import '../App.css';
import './Projects.css';
import CardItem from './CardItem';
import { Button } from './ArticlesButton';

function ProjectSection() {
  return (
  <div className='cards'>
  <div className='project-container'>
  <h1>Projects</h1>
  <div className='cards__wrapper'>
    <ul className='cards__items'>
      <CardItem
        src='./images/Agile.jpeg'
        text='Agile Project Tracker'
        label='Agile'
        path='/agile'
      />
      <CardItem
        src='./images/Libor.jpeg'
        text='Average Libor Estimator'
        label='Libor'
        path='/avglibor'
      />
      </ul>
      <ul className='cards__items'>
      <CardItem
        src='./images/SecModel.jpeg'
        text='Securitisation Model'
        label='Securitisation'
        path='/secmodel'
      />
      <CardItem
        src='./images/FXModel.jpeg'
        text='FX Risk Model'
        label='FX Risk'
        path='/fxrisk'
      />

    </ul>
  </div>
  <div className='project-btns'>
  <Button
    className='btns'
    buttonStyle='btn--outline'
    buttonSize='btn--large'
  >
    ARTICLES
    </Button>

    </div>
  </div>

  </div>

);
}
export default ProjectSection;
