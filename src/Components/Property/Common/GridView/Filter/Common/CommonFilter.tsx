import { ChangeEvent, FC } from "react";
import { AccordionBody, AccordionHeader, AccordionItem, Input, Label } from "reactstrap";
import { Href } from "../../../../../../Constants/Constants";
import { useAppDispatch, useAppSelector } from "../../../../../../ReduxToolkit/Hooks";
import { setAmenities, setBedsRooms, setCarCategories, setCarColor, setCarFuelType, setCarModalYear, setCarOwner, setCarSeats, setCarTransmission, setPropertyType, setSquareFeetStatus, setyearBuiltStatus } from "../../../../../../ReduxToolkit/Reducers/FilterReducers";
import { setMapModal } from "../../../../../../ReduxToolkit/Reducers/SidebarReducers";
import { CommonFilterType } from "../../../../../../Types/ProductType";
import { dynamicImage, Image } from "../../../../../../Utils";
import RangeInputFields from "./RangeInputFields";

const CommonFilter: FC<CommonFilterType> = ({ title, id, data, checkValue, priceRange, squareFeet, values, modalType, type, radio, subClass }) => {
  const dispatch = useAppDispatch();
  const { propertyType, bedsRooms, amenities, carCategories, carFuelType, carModalYear, carSeats, carColor, carTransmission, carOwner } = useAppSelector((state) => state.filter);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>, title: string, field?: string) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    const actionCreator = (option?: string[] | string) => {
      if (Array.isArray(option)) return isChecked ? [...option, value] : option.filter((v) => v !== value);
      else if (typeof option === "string") return isChecked ? value : carModalYear !== value;
      else return [field === "min" ? +value : values?.[0], field === "max" ? +value : values?.[1]];
    };

    const updateState = {
      "Property Type": () => {
        let updated = isChecked ? (value === "all" ? ["all", "apartment", "house", "villa", "office", "farmhouse"] : propertyType.includes("all") ? [value] : [...propertyType, value]) : value === "all" ? [] : propertyType.filter((v) => v !== value);
        if (updated.length >= 5 && !updated.includes("all")) updated = ["all", "apartment", "house", "villa", "office", "farmhouse"];
        dispatch(setPropertyType(updated));
      },
      "Beds rooms": () => dispatch(setBedsRooms(actionCreator(bedsRooms))),
      Amenities: () => dispatch(setAmenities(actionCreator(amenities))),
      "Square Feet": () => dispatch(setSquareFeetStatus(actionCreator())),
      "Year Built": () => dispatch(setyearBuiltStatus(actionCreator())),
      Categories: () => dispatch(setCarCategories(actionCreator(carCategories))),
      "Fuel Type": () => dispatch(setCarFuelType(actionCreator(carFuelType))),
      "Modal Year": () => dispatch(setCarModalYear(actionCreator(carModalYear))),
      Seats: () => dispatch(setCarSeats(actionCreator(carSeats))),
      Color: () => dispatch(setCarColor(actionCreator(carColor))),
      Transmission: () => dispatch(setCarTransmission(actionCreator(carTransmission))),
      Owner: () => dispatch(setCarOwner(actionCreator(carOwner))),
    };

    updateState[title as keyof typeof updateState]?.();
  };

  return (
    <AccordionItem>
      <AccordionHeader targetId={id}>{title}</AccordionHeader>
      <AccordionBody accordionId={id}>
        {priceRange ? (
          <RangeInputFields type={type} />
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
        ) : type === "car" ? (
          <div className={`sidebar-choose-list categories-list ${subClass ? subClass : ""}`}>
            {data?.map((item, index) => (
              <div className="main-choose-item" key={index}>
                <div className="choose-item">
                  <Input type={radio ? "radio" : "checkbox"} name={radio ? `category-${id}` : ""} id={item.id} value={item.type} checked={checkValue?.includes(item.type)} onChange={(event) => handleCheckboxChange(event, title)} />
                  <Label htmlFor={item.id}>
                    <span>{item.label}</span>
                  </Label>
                </div>
              </div>
            ))}
          </div>
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
