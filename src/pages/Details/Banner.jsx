import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { Col, Row, Container } from "react-bootstrap";
import "../../css/banner.css";

const Banner = () => {
  return (
    <div className="banner_wrapper">
      <Container>
        <Row className="row_bannner">
          <Col>
            <div className="flex_banner">
              <BsCheckCircle className="icon_banner" />
              <p>
                100% guarantee <br />
                <span> Dont like it?Get a full refund</span>
              </p>
            </div>
          </Col>

          <Col>
            <div className="flex_banner">
              <BsCheckCircle className="icon_banner" />
              <p>
                Fast & free shipping
                <br />
                <span> Dont like it?Get a full refund</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
