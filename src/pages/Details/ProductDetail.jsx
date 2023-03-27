import React from "react";
import "../../css/productdetail.css";
import Rating from "@mui/material/Rating";
import { BsCheckCircle } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";

export default function ProductDetail() {
  return (
    <div className="wrapper_product_detail">
      <span className="wrapper_span">16.9fl oz</span>
      <h5 classname="product_heading">Tom Yum Chicken Keto Bone Broth</h5>
      <div className="flex_rating1">
        <Rating name="simple-controlled" value={5} label="karina" />
        <p>196 Reviews</p>
      </div>
      <p>
        {" "}
        Fragrant hints of ginger and lemongrass elevate classic chicken bone
        broth,beautifully balanced with mild chiles and slightly sweet coconut.{" "}
      </p>
      <p>
        {" "}
        <BsCheckCircle /> Perfect for sipping as an afternoon pick-me-up
      </p>
      <p>
        <BsCheckCircle /> Decadancy daily-free keto confort food
      </p>
      <p>
        <BsCheckCircle /> Low carb,rich in collagon ,no sugar,all clean
        ingredient
      </p>
      <p>
        <BsCheckCircle /> Quick and convenient,ready in 5 minutes
      </p>
      <span className="wrapper_span">BUYING OPTIONS</span>

      <div className="button_wrapper">
        <Row>
          <Col>
            <div class="button">
              <input
                type="radio"
                id="a25"
                name="check-substitution-2"
                checked
              />
              <label class="btn btn-default" for="a25">
                {" "}
                ONE TIME PURCHASE <br /> <span>$47.94</span>
              </label>
            </div>
          </Col>
          <Col>
            <div class="button">
              <input type="radio" id="a25" name="check-substitution-2" />
              <label class="btn btn-default" for="a25">
                {" "}
                ONE TIME PURCHASE <br /> <span>$47.94</span>
              </label>
            </div>
          </Col>
        </Row>
      </div>
      <span className="wrapper_span">QUANTITY</span>
      <div className="wrapper">
        <Row>
          <Col>
            <button className="btn_wrapper ">
              1-Pack
              <br /> <span>$7.99/carton</span>
            </button>
          </Col>
          <Col>
            <button className="btn_wrapper btn_wrapper_active">
              6-Pack
              <br /> <span>$7.99/carton</span>
            </button>
          </Col>
          <Col>
            <button className="btn_wrapper ">
              12-Pack
              <br /> <span>$7.99/carton</span>
            </button>
          </Col>
          <Col>
            <button className="btn_wrapper">
              18-Pack
              <br /> <span>$7.99/carton</span>
            </button>
          </Col>
        </Row>
      </div>

      <Row className="button_parent">
        <Col className="cart_price">$47.94</Col>
        <Col xs={6}>
          <button className="add_to_cart">Add to Cart</button>
        </Col>
      </Row>
    </div>
  );
}
