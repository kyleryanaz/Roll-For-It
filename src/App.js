import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Roll For It</h1>
        </header>
        <div className="App-toolbar">
          <div class="w3-row">
            <div class="w3-col m6 w3-center">
              <div class="w3-dropdown-hover">
                <button class="w3-button w3-black">Hover Over Me!</button>
                <div class="w3-dropdown-content w3-bar-block w3-border">
                  <a href="#" class="w3-bar-item w3-button">
                    Link 1
                  </a>
                  <a href="#" class="w3-bar-item w3-button">
                    Link 2
                  </a>
                  <a href="#" class="w3-bar-item w3-button">
                    Link 3
                  </a>
                </div>
              </div>
            </div>
            <div class="w3-col m6 w3-center">
              <button class="w3-button w3-black">Button Button</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
