import React from "react";
import { Card } from "antd";

function Products() {
  
  return (
    <div>
      <h1 className="developer-on-demand">Products</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="Products">
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          ></Card>
        </div>
        <div className="Products">
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          ></Card>
        </div>
        <div className="Products">
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          ></Card>
        </div>
        <div className="Products">
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          ></Card>
        </div>
        <div className="Products">
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          ></Card>
        </div>
      </div>
    </div>
  );
}
export default Products;
