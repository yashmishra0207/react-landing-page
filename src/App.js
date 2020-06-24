import React, { Component } from "react";
import "./App.css";
import Navigator from "./components/Navbar";
import Slider from "./components/Corousel";
import Services from "./components/Services";
import Categories from "./components/Categories";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    totalItems: "5",
    userName: "Allen",
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
        icon: "fa fa-code",
        title: "Software",
        desc: [
          <div key="1">
            <i className="fa fa-laptop" style={{ fontSize: "24px" }} />
            <br />
            Web Apps
            <hr
              style={{
                height: "0.5px",
                backgroundColor: "whitesmoke",
                border: "none",
              }}
            />
            <i className="fa fa-paint-brush" style={{ fontSize: "26px" }} />
            <br />
            Graphic Designing
            <hr
              style={{
                height: "0.5px",
                backgroundColor: "whitesmoke",
                border: "none",
              }}
            />
            <i className="fa fa-mobile" style={{ fontSize: "26px" }} />
            <br />
            Mobile Apps
          </div>,
        ],
      },
      {
        icon: "fa fa-line-chart",
        title: "Marketing",
        desc: [
          <div key="1">
            <i className="fa fa-search" style={{ fontSize: "22px" }} />
            <br />
            S.E.O.
            <hr
              style={{
                height: "0.5px",
                backgroundColor: "whitesmoke",
                border: "none",
              }}
            />
            <i className="fa fa-envelope" style={{ fontSize: "20px" }} />
            <br />
            Email Marketting
            <hr
              style={{
                height: "0.5px",
                backgroundColor: "whitesmoke",
                border: "none",
              }}
            />
            <i className="fa fa-bar-chart" style={{ fontSize: "26px" }} />
            <br />
            Analytics
          </div>,
        ],
      },
      {
        icon: "fa fa-soundcloud",
        title: "Cloud",
        desc: [
          <div key="1">
            <i className="fa fa-server" style={{ fontSize: "22px" }} />
            <br />
            Server
            <hr
              style={{
                height: "0.5px",
                backgroundColor: "whitesmoke",
                border: "none",
              }}
            />
            <i className="fa fa-database" style={{ fontSize: "20px" }} />
            <br />
            Database
            <hr
              style={{
                height: "0.5px",
                backgroundColor: "whitesmoke",
                border: "none",
              }}
            />
            <i className="fa fa-hdd-o" style={{ fontSize: "26px" }} />
            <br />
            Storage
          </div>,
        ],
      },
      {
        icon: "fa fa-lightbulb-o fa-microchip",
        title: "IOT",
        desc: [
          <div key="1">
            <i className="fa fa-shield" style={{ fontSize: "22px" }} />
            <br />
            Security
            <hr
              style={{
                height: "0.5px",
                backgroundColor: "whitesmoke",
                border: "none",
              }}
            />
            <i className="fa fa-medkit" style={{ fontSize: "20px" }} />
            <br />
            Health Care
            <hr
              style={{
                height: "0.5px",
                backgroundColor: "whitesmoke",
                border: "none",
              }}
            />
            <i className="fa fa-car" style={{ fontSize: "24px" }} />
            <br />
            Automotive
          </div>,
        ],
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
    blogs: [
      {
        userImg: "/avatars/avatar-1.png",
        userName: "Peter Parker",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor, tellus sit amet eleifend lacinia, lorem quam vestibulum sem, non eleifend odio odio ac risus. Mauris efficitur gravida purus, nec tristique augue sagittis tincidunt. Ut neque elit, elementum at venenatis. ",
        date: "10 August 2019",
      },
      {
        userImg: "/avatars/avatar-2.png",
        userName: "Arthur Curry",
        review:
          "Spicy jalapeno bacon ipsum dolor amet jerky venison salami pork loin pancetta turducken cupim buffalo pork biltong beef ribeye kevin. Fatback tri-tip beef ribs, picanha beef short loin filet mignon swine andouille jowl capicola shoulder. Pork chop pancetta beef ribs.",
        date: "29 January 2019",
      },
      {
        userImg: "/avatars/avatar-4.png",
        userName: "Bruse Banner",
        review:
          "Hase mice run in circles yet mark territory sleep on keyboard. Claw drapes. Intently sniff hand burrow under covers for behind the couch but inspect anything brought into the house. Intently stare at the same spot flop over or give attitude or hide when guests come over yet hide when.",
        date: "02 July 2019",
      },
    ],
    footer: {
      address:
        "Frank G. Wells Building 2nd Floor 500 South Buena Vista Street, Burbank, California , United States",
      socialMedia: [{ icon: "fa fa-google-plus-square", link: "https://aboutme.google.com" }, { icon: "fa fa-twitter-square", link: "https://twitter.com" },{ icon: "fa fa-linkedin-square", link: "https://linkedin.com" }, { icon: "fa fa-facebook-square", link: "https://facebook.com" }, { icon: "fa fa-instagram", link: "https://instagram.com" }],
      copyright: [<i className="fa fa-copyright" style={{fontSize:"0.75em"}}/>, " 2019 HYATHI TECHNOLOGIES PVT. LTD."]
    },
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
          ScreenHeight={window.innerHeight / 1.25}
        />
        <Services services={this.state.services} />
        <Categories categories={this.state.categories} />
        <Blog blogs={this.state.blogs} />
        <Footer footer={this.state.footer} />
      </React.Fragment>
    );
  }
}

export default App;
