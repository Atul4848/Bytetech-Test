import React from "react";
import { Card, Row, Col } from "antd";
import Athletes from "../../assets/athletes-img.jpg";


function Case_Studies() {
  return (
    <div className="themestek-bgcolor-darkgrey">
      <Row gutter={[16, 10]}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <div className="themestek-vc_cta3-headers">
            <h2 className="developer-on-demand">Portfolio/Case Studies</h2>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8}>
          <Card className="themestek-post-item">
            <img src={Athletes} alt="athlete" />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8}>
          <Card className="themestek-post-item">
            <img src={Athletes} alt="athlete" />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8}>
          <Card className="themestek-post-item">
            <img src={Athletes} alt="athlete" />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default Case_Studies;
