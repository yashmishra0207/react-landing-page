import React, { Component } from "react";
import "./App.css";
import Navigator from "./components/Navbar";
import Slider from "./components/Corousel";

class App extends Component {
  state = {
    totalItems: "5",
    userName: "Anand",
    images: [
      "technology",
      "tech",
      "server",
      "app",
      "business",
      "virtual reality",
    ],
    services: [
      { image: "https://images.unsplash.com/photo-1553390774-b4822481c894?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=683&q=80", text: "Full-stack Development" },
      { image: "", text: "Mobile App Development" },
      { image: "", text: "Digital Marketing" },
      { image: "", text: "Product Design" }
    ],
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
          ScreenHeight={window.innerHeight / 2}
        />
      </React.Fragment>
    );
  }
}

export default App;
