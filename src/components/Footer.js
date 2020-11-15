import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>

      <div class='footer-links'>
        <div className='footer-link-wrapper'>




      <section class='social-media'>
        <div class='social-media-wrap'>
        <small class='website-rights'>in-fintech.com © 2020</small>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>

            </Link>
          </div>

          <div class='social-icons'>

          <a class='social-icon-link email' href="mailto:adhough@in-fintech.com" target="_top">
            <i class='fas fa-envelope' />
          </a>
            <a
              class='social-icon-link linkedin'
              href="https://www.linkedin.com/in/adrian-hough-528b7b" target="_blank" rel="noreferrer">

              <i class='fab fa-linkedin' />
            </a>

            <a
              class='social-icon-link twitter'
              href="https://twitter.com/@adhough_London"
              target="_blank"
              rel="noreferrer"
            >
              <i class='fab fa-twitter' />
            </a>
          </div>
        </div>
      </section>
    </div>
    </div>
    </div>

  );
}

export default Footer;
