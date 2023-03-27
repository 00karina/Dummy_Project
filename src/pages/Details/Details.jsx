import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Carousels from "../../components/Carousels ";
import ProductDetail from "./ProductDetail";
import Banner from "./Banner.jsx";
import { Row, Col } from "react-bootstrap";
import { Container } from "@mui/material";
import "../../css/detail.css";

export default function Details() {
  return (
    <div className="detail_wrapper">
      <Breadcrumb />
      <Container>
        <Row>
          <Col md={7} xs={12}>
            <Carousels />
          </Col>
          <Col md={5} xs={12}>
            <ProductDetail />
          </Col>
        </Row>
        <Banner />
      </Container>
    </div>
  );
}
