import React, { useRef } from "react";
import { Carousel, Button } from "antd";
import Service_List from "./Service_List";

function Services() {
  const slider = useRef(null);
  let rows = [
    [
      {
        amount: "Raised: $12080",
        name: "Charity 1",
        description: "Product description is one of the best Nike Shoe 1",
      },
      {
        amount: "Raised: $12800",
        name: "Charity 2",
        description: "Product description is one of the best Nike Shoe 2",
      },
      {
        amount: "Raised: $1280",
        name: "Charity 3",
        description: "Product description is one of the best Nike Shoe 3",
      },
      {
        amount: "Raised: $180",
        name: "Charity 4",
        description: "Product description is one of the best Nike Shoe 4",
      },
      {
        amount: "Raised: $280",
        name: "Charity 5",
        description: "Product description is one of the best Nike Shoe 5",
      },
      {
        amount: "Raised: $120",
        name: "Charity 6",
        description: "Product description is one of the best Nike Shoe 6",
      },
    ],
    [
      {
        amount: "Raised: $10280",
        name: "Charity 7",
        description: "Product description is one of the best Nike Shoe 7",
      },
      {
        amount: "Raised: $12980",
        name: "Charity 8",
        description: "Product description is one of the best Nike Shoe 8",
      },
      {
        amount: "Raised: $1880",
        name: "Charity 9",
        description: "Product description is one of the best Nike Shoe 9",
      },
      {
        amount: "Raised: $12280",
        name: "Charity 10",
        description: "Product description is one of the best Nike Shoe 10",
      },
      {
        amount: "Raised: $12980",
        name: "Charity 11",
        description: "Product description is one of the best Nike Shoe 11",
      },
    ],
  ];
  return (
    <div className="lftRft__0">
      <h1 className="developer-on-demand">Services</h1>
      <Button onClick={() => slider.current.prev()}>prev</Button>
      <Carousel ref={slider}>
        {rows.map((data) => {
          return <Service_List key={Math.random()} slide_data={data} />;
        })}
      </Carousel>
      <Button onClick={() => slider.current.next()}>next</Button>
    </div>
  );
}
export default Services;
