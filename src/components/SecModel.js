
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
<p>This Securitisation model calculates cash flows and the annual Internal Rate of Returns (IRR) for an Asset Portfolio, Senior Bond (90% of Asset Portfolio) and Subordinated Loan (10% of Asset Portfolio). The Maturity is set at 30 years and Repayments are pro-rata and monthly.

This model includes an annual 1% fee calculated monthly on the Asset Portfolio balance and a Reserve Fund (1% of the original Asset Portfolio).

Recovery of Defaulted assets is set at 50% and is recognised in the same month as the default. The user sets the Amount of the Asset Portfolio, fixed coupons of the Assets, Senior Bond and Subordindated Loan and Prepayment and Default amounts.
This website was developed using Python, Numpy, Pandas, Flask and deployed using Heroku.
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
