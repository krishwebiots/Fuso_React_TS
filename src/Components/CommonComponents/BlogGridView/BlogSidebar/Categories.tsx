import React from "react";
import { Link } from "react-router-dom";
import { RouteList } from "../../../../Routers/RouteList";
import { CategoriesData } from "../../../../Data/Pages/Blog";
import { CategoriesTitle } from "../../../../Constants/Constants";

const Categories = () => {
  return (
    <div className="blog-sidebar-box">
      <div className="sidebar-title">
        <h4>{CategoriesTitle}</h4>
      </div>
      <ul className="category-list">
        {CategoriesData.map((item, index) => (
          <li key={index}>
            <Link to={RouteList.Pages.Blog.BlogLeftSidebar}>
              <i className={item.icon} />
              {item.title}
              <span>({item.value})</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
