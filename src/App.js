import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Topic from './Topic/Topic';
import Mostrecent from './Mostrecent/Mostrecent';
import Expandedqns from './Expandedqns';
import Practisesimilar from './Practisesimilar';
import Signinpage from './Signinpage';
import Dashboard from './Dashboard';
import QuestionPage from './QuestionPage';
import SignupPage from './SignupPage';
import SignupPage2 from './SignupPage2';
import SignupPage3 from './SignupPage3';
import SignupPage4 from './SignupPage4';
import Reviewpagebutton from './Reviewpagebutton';
import './Reviewpagebutton.css';
import Dropdown from './Dropdown';
import { useState } from 'react';

export default function App() {
  const [selected, setSelected] = useState("");
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Signinpage />
            </Route>
            <Route path="/SignupPage">
              <SignupPage selected={selected} setSelected={setSelected}/>
            </Route>
            <Route path="/SignupPage2">
              <SignupPage2 />
            </Route>
            <Route path="/SignupPage3">
              <SignupPage3 />
            </Route>
            <Route path="/SignupPage4">
              <SignupPage4 />
            </Route>
            <Route path="/Dashboard">
              <Dashboard />
            </Route>
            <Route path="/QuestionPage">
              <QuestionPage />
            </Route>
            <Route exact path="/Topic">
              <Topic />
            </Route>
            <Route path="/Mostrecent">
              <Mostrecent />
              <Reviewpagebutton/>
            </Route>
            <Route path="/Expandedqns">
              <Expandedqns />
              <Reviewpagebutton/>
            </Route>
            <Route path="/Practisesimilar">
              <Practisesimilar />
            </Route>
            <Route path="/Dropdown">
              <Dropdown selected={selected} setSelected={setSelected}/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}