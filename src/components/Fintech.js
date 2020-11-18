

import React from 'react';
import '../App.css';
import { Button } from './ArticlesButton';
import './Fintech.css';
import  Presentation from './images/Presentation_2.jpg'

function FintechSection() {
  return (
    <div className='fintech-container'>
    <div className='project-btns'>
    <Button
      className='btns'
      buttonStyle='btn--outline'
      buttonSize='btn--large'
    >
      ARTICLES
      </Button>

      </div>
    <img src={Presentation} alt="presentation"></img>
      <div className='fin-article-container'>

<h1>Career Change : From Investment Banking to Fintech</h1>
<h3>(First published June 2020)</h3>
<br />
<p>I want to work in Fintech to improve the quality of Risk and Financial Management, increase the range, effectiveness and availability of Financial Products and help to make working in Financial Services a more interesting and enjoyable experience. I left my role in Investment Banking in August 2019 to pursue a career in Fintech having worked in the City of London for almost two decades. It was a bold move. For anyone considering a similar career move, this article is an honest accountof my experiences so far and I hope it provides useful information.
</p>
<br />

<p>Firstly, a quick summary of my background. I have worked in a range of Financial Services roles (Finance, Risk and Projects) and asset classes (Derivatives, Fixed Income and Commodities). The roles which I enjoyed the most involved delivering Change. I love the challenge of designing and delivering user-friendly and robust solutions which meet the needs of the business. Earlier in my career I dealt with IT systems which were slow, error-prone and required work-arounds (and sometimes work-arounds for work-arounds). One of the major causes of the 2008 Global Financial Crisis was the impact of poor-quality data on decision-making. Delivering projects to enable more accurate Risk and Financial management is very motivating for me. It also feels great when I hear that software or models which I was involved in delivering years ago, are still working well.
</p>
<br />
<p>
The biggest challenge when starting out is to not get overwhelmed by the amount of information available on Fintech via articles, blogs, podcasts, conferences etc. A lot of this information has little useful content for those starting out. The first step I took to get an overview of the Fintech sector was to take the ‘Around Fintech’ and ‘Artificial Intelligence in Finance’ online courses with the Centre for Finance, Technology and Entrepreneurship (CFTE). These courses have excellent content from academics and professionals working across the sector and they helped me to decide which areas within Fintech I wanted to focus on in the future. CFTE also organises regular events and seminars where it is possible to meet and network with other professionals working in Fintech.
</p>
<br />
<p>
At the end of 2019, I participated in the CFTE ‘Extrapreneurship’ course which involved teams around the world competing to deliver the best business plan for the UK-based Onfido’s expansion plans for Asia. Other Fintech firms which have been involved in this course previously include Neat and Revolut. The aim of the course is to simulate the experience of working in a start-up and to train students to develop a more entrepreneurial mindset. I really enjoyed working with my UK-based team to quickly grasp Onfido’s business model and research which countries and industries they should focus on for their future growth. We then developed a business plan, pitch deck and video presentation with our recommendations. Our team won the competition and Onfido confirmed that they would implement our recommendations.
</p>
<br />
<p>
I am fascinated by the potential of AI to transform Financial Services and keen to learn about the models in more depth, so earlier this year I completed the ‘Stanford University Machine Learning’ course run by ‘Coursera’. I also wanted to strengthen my coding skills and I undertook the online Codeacademy ‘Data Science’ course and read a variety of text books. I found the O’Reilly ‘Head First’ series really useful for learning a computer language’s key concepts before moving onto more in-depth text books.
</p>
<br />
<p>
The most effective way of learning computer languages and frameworks is to start building projects as quickly as possible. Analysing which solutions are optimal for developing your projects and resolving defects helps to make the intricacies of languages and frameworks clearer (during my career in Banking I became proficient at Excel and VBA as a result of building many models for testing, reconciling and reporting Risk and Financial data). Over the last few months I have been building websites using Python, Docker containers, and PostgreSQL databases. I have been using the Django framework for these projects due to it being secure, easy to set up database tables via models and great for learning how the back-end (underlying database and logic) through to the front-end (user-interface using HTML, CSS and JavaScript) components work for websites. I found the ‘Django for Beginners’ textbook by William S Vincent an excellent starting point. I have launched my projects using Heroku which is a platform as a service (PaaS) and it is free for developers starting out.
</p>
<br />
<p>
The first website I built was <a href="https://agile-project-tracker.herokuapp.com/tracker/" target="_blank" rel="noreferrer">https://agile-project-tracker.herokuapp.com/tracker/</a> (enter username ‘demo_user’ and password ‘read_only’ to view) which allows me to track, manage and prioritise my Projects and Tasks (or Epics and Stories). I use this website to manage my projects using Agile project management methodologies.
</p>
<br />
<p>
For my next project I remembered from working in the Loans Market that there are no free resources on the internet for users in the Loan Market to calculate the Average One Month Libor rate and Cost of Carry. I built a simple website (<a href="https://avglibor.herokuapp.com/estimator/"target="_blank" rel="noreferrer">https://avglibor.herokuapp.com/estimator/</a>) which allows users to select a date range, loan amount and loan price and it applies calculations on Libor data stored in the database and returns the results to the user. It would be helpful to get more feedback from users to help refine the algorithm used in this website. If it is useful, I would be keen to improve the User Interface, increase the range of dates available (currently from 1st January 2019 to the present date) and also to extend to other currencies (presently just USD).

</p>
<br />
<p>
I aim to keep challenging myself to learn new Python concepts and to continue increasing the complexity of the problems I am trying to solve. I built a Securitisation website (<a href="https://secmodel.herokuapp.com/"target="_blank" rel="noreferrer">https://secmodel.herokuapp.com/</a>) using Flask, Python and Postgresql which enables users to change inputs such as coupons, prepayment rates, default rates and loss-given-default rates and then compare the impact on projected cash flows.
I also built a FX Risk Model (<a href="https://fxriskmodel.herokuapp.com/"target="_blank" rel="noreferrer">https://fxriskmodel.herokuapp.com/</a>) which calculates the one day Value at Risk (VaR) for a UK-based investor’s portfolio of assets held in currencies such as Australian Dollars (AUD), Canadian Dollars (CAD), Swiss Francs (CHF), Euros (EUR), Japanese Yen (JPY), New Zealand Dollars (NZD) and US Dollars (USD). In the near-future I also want to build projects using Artificial Intelligence models, develop REST APIs (representational state transfer application program interface) and learn more about JavaScript libraries (such as ReactJS) to develop user interfaces which look more professional.
  </p>
  <br />
  <p>

Along with everyone reading this article, my family and I have been adversely impacted by Coronavirus. It has been a shock to Fintech Sector and the wider economy and it has been a challenge juggling job-hunting and training whilst supporting my two Primary School aged sons during this unique period. But I am determined to be proactive in developing my skills and learning about a sector which I believe will revolutionise our way of life in the coming decades. For anyone looking to make a similar career change, I sincerely hope that this article has had useful tips and I wish you best of luck.</p>
    </div>

    <div className='project-btns'>
    <Button
      className='btns'
      buttonStyle='btn--outline'
      buttonSize='btn--large'
    >
      ARTICLES
      </Button>

      </div>

      </div>
  );
}

export default FintechSection;
