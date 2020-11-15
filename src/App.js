
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Homepage from './components/pages/Homepage';
import About from './components/About';
import Agile from './components/Agile';
import AvgLibor from './components/AvgLibor';
import Values from './components/Values';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Fintech from './components/Fintech';
import OpenBanking from './components/OpenBanking';
import FXMarket from './components/FXMarket';
import FXRisk from './components/FXRisk';
import Ethics from './components/Ethics';
import SecModel from './components/SecModel';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/about' component={About} />
          <Route path='/agile' component={Agile} />
          <Route path='/avglibor' component={AvgLibor} />
          <Route path='/values' component={Values} />
          <Route path='/projects' component={Projects} />
          <Route path='/articles' component={Articles} />
          <Route path='/contact' component={Contact} />
          <Route path='/fintech' component={Fintech} />
          <Route path='/openbanking' component={OpenBanking} />
          <Route path='/fxmarket' component={FXMarket} />
          <Route path='/fxrisk' component={FXRisk} />
          <Route path='/ethics' component={Ethics} />
          <Route path='/secmodel' component={SecModel} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
