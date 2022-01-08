import React from "react";
import ImageSlider from "./component/ImageSlider";
import Developer_In_Demands from "./component/Developer_In_Demands";
import Case_Studies from "./component/Case_Studies";
import Products from "./component/Products";
import Services from "./component/Services";

function HomePage() {
  return (
    <div>
      <ImageSlider />
      <Products />
      <Services />
      <Case_Studies />
      <Developer_In_Demands />
    </div>
  );
}
export default HomePage;
