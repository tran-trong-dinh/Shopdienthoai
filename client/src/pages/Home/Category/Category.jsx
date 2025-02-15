import { useContext } from "react";
import "./Category.scss";

import { Link } from "react-router-dom";
import { Context } from "../../../utils/context";

const Category = () => {
  const {
    categories = [],
    setFilterCategories,
    setMaxPrice,
    setMinPrice,
  } = useContext(Context); // Default categories to an empty array
  console.log(categories);

  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories.length > 0 ? (
          categories.map((category) => (
            <Link
              to={`/category`}
              className="category"
              key={category.category_id}
              onClick={() => {
                setFilterCategories(category.category_name);
                setMaxPrice("");
                setMinPrice("");
              }}
            >
              <img src={category.img_category} alt={category.category_name} />
              <p>{category.category_name}</p>
            </Link>
          ))
        ) : (
          <p>No categories available</p>
        )}
      </div>
    </div>
  );
};

export default Category;
