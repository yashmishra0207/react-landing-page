import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Slider(props) {
  return (
    <Carousel style={{marginTop:'50px'}}>
      {props.images.map((item, index) => (
        <Carousel.Item key={index}>
          <img
          className="d-block w-100 img-responsive"
          src={"https://source.unsplash.com/random/"+props.ScreenWidth+"x500/?"+item}
          alt="First slide"
        />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
export default Slider;
