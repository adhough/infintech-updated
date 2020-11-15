
import React from 'react';
import '../App.css';
import { Button } from './ContactButton';
import './Articles.css';
import CardItem from './CardItem';

function ArticleSection() {
  return (
    <div className='cards'>

      <div className='article-container'>
      <h1>Articles</h1>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/Presentation.jpg'
              text='Career Change : From Investment Banking to Fintech'
              label='Fintech'
              path='/fintech'
            />
            <CardItem
              src='/images/London.jpg'
              text='What is Open Banking?'
              label='Open Banking'
              path='/openbanking'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src='/images/FXMarket.jpeg'
              text='Foreign Exchange: Background and Opportunities'
              label='Foreign Exchange'
              path='/fxmarket'
            />
            <CardItem
              src='/images/Ethics.jpeg'
              text='Values and Ethics in Fintech'
              label='Ethics'
              path='/ethics'
            />

          </ul>
        </div>
        <div className='project-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          CONTACT
          </Button>

          </div>
      </div>
    </div>
  );
}


export default ArticleSection;
