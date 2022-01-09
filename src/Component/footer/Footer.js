import React from "react";
import { Layout, Row, Col, Button, Input, Form } from "antd";
import {
  AiOutlineMail,
 
  AiFillCopyrightCircle,
} from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  const [form] = Form.useForm();
  const { Footer } = Layout;

  return (
    <div className="footer0">
      <Footer className="myfooter" style={{ textAlign: "center" }}>
        <Row gutter={[10, 10]}>
          <Col xs={24} sm={24} md={24} lg={24}>
            <div className="mailpoet_paragraph1">
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <div className="footerDeals">
                    <AiOutlineMail />
                    <h1>Let's Discuss</h1>
                  </div>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12}>
                  <div className="enterEmialFooter">
                    <Form form={form} name="basic" layout="vertical">
                      <Form.Item
                        name="email"
                        required={true}
                        rules={[
                          {
                            type: "email",
                            message: "The input is not valid E-mail!",
                          },
                          {
                            required: true,
                            message: "This field is Mandatory!",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Enter email"
                          suffix={
                            <Button htmlType="submit">
                              <FaLocationArrow />
                            </Button>
                          }
                        />
                      </Form.Item>
                    </Form>
                  </div>
                </Col>
                <p>
                  Progravida nibh vel velit auctor alinean sollicitudin
                  sollicitudin,lorem
                </p>
              </Row>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24}>
            <div>
              <Row gutter={[16, 10]}>
                <Col xs={24} sm={24} md={7} lg={7}>
                  <div className="footerLogo0">
                    <img src={logo} alt={logo} />
                  </div>
                  <div className="socialmedia0">
                    Progravida nibh vel velit auctor alinean sollicitudin
                    sollicitudin,lorem
                  </div>
                </Col>
                <Col xs={24} sm={24} md={17} lg={17}>
                  <Row gutter={[16, 16]}>
                    <Col xs={12} sm={12} md={8} lg={8}>
                      <div className="widget">
                        <ul className="widget-list">
                          <li>
                            <h1>Fashion</h1>
                          </li>
                          <li>
                            <Button type="link">Our Clients</Button>
                          </li>
                          <li>
                            <Button type="link">Privacy Policy</Button>
                          </li>
                          <li>
                            <Button type="link">Our Benefits</Button>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8}>
                      <div className="widget">
                        <ul className="widget-list">
                          <li>
                            <h1>Information</h1>
                          </li>
                          <li>
                            <Button type="link">Our Clients</Button>
                          </li>
                          <li>
                            <Button type="link">Privacy Policy</Button>
                          </li>
                          <li>
                            <Button type="link">Our Benefits</Button>
                          </li>
                        </ul>
                      </div>
                    </Col>

                    <Col xs={12} sm={12} md={8} lg={8}>
                      <div className="widget">
                        <ul className="widget-list">
                          <li>
                            <h1>Contact us</h1>
                          </li>
                          <li>
                            <Button type="link">
                              +91 9711999770, +1 833-880-3355
                            </Button>
                          </li>
                          <li>
                            <Button type="link">info@bytequests.com</Button>
                          </li>

                          <li>
                            <Button type="link">
                              84, Blocks A, Sector 4, Noida, UP, 201301
                            </Button>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Footer>
      <div className="footer__Btn1">
        <AiFillCopyrightCircle />
        Copyright 2021. ByteQuest Software Private Limited. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
