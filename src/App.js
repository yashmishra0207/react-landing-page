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
    services: [
      {
        icon: "fa fa-code-fork fa-github",
        theme: "",
        title: "Software"
      },
      {
        icon: "fa fa-bullhorn fa-feed fa-line-chart",
        theme: "",
        title: "Marketing"
      },
      {
        icon: "fa fa-soundcloud fa-database",
        theme: "",
        title: "Cloud"
      },
      {
        icon: "fa fa-lightbulb-o",
        theme: "",
        title: "IOT"
      },
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
        theme: "#ff1744",
        title: "Digital Marketing",
        desc:
          "A successful digital product doesn’t end with launch. You need users to find it, use it, and love it. We are experts in Agile and Insight-driven Marketing. We work with you to create high quality, efficient and effective strategies that will result in conversion, retention, and acquisition. We provide marketing automation as well.",
      },
      {
        icon: "fa fa-paint-brush",
        image:
          "https://images.unsplash.com/photo-1551541566-6e5ef6aaec15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        theme: "rgb(255,165,15)",
        title: "Product Design",
        desc:
          "Our customer-centric approach where our Visual UI is supported by UX strategy achieves best in Industry results that are not only visually appealing but also uniquely express your brand and drive customer engagement. Putting your customers at the heart of the design process results in products they will turn into again and again.",
      },
      {
        icon: "fa fa-cloud",
        image:
          "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
        theme: "rgb(0,128,255)",
        title: "Cloud Computing",
        desc:
          "Cloud computing services are changing how businesses and public institutions use information technology. Today cloud services are available to meet most any IT need. As there's great variety among cloud computing services, and we stive to provide almost each of them at not only affordable prices but also ensure it to be the best-in-class.",
      },
      {
        icon: "fa fa-microchip",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        theme: "#009688",
        title: "Internet of things",
        desc:
          "Our Approach is structured around the emergence of an IoT ecosystem which helps in connections of things, data, process and people. A structured approach is taken to understand your business needs & offer quick ramp-up to discover your IoT needs & solutions, accelerating your time to market with low risk and zero lock-in.",
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
