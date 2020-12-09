

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
    <p>My name is Adrian Hough and I am passionate about Finance, Economics, Technology and Entrepreneurship.  I have created a range of fintech-related articles and projects which are featured on this website, focusing on topics such as Open Banking, the FX Market and Ethics.</p>
    <p><b>in-fintech.com</b> was developed using ReactJS, whilst the Projects featured on this website were developed using Python.</p>

    <br />
    <div className='about-adrian-container'>

    <br />
    <img src={AdrianPhoto} alt="Adrian" />
    <br />
    <p><b>Adrian Hough, BCom, MBA</b></p>

    <br />
    <p>I am an Australian who lives in London and I have worked in a range of roles within Financial Services.  I have delivered projects across asset classes such as Fixed Income, Derivatives, Structured Products and Commodities.  Outside of work I enjoy exploring the UK with my family and photos from our trips are featured throughout this website.</p>
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
