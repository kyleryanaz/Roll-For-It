import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      selectedDie: "∞",
      selectedMultiplier: "∞",
      result: "∞"
    };

    this.rollDice = this.rollDice.bind(this);
    this.chooseDie = this.chooseDie.bind(this);
    this.chooseMultiplier = this.chooseMultiplier.bind(this);
    // this.coinToss = this.coinToss.bind(this);
  }

  rollDice(event) {
    switch (this.state.selectedDie) {
      case "Coin":
        let coinResult = Math.random() < 0.5 ? "Heads" : "Tails";
        this.setState({
          ...this.state,
          result: coinResult
        });
        break;
      case "Percentage":
        let percentageResult = Math.floor(Math.random() * 100) + 1;
        this.setState({
          ...this.state,
          result: percentageResult
        });
        break;
      case "d4":
      case "d6":
      case "d8":
      case "d10":
      case "d12":
      case "d20":
        let diceResult = 0;
        for (let i = 0; i < this.state.selectedMultiplier; i++) {
          diceResult =
            diceResult +
            (Math.floor(Math.random() * this.state.selectedDie.slice(1)) + 1);
        }
        this.setState({
          ...this.state,
          result: diceResult
        });
        break;
      default:
    }
  }

  chooseDie(event) {
    this.setState({
      ...this.state,
      selectedDie: event.target.id
    });
  }

  chooseMultiplier(event) {
    this.setState({
      ...this.state,
      selectedMultiplier: Number(event.target.id)
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Roll For It</h1>
        </header>
        <div className="App-toolbar">
          <div id="displayRow">
            <div class="w3-row">
              <div class="w3-col m4 w3-center">
                <h2>{this.state.selectedMultiplier}</h2>
              </div>
              <div class="w3-col m4 w3-center">
                <h2>{this.state.selectedDie}</h2>
              </div>
              <div class="w3-col m4 w3-center">
                <h2>{this.state.result}</h2>
              </div>
            </div>
          </div>

          <div class="w3-row">
            <div class="w3-col m4 w3-center">
              <div class="w3-dropdown-hover">
                <button class="w3-button w3-black">Quantity</button>
                <div class="w3-dropdown-content w3-bar-block w3-border">
                  <a
                    id="1"
                    onClick={this.chooseMultiplier}
                    class="w3-bar-item w3-button"
                  >
                    1
                  </a>
                  <a
                    id="2"
                    onClick={this.chooseMultiplier}
                    class="w3-bar-item w3-button"
                  >
                    2
                  </a>
                  <a
                    id="3"
                    onClick={this.chooseMultiplier}
                    class="w3-bar-item w3-button"
                  >
                    3
                  </a>
                  <a
                    id="4"
                    onClick={this.chooseMultiplier}
                    class="w3-bar-item w3-button"
                  >
                    4
                  </a>
                  <a
                    id="5"
                    onClick={this.chooseMultiplier}
                    class="w3-bar-item w3-button"
                  >
                    5
                  </a>
                  <a
                    id="6"
                    onClick={this.chooseMultiplier}
                    class="w3-bar-item w3-button"
                  >
                    6
                  </a>
                </div>
              </div>
            </div>
            <div class="w3-col m4 w3-center">
              <div class="w3-dropdown-hover">
                <button class="w3-button w3-black">Dice</button>
                <div class="w3-dropdown-content w3-bar-block w3-border">
                  <a
                    //ways to keep a function from firing before it is called
                    //this.function
                    //event => this.function(event)
                    //()=> this.function()
                    id="Coin"
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
                    id="Percentage"
                    onClick={this.chooseDie}
                    class="w3-bar-item w3-button"
                  >
                    Percentage
                  </a>
                </div>
              </div>
            </div>
            <div class="w3-col m4 w3-center">
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
