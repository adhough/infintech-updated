
import React from 'react';
import '../App.css';
import { Button } from './ProjectsButton';
import './SecModel.css';
import SecModel from './images/SecModel.jpeg'

function SecModelSection() {
  return (
    <div className='secmodel-container'>
    <h1>Securitisation Model</h1>
      <div className='secmodel-project-container'>

<br />
<img src={SecModel} alt="secmodel"/>
<br />
<p>This model calculates the annual Internal Rate of Returns (IRR) for a Securitisation.  This website was developed using Python, Numpy, Pandas, Flask and deployed using Heroku.
</p>
<br />
<a href="https://secmodel.herokuapp.com/" target="_blank" rel="noreferrer">https://secmodel.herokuapp.com/</a>
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

export default SecModelSection;
