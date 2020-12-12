

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
    <p>My name is Adrian Hough and I am passionate about Finance, Economics, Technology and Entrepreneurship.  This website features a range of fintech-related articles and projects, focusing on topics such as Open Banking, the FX Market and Ethics.  It was been developed using ReactJS, whilst the featured projects were developed using Python.</p>

    <br />
    <div className='about-adrian-container'>

    <br />
    <img src={AdrianPhoto} alt="Adrian" />
    <br />
    <p><b>Adrian Hough, BCom, MBA</b></p>

    <br />
    <p>I was born in Australia but I have lived in London for the past 20 years.   I have worked in a range of roles within Financial Services and have delivered projects across asset classes such as Fixed Income, Derivatives, Structured Products and Commodities.  Outside of work I enjoy exploring the UK with my family and photos from these trips are featured throughout the website.</p>
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
