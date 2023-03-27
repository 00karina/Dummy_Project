import React from "react";
import Rating from "@mui/material/Rating";

const Ratings = ({ value }) => {
  //extract value using props
  return (
    <div className="flex_rating">
      <Rating name="simple-controlled" value={value} label="karina" />
    </div>
  );
};

export default Ratings;
