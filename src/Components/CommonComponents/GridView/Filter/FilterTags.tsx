import { FC, Fragment, useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { Filter, Href, SortBy } from "../../../../Constants/Constants";
import { FilterTabsListData } from "../../../../Data/Property";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setPopular, setSortBy } from "../../../../ReduxToolkit/Reducers/FilterReducers";
import { setCardToShow, setOpenFilterSidebar } from "../../../../ReduxToolkit/Reducers/LayoutReducers";
import { TopPanelType } from "../../../../Types/ProductType";
import HeaderFilter from "./HeaderFilter";

const FilterTags: FC<TopPanelType> = ({ topFilterSidebar, side, mainClass, type, jobBoxStyle }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { sortBy } = useAppSelector((state) => state.filter);
  const { totalProduct } = useAppSelector((state) => state.layout);

  const handleSortBy = (sortOption: string) => {
    if (sortOption === "Most Popular") dispatch(setPopular(sortOption));
    if (sortOption === "24 Product par page") dispatch(setCardToShow(24));
    dispatch(setSortBy(sortOption));
    setDropdownOpen(false);
  };

  const renderDropdown = (startPoint: number, endPoint: number) => (
    <Dropdown className="select-dropdown" isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)}>
      <DropdownToggle className="select-button">{sortBy || "Sort By"}</DropdownToggle>
      <DropdownMenu className="select-menu" end>
        {FilterTabsListData.slice(startPoint, endPoint).map((item, index) => (
          <DropdownItem tag="a" onClick={() => handleSortBy(item)} key={index} className="select-item" active={sortBy === item}>
            {item}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );

  return (
    <div className={mainClass ? mainClass : "top-panel"}>
      {jobBoxStyle === "header-filter" && <HeaderFilter />}
      {type === "job" ? (
        <div className="category-filter-flex">
          <h5>All {totalProduct} jobs got found</h5>
          <div className="category-filter">
            {!topFilterSidebar && (
              <a href={Href} className={`btn-solid ${side !== "no" && "filter-btn"}`} onClick={() => dispatch(setOpenFilterSidebar())}>
                {Filter}
              </a>
            )}
            <div className="category-filter">
              <span>{SortBy}</span>
              {renderDropdown(3, 8)}
            </div>
          </div>
        </div>
      ) : (
        <Fragment>
          <h4>
            {totalProduct} {type === "property" ? "properties in Amsterdam" : "Cars To Explore"}
          </h4>
          {type === "property" ? (
            <Fragment>
              {renderDropdown(0, 3)}
              {!topFilterSidebar && (
                <a href={Href} className={`btn-solid ${side !== "no" && "filter-btn"}`} onClick={() => dispatch(setOpenFilterSidebar())}>
                  {Filter}
                </a>
              )}
            </Fragment>
          ) : (
            <div className="category-filter">
              <div className="car-sortby-flex">
                <span>{SortBy}</span>
                {renderDropdown(3, 8)}
              </div>
              {!topFilterSidebar && (
                <a href={Href} className={`btn-solid ${side !== "no" && "filter-btn"}`} onClick={() => dispatch(setOpenFilterSidebar())}>
                  {Filter}
                </a>
              )}
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default FilterTags;
