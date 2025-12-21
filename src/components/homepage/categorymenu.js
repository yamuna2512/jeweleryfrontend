
import React from "react";
// import "./homepage.css";
import "../../assets/styles/homepage.css";

const CategoryMenu = ({ categories, selectedCategory, onSelectCategory }) => {
  if (!categories || categories.length === 0) return <p>Loading categories...</p>;

  return (
    <div className="category-sidebar">
      <h3 className="side-title">Categories</h3>
      <ul className="category-list">
        {categories.map((cat) => (
          <li
            key={cat.id}
            className={`category-item ${selectedCategory === cat.id ? "active" : ""}`}
            onClick={() => onSelectCategory(cat.id)}
          >
            {cat.category_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryMenu;
