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
    this.chooseDie = this.chooseDie.bind(this);
  }

  rollDice(event) {
    console.log("rollDice");
  }

  chooseDie(event) {
    this.setState({
      ...this.state,
      selectedDie: event.target.id
    });
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
                <button class="w3-button w3-black">Choose a Die</button>
                <div class="w3-dropdown-content w3-bar-block w3-border">
                  <a
                    //ways to keep a function from firing before it is called
                    //this.function
                    //event => this.function(event)
                    //()=> this.function()
                    id="coin"
                    onClick={this.chooseDie}
                    class="w3-bar-item w3-button"
                  >
                    Coin
                  </a>
                  <a
                    id="d4"
                    onClick={this.chooseDie}
                    class="w3-bar-item w3-button"
                  >
                    d4
                  </a>
                  <a
                    id="d6"
                    onClick={this.chooseDie}
                    class="w3-bar-item w3-button"
                  >
                    d6
                  </a>
                  <a
                    id="d8"
                    onClick={this.chooseDie}
                    class="w3-bar-item w3-button"
                  >
                    d8
                  </a>
                  <a
                    id="d10"
                    onClick={this.chooseDie}
                    class="w3-bar-item w3-button"
                  >
                    d10
                  </a>
                  <a
                    id="d12"
                    onClick={this.chooseDie}
                    class="w3-bar-item w3-button"
                  >
                    d12
                  </a>
                  <a
                    id="d20"
                    onClick={this.chooseDie}
                    class="w3-bar-item w3-button"
                  >
                    d20
                  </a>
                  <a
                    id="percentage"
                    onClick={this.chooseDie}
                    class="w3-bar-item w3-button"
                  >
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
