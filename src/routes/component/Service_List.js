import React from "react";
import { Card } from "antd";
import Athletes from "../../assets/athletes-img.jpg";

function Service_List({ slide_data }) {
  const { Meta } = Card;
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {slide_data.map((item) => (
        <div>
          <Card hoverable cover={<img src={Athletes} alt="shoe" />}>
            <div>
              <span>
                <strong>{item.amount}</strong>
              </span>
            </div>
            <div>
              <p>{item.description}</p>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
export default Service_List;
