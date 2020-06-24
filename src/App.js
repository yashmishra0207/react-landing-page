import React, { Component } from "react";
import "./App.css";
import Navigator from "./components/Navbar";
import Slider from "./components/Corousel";
import Categories from "./components/Categories";

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
    categories: [
      {
        icon: "fa fa-globe",
        image:
          "https://images.unsplash.com/photo-1553390774-b4822481c894?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=683&q=80",
        theme: "#651FFF",
        title: "Full-stack Development",
        desc:
          "Our expertise in Agile web development and major key concepts like Responsive Design, Progressive Web Apps, and Tremendous hold on Javascript frameworks (Nodejs & Express for Backend) and (React, Vue, Angular for Frontend) enables us to build a custom, enterprise-grade solution to meet every need of every customer",
      },
      {
        icon: "fa fa-android",
        image:
          "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        theme: "rgb(20, 182, 101)",
          title: "Mobile App Development",
        desc:
          "Enterprise-grade, custom app development across multiple platforms. From e-commerce apps to Live streaming apps, we cover them all. Our expertise in flutter and react-native helps us deliver the fastest apps that never break. We cover Android and Ios Development along with Backend Engineering and App store optimization.",
      },
      {
        icon: "fa fa-users",
        image:
          "https://images.unsplash.com/photo-1571677246347-5040036b95cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        theme: "rgb(255,165,15)",
        title: "Digital Marketing",
        desc:
          "A successful digital product doesn’t end with launch. You need users to find it, use it, and love it. We are experts in Agile and Insight-driven Marketing. We work with you to create high quality, efficient and effective strategies that will result in conversion, retention, and acquisition. We provide marketing automation as well.",
      },
      {
        icon: "fa fa-paint-brush",
        image:
          "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        theme: "#D500F9",
        title: "Product Design",
        desc:
          "Our customer-centric approach where our Visual UI is supported by UX strategy achieves best in Industry results that are not only visually appealing but also uniquely express your brand and drive customer engagement. Putting your customers at the heart of the design process results in products they will turn into again and again.",
      },
      {
        icon: "fa fa-cloud",
        image:
          "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        theme: "rgb(0,128,255)",
        title: "Cloud Computing",
        desc:
          "Our customer-centric approach where our Visual UI is supported by UX strategy achieves best in Industry results that are not only visually appealing but also uniquely express your brand and drive customer engagement. Putting your customers at the heart of the design process results in products they will turn into again and again.",
      },
      {
        icon: "fa fa-microchip",
        image:
          "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        theme: "#ff1744",
        title: "Internet of things",
        desc:
          "Our customer-centric approach where our Visual UI is supported by UX strategy achieves best in Industry results that are not only visually appealing but also uniquely express your brand and drive customer engagement. Putting your customers at the heart of the design process results in products they will turn into again and again.",
      },
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
        <Categories categories={this.state.categories} />
      </React.Fragment>
    );
  }
}

export default App;
