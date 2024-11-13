import React, { ChangeEvent } from "react";
import { AccordionBody, AccordionHeader, AccordionItem, Input, Label } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../../../../../ReduxToolkit/Hooks";
import { setAmenities, setBedsRooms, setPropertyType } from "../../../../../../ReduxToolkit/Reducers/FilterReducers";
import { CommonFilterType } from "../../../../../../Types/ProductType";
import RangeInputFields from "../RangeInputFields";

const CommonFilter: React.FC<CommonFilterType> = ({ title, id, data, checkValue, priceRange }) => {
  const dispatch = useAppDispatch();
  const { propertyType, bedsRooms, amenities } = useAppSelector((state) => state.filter);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>, title: string) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

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
    } else if (title === "beds rooms") {
      if (isChecked) dispatch(setBedsRooms([...bedsRooms, value]));
      else dispatch(setBedsRooms(bedsRooms.filter((selectedValue) => selectedValue !== value)));
    } else if (title === "Amenities") {
      if (isChecked) dispatch(setAmenities([...amenities, value]));
      else dispatch(setAmenities(amenities.filter((selectedValue) => selectedValue !== value)));
    }
  };

  return (
    <AccordionItem>
      <AccordionHeader targetId={id}>{title}</AccordionHeader>
      <AccordionBody accordionId={id}>
        {priceRange ? (
          <RangeInputFields />
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
