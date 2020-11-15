
import React from 'react';
import '../App.css';
import { Button } from './ProjectsButton';
import './Agile.css';
import Agile from './images/Agile.jpeg'

function AgileSection() {
  return (
    <div className='agile-container'>
    <h1>Agile Project Tracker</h1>
      <div className='agile-project-container'>




<br />
<img src={Agile} alt="agile"/>
<br />
<p>This tool stores and manages project Epics and Stories.  To explore the tool, enter the username ‘demo_user’ and password ‘read_only’.  Developed using Python, Django, PostgreSQL and launched using Heroku.
</p>
<br />
<a href="https://agile-project-tracker.herokuapp.com/tracker/" target="_blank" rel="noreferrer">https://agile-project-tracker.herokuapp.com/tracker/</a>
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

export default AgileSection;
