import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../css/detail.css";

export default function Carousels() {
  const [products, setProducts] = useState([]);
  let API = "https://dummyjson.com/products/1";
  const fetchApiData = async (API) => {
    try {
      const res = await fetch(API);
      setProducts(await res.json());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApiData(API);
  }, [API]);
  console.log(products?.images);
  return (
    <div id="carousels" style={{ marginTop: "20vh" }}>
      <Carousel>
        {products?.images?.map((items) => {
          return (
            <div>
              <img src={items} alt="product" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
