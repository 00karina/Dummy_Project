import React from "react";
import "../../css/recipies.css";

const Recipies = () => {
  return (
    <div className="wrapper_recipies">
      <h3
        className="text-center"
        style={{ margin: "5vh 0vh", padding: "10px 0px" }}
      >
        Mouth-Watering Recipes
      </h3>

      <div class="recipe-images">
        <div class="recipe-item">
          <img
            src="  https://img.taste.com.au/CUQIkWzR/w643-h428-cfill-q90/taste/2018/01/easy-prawn-gyoza-ramen-134859-1.jpg"
            alt=""
            srcset=""
          />
          <div class="recipe-text">
            <div class="recipe-header">Mouth-watering recipes</div>
            <div class="make-it">MAKE IT</div>
          </div>
        </div>

        <div class="recipe-item">
          <img
            src="  https://img.taste.com.au/CUQIkWzR/w643-h428-cfill-q90/taste/2018/01/easy-prawn-gyoza-ramen-134859-1.jpg"
            alt=""
            srcset=""
          />
          <div class="recipe-text1">
            <div class="recipe-header">Mouth-watering recipes</div>
            <div class="make-it1">MAKE IT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipies;
