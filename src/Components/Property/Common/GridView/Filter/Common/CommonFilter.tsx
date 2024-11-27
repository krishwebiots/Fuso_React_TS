import { ChangeEvent, FC } from "react";
import { AccordionBody, AccordionHeader, AccordionItem, Input, Label } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../../../../../ReduxToolkit/Hooks";
import { setAmenities, setBedsRooms, setPropertyType, setSquareFeetStatus, setyearBuiltStatus } from "../../../../../../ReduxToolkit/Reducers/FilterReducers";
import { CommonFilterType } from "../../../../../../Types/ProductType";
import RangeInputFields from "./RangeInputFields";
import { Href } from "../../../../../../Constants/Constants";
import { dynamicImage, Image } from "../../../../../../Utils";
import { setMapModal } from "../../../../../../ReduxToolkit/Reducers/SidebarReducers";

const CommonFilter: FC<CommonFilterType> = ({ title, id, data, checkValue, priceRange, squareFeet, values, maxPrice, minPrice, modalType }) => {
  const dispatch = useAppDispatch();
  const { propertyType, bedsRooms, amenities } = useAppSelector((state) => state.filter);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>, title: string, field?: string) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    // Property Type
    if (title === "Property Type") {
      let updatedPropertyType: string[] = [];
      if (isChecked) {
        if (value === "all") updatedPropertyType = ["all", "apartment", "house", "villa", "office", "farmhouse"];
        else updatedPropertyType = propertyType.includes("all") ? [value] : [...propertyType, value];
      } else {
        if (value === "all") updatedPropertyType = [];
        else updatedPropertyType = propertyType.filter((selectedValue) => selectedValue !== value);
      }
      if (updatedPropertyType.length >= 5 && !updatedPropertyType.includes("all")) updatedPropertyType = ["all", "apartment", "house", "villa", "office", "farmhouse"];

      dispatch(setPropertyType(updatedPropertyType));
    }

    // Beds Rooms
    else if (title === "beds rooms") {
      if (isChecked) dispatch(setBedsRooms([...bedsRooms, value]));
      else dispatch(setBedsRooms(bedsRooms.filter((selectedValue) => selectedValue !== value)));
    }

    // Amenities
    else if (title === "Amenities") {
      if (isChecked) dispatch(setAmenities([...amenities, value]));
      else dispatch(setAmenities(amenities.filter((selectedValue) => selectedValue !== value)));
    }

    // Square Feet
    else if (title === "Square Feet") {
      const value = parseInt(event.target.value, 10) || 0;
      dispatch(setSquareFeetStatus([field === "min" ? value : values && values[0], field === "max" ? value : values && values[1]]));
    }

    // Year Built
    else if (title === "Year Built") {
      const value = parseInt(event.target.value, 10) || 0;
      dispatch(setyearBuiltStatus([field === "min" ? value : values && values[0], field === "max" ? value : values && values[1]]));
    }
  };

  return (
    <AccordionItem>
      <AccordionHeader targetId={id}>{title}</AccordionHeader>
      <AccordionBody accordionId={id}>
        {priceRange ? (
          <RangeInputFields min={minPrice} max={maxPrice} />
        ) : squareFeet ? (
          <div className="main-number">
            <div className="input-number range-number">
              <Input type="number" placeholder="Min" value={values ? values[0] : 0} onChange={(event) => handleCheckboxChange(event, title, "min")} />
            </div>
            -
            <div className="input-number range-number">
              <Input type="number" placeholder="Max" value={values ? values[1] : 0} onChange={(event) => handleCheckboxChange(event, title, "max")} />
            </div>
          </div>
        ) : modalType === "map-modal" ? (
          <a href={Href} className="map-image" onClick={() => dispatch(setMapModal())}>
            <Image src={dynamicImage("property/map.png")} alt="map" className="img-fluid" />
            <span className="btn-border">Explore on map</span>
          </a>
        ) : (
          <ul className={`most-rating ${id !== "1" && "scroll-box"}`}>
            {data?.map((item, index) => (
              <li key={index}>
                <Input type="checkbox" id={item.id} value={item.type} checked={checkValue?.includes(item.type)} onChange={(event) => handleCheckboxChange(event, title)} />
                <Label htmlFor={item.id}>
                  <span>{item.label}</span>
                </Label>
              </li>
            ))}
          </ul>
        )}
      </AccordionBody>
    </AccordionItem>
  );
};

export default CommonFilter;
