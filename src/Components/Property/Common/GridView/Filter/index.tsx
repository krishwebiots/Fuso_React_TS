import { FC, useState } from "react";
import { AccordionBody, AccordionHeader, AccordionItem, UncontrolledAccordion } from "reactstrap";
import { AmenitiesFilterData, BhkOptions, PropertyTypeData } from "../../../../../Data/Property";
import { useAppDispatch, useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { FilterSidebarType } from "../../../../../Types/ProductType";
import CommonFilter from "./Common/CommonFilter";
import { Href } from "../../../../../Constants/Constants";
import { dynamicImage, Image } from "../../../../../Utils";
import { setMapModal } from "../../../../../ReduxToolkit/Reducers/SidebarReducers";

const FilterSidebar: FC<FilterSidebarType> = ({ value, modalType }) => {
  const { propertyType, bedsRooms, amenities, squareFeetStatus, yearBuiltStatus } = useAppSelector((state) => state.filter);
  const [openItems, setOpenItems] = useState<string[]>(["1", "2", "3", "4", "5", "6", "7"]);
  const dispatch = useAppDispatch();

  const toggle = (id: string) => setOpenItems((openItems) => (openItems.includes(id) ? openItems.filter((item) => item !== id) : [...openItems, id]));

  let minPrice = Array.isArray(value) && value.length > 0 ? value.reduce((res: any, obj: any) => (Math.round(obj?.price) < Math.round(res?.price) ? obj : res)) : undefined;
  let maxPrice = Array.isArray(value) && value.length > 0 ? value.reduce((res: any, obj: any) => (Math.round(obj?.price) > Math.round(res?.price) ? obj : res)) : undefined;

  return (
    <div className="property-sidebar">
      <UncontrolledAccordion defaultOpen={openItems} stayOpen toggle={toggle}>
        {modalType === "map-modal" && (
          <AccordionItem>
            <AccordionHeader targetId={"7"}>Map Modal</AccordionHeader>
            <AccordionBody accordionId={"7"}>
              <a href={Href} className="map-image" onClick={() => dispatch(setMapModal())}>
                <Image src={dynamicImage("property/map.png")} alt="map" className="img-fluid" />
                <span className="btn-border">Explore on map</span>
              </a>
            </AccordionBody>
          </AccordionItem>
        )}
        <CommonFilter title="Property Type" id="1" data={PropertyTypeData} checkValue={propertyType} />
        <CommonFilter title="Price range" id="2" priceRange minPrice={minPrice?.price} maxPrice={maxPrice?.price} />
        <CommonFilter title="beds rooms" id="3" data={BhkOptions} checkValue={bedsRooms} />
        <CommonFilter title="Square Feet" id="4" values={squareFeetStatus} squareFeet />
        <CommonFilter title="Year Built" id="5" values={yearBuiltStatus} squareFeet />
        <CommonFilter title="Amenities" id="6" data={AmenitiesFilterData} checkValue={amenities} />
      </UncontrolledAccordion>
    </div>
  );
};

export default FilterSidebar;
