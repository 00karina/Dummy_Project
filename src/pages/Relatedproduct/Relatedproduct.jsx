import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "../../components/Ratings";
import { CardActionArea } from "@mui/material";

const Relatedproduct = () => {
  const [product, setProduct] = useState([]);
  let API = "https://dummyjson.com/products";
  const fetchApiData = async (API) => {
    try {
      const res = await fetch(API);
      setProduct(await res.json());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApiData(API);
  }, [API]);

  return (
    <div>
      <h3 className="text-center" style={{ margin: "15vh 0vh" }}>
        Related Products
      </h3>
      <Container>
        <Row>
          {product?.products?.map((items, index) => {
            return (
              <Col xs={12} md={3} style={{ marginBottom: "10vh" }}>
                <div sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={items.images[0]}
                      alt="green iguana"
                    />
                    <CardContent className="text-center">
                      <div className="text-center">
                        <Rating value={items.rating} />
                      </div>
                      <Typography variant="body2" color="text.secondary">
                        123 reviews
                      </Typography>
                      <Typography gutterBottom variant="p" component="div">
                        <b>{items.title}</b>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      <hr></hr>
    </div>
  );
};

export default Relatedproduct;
