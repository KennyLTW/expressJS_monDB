import React, { useState } from "react";
import './App.css';
import Header from './views/Header';
import Left from './views/Left';

import Inbox from "./views/Inbox";
import Starred from "./views/Starred";
import SendEmail from "./views/SendEmail";
import Drafts from "./views/Drafts";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RouterController from './Router/Router';

  /*
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

function App() {

  const [appCount, setAppCount] = useState(0);

  const buttonClick = () => {
    setAppCount(appCount + 1);
    console.log("buttonClick: " + appCount);
  };

  return (
    <Router>
      <div className="App">
        <Header count={appCount} buttonClick={buttonClick} />
        <Left count={appCount} buttonClick={buttonClick} />
        <RouterController/>

{/*
        <Routes>
            <Route path='/inbox' element={<Inbox />} />
            <Route path='/starred' element={<Starred />} />
            <Route path='/send_email' element={<SendEmail />} />
            <Route path='/drafts' element={<Drafts />} />
        </Routes>
*/}
      </div>
    </Router>

    /*
    <BrowserRouter>
      <div style={{ padding: "0px" }}>
        <Header count={appCount} buttonClick={buttonClick} />
        <Left count={appCount} buttonClick={buttonClick} />
        <Home />
      </div>
    </BrowserRouter>
  */
  );
}

export default App;
