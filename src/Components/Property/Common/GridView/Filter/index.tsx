import { FC, Fragment, useState } from "react";
import { UncontrolledAccordion } from "reactstrap";
import { AmenitiesFilterData, BhkOptions, PropertyTypeData } from "../../../../../Data/Property";
import { useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { FilterSidebarType } from "../../../../../Types/ProductType";
import CommonFilter from "./Common/CommonFilter";
import BrandModelFilter from "./BrandModelFilter";

const FilterSidebar: FC<FilterSidebarType> = ({ value, modalType, type }) => {
  const { propertyType, bedsRooms, amenities, squareFeetStatus, yearBuiltStatus } = useAppSelector((state) => state.filter);
  const [openItems, setOpenItems] = useState<string[]>(["1", "2", "3", "4", "5", "6", "7"]);

  const toggle = (id: string) => setOpenItems((openItems) => (openItems.includes(id) ? openItems.filter((item) => item !== id) : [...openItems, id]));

  let minPrice = Array.isArray(value) && value.length > 0 ? value.reduce((res: any, obj: any) => (Math.round(obj?.price) < Math.round(res?.price) ? obj : res)) : undefined;
  let maxPrice = Array.isArray(value) && value.length > 0 ? value.reduce((res: any, obj: any) => (Math.round(obj?.price) > Math.round(res?.price) ? obj : res)) : undefined;

  return (
    <div className="property-sidebar">
      <UncontrolledAccordion defaultOpen={openItems} stayOpen toggle={toggle} className="car-accordion">
        {type === "property" ? (
          <Fragment>
            {modalType === "map-modal" && <CommonFilter title="Map Modal" id="7" modalType={modalType} />}
            <CommonFilter title="Property Type" id="1" data={PropertyTypeData} checkValue={propertyType} />
            <CommonFilter title="Price range" id="2" priceRange minPrice={minPrice?.price} maxPrice={maxPrice?.price} type="property" />
            <CommonFilter title="beds rooms" id="3" data={BhkOptions} checkValue={bedsRooms} />
            <CommonFilter title="Square Feet" id="4" values={squareFeetStatus} squareFeet />
            <CommonFilter title="Year Built" id="5" values={yearBuiltStatus} squareFeet />
            <CommonFilter title="Amenities" id="6" data={AmenitiesFilterData} checkValue={amenities} />
          </Fragment>
        ) : (
          <Fragment>
            <BrandModelFilter id="1" />
            <CommonFilter title="Budget" id="2" priceRange minPrice={minPrice?.price} maxPrice={maxPrice?.price} type="car" />
          </Fragment>
        )}
      </UncontrolledAccordion>
    </div>
  );
};

export default FilterSidebar;
