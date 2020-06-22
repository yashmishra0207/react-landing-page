import React, { Component } from "react";
import "./App.css";
import Navigator from "./components/Navbar";
import Corousel from "./components/carousel";

class App extends Component {
  state = {
    totalItems: "5",
    userName: "Anand",
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight/2,
  };

  render() {
    return (
      <React.Fragment>
        <Navigator
          TotalItems={this.state.totalItems}
          UserName={this.state.userName}
        />
        <Corousel
          ScreenWidth={this.state.screenWidth}
          ScreenHeight={this.state.screenHeight}
        />
      </React.Fragment>
    );
  }
}

export default App;
