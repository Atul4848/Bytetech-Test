import React from "react";
import { Menu, Col, Row, Button } from "antd";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header_nav">
      <Row gutter={[10, 10]}>
        <Col xs={7} sm={7} md={6} lg={6}>
          <Link to="/">
            <div className="headerlogo">
              <img src={Logo} alt="logo" />
            </div>
          </Link>
        </Col>

        <Col
          xs={17}
          sm={17}
          md={18}
          lg={18}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div className="navsec">
            <Menu mode="horizontal">
              <Menu.Item key="1">
                <Link to="#">
                  <div className="iconsNav">
                    <span>Home</span>
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="#">
                  <div className="iconsNav">
                    <span>About Us</span>
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="#">
                  <div className="iconsNav">
                    <span> Services </span>
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="#">
                  <div className="iconsNav">
                    <span> Products </span>
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="#">
                  <div className="iconsNav">
                    <span> Portfolio </span>
                  </div>
                </Link>
              </Menu.Item>

              {/* <Menu.Item key="5">
                <Link href="/register">Register</Link>
              </Menu.Item> */}

              <Menu.Item key="6">
                <div>
                  <div className="iconsNav">
                    <Button type="primary">
                      <span> Contact us</span>
                    </Button>
                  </div>
                </div>
              </Menu.Item>
            </Menu>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default Header;
