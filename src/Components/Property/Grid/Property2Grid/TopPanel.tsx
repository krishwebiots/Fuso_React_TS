import React from "react";

const TopPanel = () => {
  return (
    <div className="top-panel">
      <h4>2,285 properties in Amsterdam</h4>
      <div className="dropdown select-dropdown">
        <button type="button" className="select-button" data-bs-toggle="dropdown" aria-expanded="false">
          Sort By
        </button>
        <ul className="dropdown-menu select-menu dropdown-menu-end">
          <li>
            <a href="#!" className="select-item">
              Most Popular
            </a>
          </li>
          <li>
            <a href="#!" className="select-item">
              User Rating (High to Low)
            </a>
          </li>
          <li>
            <a href="#!" className="select-item">
              Price (High to Low)
            </a>
          </li>
        </ul>
      </div>
      <a href="#!" className="btn-solid filter-btn">
        Filter
      </a>
    </div>
  );
};

export default TopPanel;
