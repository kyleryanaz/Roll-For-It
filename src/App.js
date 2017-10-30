import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      selectedDie: "",
      result: ""
    };

    this.rollDice = this.rollDice.bind(this);
    this.chooseDie = this.chooseDie.bind(this);
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
      case "d4":
        let d4Result = Math.floor(Math.random() * 4) + 1;
        this.setState({
          ...this.state,
          result: d4Result
        });
        break;
      case "d6":
        let d6Result = Math.floor(Math.random() * 6) + 1;
        this.setState({
          ...this.state,
          result: d6Result
        });
        break;
      case "d8":
        let d8Result = Math.floor(Math.random() * 8) + 1;
        this.setState({
          ...this.state,
          result: d8Result
        });
        break;
      case "d10":
        let d10Result = Math.floor(Math.random() * 10) + 1;
        this.setState({
          ...this.state,
          result: d10Result
        });
        break;
      case "d12":
        let d12Result = Math.floor(Math.random() * 12) + 1;
        this.setState({
          ...this.state,
          result: d12Result
        });
        break;
      case "d20":
        let d20Result = Math.floor(Math.random() * 20) + 1;
        this.setState({
          ...this.state,
          result: d20Result
        });
        break;
      case "Percentage":
        let percentageResult = Math.floor(Math.random() * 100) + 1;
        this.setState({
          ...this.state,
          result: percentageResult
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Roll For It</h1>
        </header>
        <div className="App-toolbar">
          <div class="w3-row">
            <div class="w3-col m4 w3-center">
              <div class="w3-dropdown-hover">
                <button class="w3-button w3-black">Choose a Die</button>
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
              <div id="dieDisplay">
                <h2>{this.state.selectedDie}</h2>
              </div>
            </div>
            <div class="w3-col m4 w3-center">
              <button class="w3-button w3-black" onClick={this.rollDice}>
                Roll
              </button>
            </div>
          </div>
        </div>
        <br />
        <h2>{this.state.result}</h2>
      </div>
    );
  }
}

export default App;
