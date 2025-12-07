
import React from "react";

const CategoryList = ({ categories, onSelect }) => {
  return (
    <aside className="category-list">
      <h3>Categories</h3>
      <ul>
        {categories.map((c) => (
          <li key={c.id} onClick={() => onSelect && onSelect(c.id)}>{c.name}</li>
        ))}
      </ul>
    </aside>
  );
};

export default CategoryList;
