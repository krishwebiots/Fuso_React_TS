import { useState } from "react";
import { UncontrolledAccordion } from "reactstrap";
import { Amenities, BhkOptions, PropertyTypeData } from "../../../../../Data/Property";
import { useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { FilterSidebarType } from "../../../../../Types/ProductType";
import CommonFilter from "./Common/CommonFilter";

const FilterSidebar: React.FC<FilterSidebarType> = ({ value }) => {
  const { propertyType, bedsRooms, amenities, squareFeetStatus, yearBuiltStatus } = useAppSelector((state) => state.filter);
  const [openItems, setOpenItems] = useState<string[]>(["1", "2", "3", "4", "5", "6"]);
  const toggle = (id: string) => {
    setOpenItems((openItems) => (openItems.includes(id) ? openItems.filter((item) => item !== id) : [...openItems, id]));
  };

  let minPrice = Array.isArray(value) && value.length > 0 ? value.reduce((res: any, obj: any) => (Math.round(obj?.price) < Math.round(res?.price) ? obj : res)) : undefined;
  let maxPrice = Array.isArray(value) && value.length > 0 ? value.reduce((res: any, obj: any) => (Math.round(obj?.price) > Math.round(res?.price) ? obj : res)) : undefined;

  return (
    <div className="property-sidebar">
      <UncontrolledAccordion defaultOpen={openItems} stayOpen toggle={toggle}>
        <CommonFilter title="Property Type" id="1" data={PropertyTypeData} checkValue={propertyType} />
        <CommonFilter title="Price range" id="2" priceRange minPrice={minPrice?.price} maxPrice={maxPrice?.price} />
        <CommonFilter title="beds rooms" id="3" data={BhkOptions} checkValue={bedsRooms} />
        <CommonFilter title="Square Feet" id="4" values={squareFeetStatus} squareFeet />
        <CommonFilter title="Year Built" id="5" values={yearBuiltStatus} squareFeet />
        <CommonFilter title="Amenities" id="6" data={Amenities} checkValue={amenities} />
      </UncontrolledAccordion>
    </div>
  );
};

export default FilterSidebar;
