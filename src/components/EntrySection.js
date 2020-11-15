
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './EntrySection.css';


function EntrySection() {
  return (
    <div className='entry-container'>

      <h1></h1>
      <div className='entry-btns'>
      <Button
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
      >
        ABOUT
        </Button>


      </div>
    </div>
  );
}

export default EntrySection;
