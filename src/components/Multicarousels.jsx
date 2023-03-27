import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Ratings from "./Ratings.jsx";
import { Container } from "react-bootstrap";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import "../css/Review.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Multicarousels = () => {
  return (
    <Container>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        arrows={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-100-px"
      >
        <div className="multicarousal_wrapper">
          <Ratings value={5} />
          <p className="customer_review">
            "I love it to cook with.Great for soup, stir fires and just as a
            drink"
          </p>
          <p className="customer_name">— Steph B</p>
          <span className="verified_customer">
            <IoCheckmarkCircleSharp /> Verified Buyer
          </span>
        </div>

        <div className="multicarousal_wrapper">
          <Ratings value={4} />
          <p className="customer_review">
            "Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. "
          </p>
          <p className="customer_name"> — Paula B</p>
          <span className="verified_customer">
            <IoCheckmarkCircleSharp /> Verified Buyer
          </span>
        </div>

        <div className="multicarousal_wrapper">
          <Ratings value={5} />
          <p className="customer_review">
            " Lorem Ipsum has been the industry's standard  since
            the 1500s,"
          </p>
          <p className="customer_name"> —kari B</p>
          <span className="verified_customer">
            <IoCheckmarkCircleSharp /> Verified Buyer
          </span>
        </div>

        <div className="multicarousal_wrapper">
          <Ratings value={5} />
          <p className="customer_review">
            "Neque porro quisquam est qui dolorem amet,
            consectetur, adipisci velit...""
          </p>
          <p className="customer_name"> — ABCph B</p>
          <span className="verified_customer">
            <IoCheckmarkCircleSharp /> Verified Buyer
          </span>
        </div>

        <div className="multicarousal_wrapper">
          <Ratings value={5} />
          <p className="customer_review">
            "I love it to cook with.Great for soup, stir fires and just as a
            drink"
          </p>
          <p className="customer_name"> — Steph B</p>
          <span className="verified_customer">
            <IoCheckmarkCircleSharp /> Verified Buyer
          </span>
        </div>
      </Carousel>
      ;
    </Container>
  );
};

export default Multicarousels;
