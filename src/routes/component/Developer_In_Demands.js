import React from "react";
import { Card, Button, Row, Col } from "antd";
import Athletes from "../../assets/athletes-img.jpg";
import { Link } from "react-router-dom";

function Developer_In_Demands() {
  return (
    <div className="themestek-bgcolor-darkgrey">
      <Row gutter={[16, 10]}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <div className="themestek-vc_cta3-headers">
            <h2 className="developer-on-demand">Developers On Demands</h2>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8}>
          <Card className="themestek-post-item">
            <img src={Athletes} alt="athlete" />
            <div className="themestek-pf-box-title">
              <h1>ATHLETES</h1>
              <p>
                As a corporate athlete, you have a unique opportunity to be
                among the best talent on the web.
              </p>
              <div className="themestek-box-link themestek-vc_btn3">
                <Link to="/login">
                  <Button type="link">
                    Click Here
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8}>
          <Card className="themestek-post-item">
            <img src={Athletes} alt="athlete" />
            <div className="themestek-pf-box-title">
              <h1>COACHES</h1>
              <p>
                As a Coach, you have the opportunity to make an impact by
                guiding and mentoring your Athlete to help them recognize their
                potential within their chosen career path.
              </p>
              <div className="themestek-box-link themestek-vc_btn3">
                <Link to="/login">
                  <Button type="link">
                    Click Here
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8}>
          <Card className="themestek-post-item">
            <img src={Athletes} alt="athlete" />
            <div className="themestek-pf-box-title">
              <h1>Teams</h1>
              <p>
                Becoming a Draftus Team grants your company access to the best
                candidates of color in the country to fortify and diversify your
                workforce.
              </p>
              <div className="themestek-box-link themestek-vc_btn3">
                <Link to="/login">
                  <Button type="link">
                    Click Here
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default Developer_In_Demands;
