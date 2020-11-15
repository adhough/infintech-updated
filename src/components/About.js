

import React from 'react';
import '../App.css';
import { Button } from './ValuesButton';
import './About.css';
import AdrianPhoto from './images/Adrian.png'

function AboutSection() {
  return (
    <div className='about-container'>

    <h1>About</h1>



    <div className='about-text-container'>
    <p><b>in-fintech.com</b> is passionate about Finance, Economics, Technology and Entrepreneurship - this website shares articles and projects in-fintech!</p>

    <br />
    <div className='about-adrian-container'>

    <br />
    <img src={AdrianPhoto} alt="Adrian" />
    <br />
    <p><b>Adrian Hough, BCom, MBA</b></p>

    <br />
    <p>Finance and Technology professional who scopes, designs and delivers change management programmes across a diverse range of asset classes. Successful track record in implementing Risk and Financial Management process improvements, positively impacting businesses with multi-billion risk exposure in a constantly changing regulatory environment.</p>
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
