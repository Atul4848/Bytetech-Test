import React from "react";
import { Carousel } from "antd";

function ImageSlider() {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <p
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        Lorem Ipsum dolor
      </p>
    </div>
  );
}
export default ImageSlider;
