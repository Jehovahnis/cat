import axios from "axios";
import React, { useEffect, useState } from "react";
import parameters from "../partials/parameters";
import Category from "./Category";

function Homepage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchAllCategories();
  }, []);

  const fetchAllCategories = async () => {
    const { data } = await axios.get(parameters.url);
    setCategories(data.category);
  };

  return (
    <div className="container my-3">
      <h1>All Categories</h1>

      <div className="bg-light ps-4 p-3 rounded shadow border">
      {categories && (
        categories.map(category=>(
            <Category category={category}/>
          </div>
        ))
      )}
      </div>
    </div>
  );
}

export default Homepage;
