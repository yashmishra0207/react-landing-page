import React, { Component } from "react";
import "./App.css";
import Navigator from "./components/Navbar";
import Slider from "./components/Corousel";

class App extends Component {
  state = {
    totalItems: "5",
    userName: "Anand",
    images: [
      'technology', 'tech', 'server'
    ]
  };

  render() {
    return (
      <React.Fragment>
        <Navigator
          TotalItems={this.state.totalItems}
          UserName={this.state.userName}
        />
        <Slider
          images={this.state.images}
          ScreenWidth={window.innerWidth}
          ScreenHeight={window.innerHeight/2}
        />
      </React.Fragment>
    );
  }
}

export default App;
