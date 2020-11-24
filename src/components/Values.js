import React from 'react';
import '../App.css';
import { Button } from './ProjectsButton';
import './Values.css';
import Image2 from './images/Image2.jpeg'

function ValuesSection() {
  return (
    <div className='values-container'>
    <h1>Values</h1>
    <div className='values-text-container'>

    <br />
    <img src={Image2} alt="forest" />
    <br />

    <br />
    <h3>Innovation</h3><p>Passion for developing solutions which can improve businesses and lives.  </p>
    <br />
    <h3>Simplicity</h3><p>Search for simple solutions to help improve user understanding and to reduce risk.  </p>
    <br />
    <h3>Ethics</h3><p>Approach business with high ethical principles and actively engage in discussions about Ethics within the Fintech community.  </p>
    <br />
    <h3>Methodical Action</h3><p>Take methodical and action oriented approaches to projects.  </p>
    <br />
    <h3>Openness to Ideas</h3><p>Welcome honest exchanges and be open to different persepectives and new ideas.  </p>
    <br />
    <h3>First Principles</h3><p>Question and challenge assumptions, break down problems to essential elements and develop 'bottom-up' perspectives.  </p>
    <br />
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

export default ValuesSection;
