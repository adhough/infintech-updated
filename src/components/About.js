

import React from 'react';
import '../App.css';
import { Button } from './ValuesButton';
import './About.css';
import AdrianPhoto from './images/Adrian_2.jpeg'

function AboutSection() {
  return (
    <div className='about-container'>

    <h1>About</h1>



    <div className='about-text-container'>
    <p><b>in-fintech.com</b> is passionate about Finance, Economics, Technology and Entrepreneurship.  My name is Adrian Hough and I have created a range of fintech-related articles and projects, focusing on topics such as Open Banking, the FX Market and Ethics.</p>

    <br />
    <div className='about-adrian-container'>

    <br />
    <img src={AdrianPhoto} alt="Adrian" />
    <br />
    <p><b>Adrian Hough, BCom, MBA</b></p>

    <br />
    <p>I am an Australian who lives in London and I have worked in a range of roles within Financial Services.  I have also implemented Risk and Financial Management projects across asset classes such as Fixed Income, Derivatives, Structured Products and Commodities.</p>
    <br />
    </div>
    </div>

    <div className='about-btns'>
    <Button
      className='btns'
      buttonStyle='btn--outline'
      buttonSize='btn--large'
    >
      VALUES
      </Button>



    </div>
    </div>


  );
}

export default AboutSection;
