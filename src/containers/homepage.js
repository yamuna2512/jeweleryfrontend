// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// // Redux operations
// import { fetchCategories } from "../reducks/category/operations";
// import { fetchProducts } from "../reducks/product/operations";

// // Redux selectors
// import { getUser } from "../reducks/users/selectors";
// import { getCarts } from "../reducks/cart/selectors";
// import { getCategories } from "../reducks/category/selectors";
// import { getProducts } from "../reducks/product/selectors";

// // Components
// import BannerSlide from "../components/homepage/bannerslide";
// import CategoryMenu from "../components/homepage/categorymenu";
// import ProductListCard from "../components/homepage/productlistcard";

// // CSS
// import "../assets/styles/homepage.css";

// const HomePage = () => {
//   const dispatch = useDispatch();

//   //  CORRECT useSelector usage
//   const user = useSelector(getUser);
//   const carts = useSelector(getCarts);
//   const categories = useSelector(getCategories);
//   const products = useSelector(getProducts);

//   useEffect(() => {
//     dispatch(fetchCategories());
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   return (
//     <div className="homepage">
//       {/* Banner */}
//       <section className="homepage-banner">
//         <BannerSlide />
//       </section>

//       <div className="homepage-content">
//         {/* Categories */}
//         <aside className="homepage-left">
//           {/* <h3 className="side-title">Categories</h3> */}
//           <CategoryMenu categories={categories || []} />
//         </aside>

//         {/* Products */}
//         <main className="homepage-right">
//           <h3 className="section-title">Latest Products</h3>
//           <ProductListCard products={products || []} />
//         </main>
//       </div>
//     </div>
//   );
// };



import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import BannerSlide from "../components/homepage/bannerslide";
import CategoryMenu from "../components/homepage/categorymenu";
import ProductListCard from "../components/homepage/productlistcard";

// Redux
import { fetchCategories } from "../reducks/category/operations";
import { fetchProducts } from "../reducks/product/operations";
import { getCategories } from "../reducks/category/selectors";
import { getProducts } from "../reducks/product/selectors";

// CSS
import "../assets/styles/homepage.css";

const HomePage = () => {
  const dispatch = useDispatch();

  const categories = useSelector(getCategories);
  const products = useSelector(getProducts);

  // Selected category state
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="homepage">
      {/* Banner */}
      <section className="homepage-banner">
        <BannerSlide />
      </section>

      {/* Main Content */}
      <div className="homepage-content">
        {/* Category Menu */}
        <aside className="homepage-left">
          <CategoryMenu
            categories={categories || []}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </aside>

        {/* Products */}
        <main className="homepage-right">
          <h3 className="section-title">
            {selectedCategory
              ? `Products in ${categories.find(cat => cat.id === selectedCategory)?.category_name}`
              : "Latest Products"}
          </h3>
          <ProductListCard
            products={
              selectedCategory
                ? products.filter(p => p.category === selectedCategory)
                : products
            }
          />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
