
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Contact.css';
import Image16 from './images/Image16.jpeg'

function ContactSection() {
  return (
    <div className='contact-container'>
    <h1>Contact</h1>
    <br />
      <div className='contact-text-container'>
      <br />
      <img src={Image16} alt="pine" />
      <br />
      <p>Please send feedback on projects and articles.  Also contact 'in-fintech.com' for project proposals.</p>

      <br />
      <br />
      <a class='social-icon-contactlink email' href="mailto:adhough@in-fintech.com" target="_top">
        <i class='fas fa-envelope' />
      </a>
      <p><a href="mailto:adhough@in-fintech.com" target="_top">  adhough@in-fintech.com </a></p>
      <br />
      <br />
      <a
        class='social-icon-contactlink linkedin'
        href="https://www.linkedin.com/in/adrian-hough-528b7b" target="_blank" rel="noreferrer">

        <i class='fab fa-linkedin' />
      </a><p><a href="https://www.linkedin.com/in/adrian-hough-528b7b" target="_blank" rel="noreferrer">www.linkedin.com/in/adrian-hough-528b7b</a></p>
      <br />
      <br />
      <a
        class='social-icon-contactlink twitter'
        href="https://twitter.com/@adhough_London"
        target="_blank"
        rel="noreferrer"
      >
        <i class='fab fa-twitter' />
        </a><p><a href="https://twitter.com/@adhough_London"
        target="_blank" rel="noreferrer">@adhough_London</a>
      </p>
      <br />

    </div>
    <br />
    <Button
      className='btns'
      buttonStyle='btn--outline'
      buttonSize='btn--large'
    >
      ABOUT
      </Button>
    </div>
  );
}

export default ContactSection;
