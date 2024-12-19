import { ChangeEvent, FC } from "react";
import { AccordionBody, AccordionHeader, AccordionItem, Input, Label } from "reactstrap";
import { ExploreOnMap, Href } from "../../../../../Constants/Constants";
import { useAppDispatch, useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { setAmenities, setBedsRooms, setCarCategories, setCarColor, setCarFuelType, setCarModalYear, setCarOwner, setCarSeats, setCarTransmission, setJobBy, setJobCategories, setJobCompanyType, setJobEducation, setJobTopCompanies, setJobType, setJobWorkMode, setJonLocation, setPropertyType, setSquareFeetStatus, setyearBuiltStatus } from "../../../../../ReduxToolkit/Reducers/FilterReducers";
import { setMapModal } from "../../../../../ReduxToolkit/Reducers/LayoutReducers";
import { CommonFilterType } from "../../../../../Types/ProductType";
import { dynamicImage, Image } from "../../../../../Utils";
import RangeInputFields from "./RangeInputFields";

const CommonFilter: FC<CommonFilterType> = ({ title, id, data, checkValue, priceRange, squareFeet, values, modalType, type, radio, subClass }) => {
  const dispatch = useAppDispatch();
  const { propertyType, bedsRooms, amenities, carCategories, carFuelType, carModalYear, carSeats, carColor, carTransmission, carOwner, jobCategories, jobWorkMode, jobCompanyType, jobEducation, jobBy, jonLocation, jobTopCompanies, jobType } = useAppSelector((state) => state.filter);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>, title: string, field?: string) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    const actionCreator = (option?: string[] | string) => {
      if (Array.isArray(option)) return isChecked ? [...option, value] : option.filter((v) => v !== value);
      else if (typeof option === "string") return isChecked ? value : option !== value;
      else return [field === "min" ? +value : values?.[0], field === "max" ? +value : values?.[1]];
    };

    const updateState = {
      "Property Type": () => {
        let updatedPropertyType: string[] = [];
        if (isChecked) {
          if (value === "all") updatedPropertyType = ["all", "apartment", "house", "villa", "office", "farmhouse"];
          else updatedPropertyType = propertyType.includes("all") ? [value] : [...propertyType, value];
        } else {
          if (value === "all") updatedPropertyType = [];
          else {
            updatedPropertyType = propertyType.filter((selectedValue) => selectedValue !== value);
            if (updatedPropertyType.includes("all")) {
              updatedPropertyType = updatedPropertyType.filter((type) => type !== "all");
            }
          }
        }
        if (updatedPropertyType.length >= 5 && !updatedPropertyType.includes("all")) updatedPropertyType = ["all", "apartment", "house", "villa", "office", "farmhouse"];
        dispatch(setPropertyType(updatedPropertyType));
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
      "All Categories": () => dispatch(setJobCategories(actionCreator(jobCategories))),
      "Work Mode": () => dispatch(setJobWorkMode(actionCreator(jobWorkMode))),
      "Company Type": () => dispatch(setJobCompanyType(actionCreator(jobCompanyType))),
      Education: () => dispatch(setJobEducation(actionCreator(jobEducation))),
      By: () => dispatch(setJobBy(actionCreator(jobBy))),
      Location: () => dispatch(setJonLocation(actionCreator(jonLocation))),
      "Top CompaniesData": () => dispatch(setJobTopCompanies(actionCreator(jobTopCompanies))),
      "Job Type": () => dispatch(setJobType(actionCreator(jobType))),
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
            <span className="btn-border">{ExploreOnMap}</span>
          </a>
        ) : type === "car" || type === "job" ? (
          <div className={`sidebar-choose-list categories-list ${subClass ? subClass : ""}`}>
            {data?.map((item, index) => (
              <div className="main-choose-item" key={index}>
                <div className="choose-item">
                  <Input type={radio ? "radio" : "checkbox"} name={radio ? `category-${id}` : ""} id={item.id} value={item.type} checked={checkValue?.includes(item.type)} onChange={(event) => handleCheckboxChange(event, title)} />
                  <Label htmlFor={item.id} className="label-flex">
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
