import { useState } from "react";
import { UncontrolledAccordion } from "reactstrap";
import { Href } from "../../../../../Constants/Constants";
import { Amenities, BhkOptions, PropertyTypeData } from "../../../../../Data/Property";
import { useAppDispatch, useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { setOpenFilterSidebar } from "../../../../../ReduxToolkit/Reducers/SidebarReducers";
import { FilterSidebarType } from "../../../../../Types/ProductType";
import CommonFilter from "./Common/CommonFilter";

const FilterSidebar: React.FC<FilterSidebarType> = ({ value, type }) => {
  const dispatch = useAppDispatch();
  const { propertyType, bedsRooms, amenities, squareFeetStatus, yearBuiltStatus } = useAppSelector((state) => state.filter);
  const [openItems, setOpenItems] = useState<string[]>(["1", "2", "3", "4", "5", "6"]);

  const toggle = (id: string) => {
    setOpenItems((openItems) => (openItems.includes(id) ? openItems.filter((item) => item !== id) : [...openItems, id]));
  };

  return (
    <div className="property-sidebar">
      <div className="sidebar-title-flex">
        <h5>Filter</h5>
        <a href={Href} className="close-btn" onClick={() => dispatch(setOpenFilterSidebar())}>
          <i className="ri-close-line" />
        </a>
      </div>
      <UncontrolledAccordion defaultOpen={openItems} stayOpen toggle={toggle}>
        <CommonFilter title="Property Type" id="1" data={PropertyTypeData} checkValue={propertyType} />
        <CommonFilter title="Price range" id="2" priceRange />
        <CommonFilter title="beds rooms" id="3" data={BhkOptions} checkValue={bedsRooms} />
        <CommonFilter title="Square Feet" id="4" values={squareFeetStatus} squareFeet />
        <CommonFilter title="Year Built" id="5" values={yearBuiltStatus} squareFeet />
        <CommonFilter title="Amenities" id="6" data={Amenities} checkValue={amenities} />
      </UncontrolledAccordion>
    </div>
  );
};

export default FilterSidebar;
