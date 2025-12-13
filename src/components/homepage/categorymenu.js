
import React from "react";

const CategoryMenu = ({ categories }) => {
  return (
    <ul className="category-menu">
      {categories &&
        categories.map((cat) => (
          <li key={cat.id} className="category-item">
            {cat.name}
          </li>
        ))}
    </ul>
  );
};

export default CategoryMenu;
