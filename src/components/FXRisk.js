

import React from 'react';
import '../App.css';
import { Button } from './ProjectsButton';
import './FXRisk.css';
import FXModel from './images/FXModel.jpeg'

function FXRiskSection() {
  return (
    <div className='fxrisk-container'>
    <h1>FX Risk Model</h1>
      <div className='fxrisk-project-container'>



<br />
<img src={FXModel} alt="fx"/>
<br />
<p>This model calculates the one day Value at Risk (VaR) for a range of currencies.  This website was developed using Python, Flask, Numpy, Pandas and deployed using Heroku.
</p>
<br />
<a href="https://fxriskmodel.herokuapp.com/" target="_blank" rel="noreferrer">https://fxriskmodel.herokuapp.com/</a>
<br />
<h3>(First released September 2020)</h3>
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

export default FXRiskSection;
