/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from "react-router-dom";
import "./ProductCategory.scss";


const categories = [
    {
      id: 1,
      title: "Gadgets",
      image: "https://i.ibb.co/5GVkd3m/c1.jpg",
    },
    {
      id: 2,
      title: "Women Clothings",
      image: "https://e0.pxfuel.com/wallpapers/28/706/desktop-wallpaper-steph-lew-art-lunch-doodle-girly-art-indian-illustration-indian-cartoon.jpg",
    },
    {
      id: 3,
      title: "Sport Sneakers",
      image: "https://i.ibb.co/fNkBYgr/c3.jpg",
    },
  ];

  const Category = ({ title, image }) => {
    const navigate = useNavigate();
    return (
      <div className="category">
        <h3>{title}</h3>
        <img src={image} alt="img" />
        <div className="category-btn">
        <button className="--btn" onClick={() => navigate("/shop")}>
          {"Shop Now >>>"}
        </button>
        </div>
      </div>
    );
  };
function ProductCategory() {
  return (
    <div className="categories">
    {categories.map((cat) => {
      return (
        <div key={cat.id}>
          <Category title={cat.title} image={cat.image} />
        </div>
      );
    })}
  </div>
  )
}

export default ProductCategory