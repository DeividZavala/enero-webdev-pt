import React from 'react';
import Router from './Router';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="uk-navbar-container" uk-navbar="true">
          <div className="uk-navbar-left">

              <ul className="uk-navbar-nav">
                  <li className="uk-active"><a href="#">Active</a></li>
                  <li>
                      <a href="#">Parent</a>
                      <div className="uk-navbar-dropdown">
                          <ul className="uk-nav uk-navbar-dropdown-nav">
                              <li className="uk-active"><a href="#">Active</a></li>
                              <li><a href="#">Item</a></li>
                              <li><a href="#">Item</a></li>
                          </ul>
                      </div>
                  </li>
                  <li><a href="#">Item</a></li>
              </ul>

          </div>
      </nav>
      <Router/>
    </div>
  );
}

export default App;
