import React from "react";
import ImageSlider from "./component/ImageSlider";
import DeveloperInDemands from "./component/Developer_In_Demands";
import CaseStudies from "./component/Case_Studies";
import Products from "./component/Products";
import Services from "./component/Services";

function HomePage() {
  return (
    <div>
      <ImageSlider />
      <Products />
      <Services />
      <CaseStudies />
      <DeveloperInDemands />
    </div>
  );
}
export default HomePage;
