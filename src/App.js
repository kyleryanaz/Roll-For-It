import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      selectedDie: ""
    };

    this.rollDice = this.rollDice.bind(this);
  }

  rollDice(event) {
    alert("something happened!");
  }

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
                <button class="w3-button w3-black">Choose Dice</button>
                <div class="w3-dropdown-content w3-bar-block w3-border">
                  <a onClick="#" class="w3-bar-item w3-button">
                    Coin
                  </a>
                  <a onClick="#" class="w3-bar-item w3-button">
                    d2
                  </a>
                  <a onClick="#" class="w3-bar-item w3-button">
                    d4
                  </a>
                  <a onClick="#" class="w3-bar-item w3-button">
                    d6
                  </a>
                  <a onClick="#" class="w3-bar-item w3-button">
                    d8
                  </a>
                  <a onClick="#" class="w3-bar-item w3-button">
                    d10
                  </a>
                  <a onClick="#" class="w3-bar-item w3-button">
                    d12
                  </a>
                  <a onClick="#" class="w3-bar-item w3-button">
                    d20
                  </a>
                  <a onClick="#" class="w3-bar-item w3-button">
                    Percentage
                  </a>
                </div>
              </div>
            </div>
            <div class="w3-col m6 w3-center">
              <button class="w3-button w3-black" onClick={this.rollDice}>
                Roll
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
