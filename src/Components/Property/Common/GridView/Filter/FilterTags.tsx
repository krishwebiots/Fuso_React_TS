import { FC, useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { Href } from "../../../../../Constants/Constants";
import { useAppDispatch, useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { setPopular, setSortBy } from "../../../../../ReduxToolkit/Reducers/FilterReducers";
import { setOpenFilterSidebar } from "../../../../../ReduxToolkit/Reducers/SidebarReducers";
import { TopPanelType } from "../../../../../Types/ProductType";
import { FilterTabsListData } from "../../../../../Data/Property";

const FilterTags: FC<TopPanelType> = ({ topFilter, side, mainClass, type }) => {
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
    <div className={mainClass ? mainClass : "top-panel"}>
      <h4>
        {totalProduct} {type === "property" ? "properties in Amsterdam" : "Cars To Explore"}
      </h4>

      {type === "property" ? (
        <Dropdown className="select-dropdown" isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)}>
          <DropdownToggle className="select-button">{sortBy || "Sort By"}</DropdownToggle>
          <DropdownMenu className="select-menu" end>
            {FilterTabsListData.slice(0, 3).map((item, index) => (
              <DropdownItem onClick={() => handleSortBy(item)} key={index}>
                <a href={Href} className="select-item">
                  {item}
                </a>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      ) : (
        <div className="category-filter">
          <div className="car-sortby-flex">
            <span>Sort By :</span>
            <Dropdown className="select-dropdown" isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)}>
              <DropdownToggle className="select-button">{sortBy || "Sort By"}</DropdownToggle>
              <DropdownMenu className="select-menu" end>
                {FilterTabsListData.slice(3).map((item, index) => (
                  <DropdownItem onClick={() => handleSortBy(item)} key={index}>
                    <a href={Href} className="select-item">
                      {item}
                    </a>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
          <a href={Href} className={`btn-solid ${side !== "no" && "filter-btn"}`} onClick={() => dispatch(setOpenFilterSidebar())}>
            Filter
          </a>
        </div>
      )}
      {!topFilter && (
        <a href={Href} className={`btn-solid ${side !== "no" && "filter-btn"}`} onClick={() => dispatch(setOpenFilterSidebar())}>
          Filter
        </a>
      )}
    </div>
  );
};

export default FilterTags;
