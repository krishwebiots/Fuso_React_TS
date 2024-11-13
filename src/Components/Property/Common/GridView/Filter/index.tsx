import { ChangeEvent, useState } from "react";
import { AccordionBody, AccordionHeader, AccordionItem, Input, UncontrolledAccordion } from "reactstrap";
import { Href } from "../../../../../Constants/Constants";
import { Amenities, BhkOptions, PropertyTypeData } from "../../../../../Data/Property/Grid";
import { useAppDispatch, useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { setSquareFeetStatus, setYserBuiltStatus } from "../../../../../ReduxToolkit/Reducers/FilterReducers";
import { setOpenFilterSidebar } from "../../../../../ReduxToolkit/Reducers/SidebarReducers";
import { FilterSidebarType } from "../../../../../Types/ProductType";
import CommonFilter from "./Common/CommonFilter";

const FilterSidebar: React.FC<FilterSidebarType> = ({ value, type }) => {
  const dispatch = useAppDispatch();
  const { propertyType, bedsRooms, amenities, squareFeetStatus, yserBuiltStatus } = useAppSelector((state) => state.filter);
  const [openItems, setOpenItems] = useState<string[]>(["1", "2", "3", "4", "5", "6"]);

  const toggle = (id: string) => {
    setOpenItems((openItems) => (openItems.includes(id) ? openItems.filter((item) => item !== id) : [...openItems, id]));
  };

  const handleSquareFeetChange = (e: ChangeEvent<HTMLInputElement>, field: string) => {
    const value = parseInt(e.target.value, 10) || 0;
    dispatch(
      setSquareFeetStatus({
        min: field === "min" ? value : squareFeetStatus.min,
        max: field === "max" ? value : squareFeetStatus.max,
      })
    );
  };

  const handleYserBuiltChange = (e: ChangeEvent<HTMLInputElement>, field: string) => {
    const value = parseInt(e.target.value, 10) || 0;
    dispatch(
      setYserBuiltStatus({
        min: field === "min" ? value : yserBuiltStatus.min,
        max: field === "max" ? value : yserBuiltStatus.max,
      })
    );
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
        <AccordionItem>
          <AccordionHeader targetId="4">Square Feet</AccordionHeader>
          <AccordionBody accordionId="4">
            <div className="main-number">
              <div className="input-number range-number">
                <Input type="number" placeholder="Min" value={squareFeetStatus.min} onChange={(e) => handleSquareFeetChange(e, "min")} />
              </div>
              -
              <div className="input-number range-number">
                <Input type="number" placeholder="Max" value={squareFeetStatus.max} onChange={(e) => handleSquareFeetChange(e, "max")} />
              </div>
            </div>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">Year Built</AccordionHeader>
          <AccordionBody accordionId="5">
            <div className="main-number">
              <div className="input-number range-number">
                <Input type="number" placeholder={"2019"} value={yserBuiltStatus.min} onChange={(e) => handleYserBuiltChange(e, "min")} />
              </div>
              -
              <div className="input-number range-number">
                <Input type="number" placeholder={"2024"} value={yserBuiltStatus.max} onChange={(e) => handleYserBuiltChange(e, "max")} />
              </div>
            </div>
          </AccordionBody>
        </AccordionItem>
        <CommonFilter title="Amenities" id="6" data={Amenities} checkValue={amenities} />
      </UncontrolledAccordion>
    </div>
  );
};

export default FilterSidebar;
