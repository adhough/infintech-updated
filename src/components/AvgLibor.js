
import React from 'react';
import '../App.css';
import { Button } from './ProjectsButton';
import './AvgLibor.css';
import Libor from './images/Libor.jpeg'

function AvgLiborSection() {
  return (
    <div className='avglibor-container'>
    <h1>Average Libor Estimator</h1>
      <div className='avglibor-project-container'>

<br />
<img src={Libor} alt="libor"/>
<br />
<p>This tool estimates Average One Month US Libor and Cost of Carry after the user selects a start and end date.  This website was developed using Python, Django, PostgreSQL and launched using Heroku.
</p>
<br />
<a href="https://avglibor.herokuapp.com/estimator/" target="_blank" rel="noreferrer">https://avglibor.herokuapp.com/estimator/</a>
<br />
<h3>(First released March 2020)</h3>
    </div>

    <div className='values-btns'>
    <Button
      className='btns'
      buttonStyle='btn--outline'
      buttonSize='btn--large'
    >
      PROJECTS
      </Button>

      </div>
      </div>
  );
}

export default AvgLiborSection;
