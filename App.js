import React, { Component } from "react";
import "./App.css";
import Example from "./Example/Example";
import Example1 from "./Example2/Example2";
import Gradient from "./Gradient/Greadient";
import Home from "./Home/Home";

class App extends Component {
  state = {
    title: "Hello World",
    color1: "#000000",
    color2: "#ffffff",
    color3: "#657483"
  };

  changeTitle = newTitle => {
    this.setState({ title: newTitle });
  };

  changeColor1 = color => {
    this.setState({ color1: color });
  };

  changeColor2 = color => {
    this.setState({ color2: color });
  };
  changeColor3 = color => {
    this.setState({ color3: color });
  };
  render() {
    return (
      <div className="App">
        <Example title={this.state.title} changeTitle={this.changeTitle} />
        <Example1 title={this.state.title} changeTitle={this.changeTitle} />
        <Home
          color1={this.state.color1}
          color2={this.state.color2}
          color3={this.state.color3}
          changeColor1={this.changeColor1}
          changeColor2={this.changeColor2}
          changeColor3={this.changeColor3}
        />
      </div>
    );
  }
}

export default App;
