import React, { useState } from "react";
import { TopPanelType } from "../../../../../Types/ProductType";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { Href } from "../../../../../Constants/Constants";
import { useAppDispatch, useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { setPopular, setSortBy } from "../../../../../ReduxToolkit/Reducers/FilterReducers";
import { setOpenFilterSidebar } from "../../../../../ReduxToolkit/Reducers/SidebarReducers";

const FilterTags: React.FC<TopPanelType> = ({ topFilter, side }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { sortBy } = useAppSelector((state) => state.filter);
  const { totalProduct } = useAppSelector((state) => state.sidebar);

  const handleSortBy = (sortOption: string) => {
    if (sortOption === "Most Popular") dispatch(setPopular(sortOption));
    else dispatch(setSortBy(sortOption));
    setDropdownOpen(false);
  };

  return (
    <div className="top-panel">
      <h4>{totalProduct} properties in Amsterdam</h4>
      <Dropdown className="select-dropdown" isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)}>
        <DropdownToggle className="select-button">{sortBy || "Sort By"}</DropdownToggle>
        <DropdownMenu className="select-menu" end>
          <DropdownItem onClick={() => handleSortBy("Most Popular")}>
            <a href={Href} className="select-item">
              Most Popular
            </a>
          </DropdownItem>
          <DropdownItem onClick={() => handleSortBy("User Rating (High to Low)")}>
            <a href={Href} className="select-item">
              User Rating (High to Low)
            </a>
          </DropdownItem>
          <DropdownItem onClick={() => handleSortBy("Price (High to Low)")}>
            <a href={Href} className="select-item">
              Price (High to Low)
            </a>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      {!topFilter && (
        <a href={Href} className={`btn-solid ${side !== "no" && "filter-btn"}`} onClick={() => dispatch(setOpenFilterSidebar())}>
          Filter
        </a>
      )}
    </div>
  );
};

export default FilterTags;
