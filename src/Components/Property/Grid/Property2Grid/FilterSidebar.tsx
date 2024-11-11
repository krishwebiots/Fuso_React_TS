import { ChangeEvent, useState } from "react";
import { Amenities, BhkOptions, PropertyTypeData } from "../../../../Data/Property/Grid";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setBedsRooms, setPropertyType, setAmenities, setSquareFeetStatus } from "../../../../ReduxToolkit/Reducers/FilterReducers";

const FilterSidebar = () => {
  const dispatch = useAppDispatch();
  const { propertyType, bedsRooms, amenities, squareFeetStatus } = useAppSelector((state) => state.filter);
  const [squareFeet, setSquareFeet] = useState({ min: squareFeetStatus.min, max: squareFeetStatus.max });

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

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
  };

  const handleBhkOptions = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) dispatch(setBedsRooms([...bedsRooms, value]));
    else dispatch(setBedsRooms(bedsRooms.filter((selectedValue) => selectedValue !== value)));
  };

  const handleAmenities = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) dispatch(setAmenities([...amenities, value]));
    else dispatch(setAmenities(amenities.filter((selectedValue) => selectedValue !== value)));
  };

  const handleSquareFeet = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSquareFeet((prev) => ({
      ...prev,
      [name]: value,
    }));
    dispatch(setSquareFeetStatus({ min: squareFeet.min, max: squareFeet.max }));
  };

  return (
    <div className="col-xl-3 filter-sidebar">
      <div className="property-sidebar">
        <div className="sidebar-title-flex">
          <h5>Filter</h5>
          <a href="#!" className="close-btn">
            <i className="ri-close-line" />
          </a>
        </div>
        <div className="accordion" id="accordionSidebar">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-one" aria-expanded="true" aria-controls="accordion-one">
                Property Type
              </button>
            </h2>
            <div id="accordion-one" className="accordion-collapse collapse show">
              <div className="accordion-body">
                <ul className="most-rating">
                  {PropertyTypeData.map((item, index) => (
                    <li key={index}>
                      <input type="checkbox" id={item.id} value={item.type} checked={propertyType.includes(item.type)} onChange={handleCheckboxChange} />
                      <label htmlFor={item.id}>
                        <span>{item.label}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-two" aria-expanded="true" aria-controls="accordion-two">
                PRICE range
              </button>
            </h2>
            <div id="accordion-two" className="accordion-collapse collapse show">
              <div className="accordion-body">
                <div className="range-slider">
                  <input type="range" min={0} max={120000} step={1} defaultValue={20000} className="range-slider-input" />
                  <input type="range" min={0} max={120000} step={1} defaultValue={100000} className="range-slider-input" />
                  <div className="range-slider-display" />
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-three" aria-expanded="true" aria-controls="accordion-three">
                beds rooms
              </button>
            </h2>
            <div id="accordion-three" className="accordion-collapse collapse show">
              <div className="accordion-body">
                <ul className="most-rating scroll-box">
                  {BhkOptions.map((bhk, index) => (
                    <li key={index}>
                      <input type="checkbox" id={`bed-${index + 1}`} value={bhk} checked={bedsRooms.includes(bhk)} onChange={handleBhkOptions} />
                      <label htmlFor={`bed-${index + 1}`}>
                        <span>{bhk}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-five" aria-expanded="true" aria-controls="accordion-five">
                Square Feet
              </button>
            </h2>
            <div id="accordion-five" className="accordion-collapse collapse show">
              <div className="accordion-body">
                <div className="main-number">
                  <div className="input-number range-number">
                    <input type="number" placeholder="Min" name="min" className="form-control" value={squareFeet.min} onChange={handleSquareFeet} />
                  </div>
                  -
                  <div className="input-number range-number">
                    <input type="number" placeholder="Max" name="max" className="form-control" value={squareFeet.max} onChange={handleSquareFeet} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-six" aria-expanded="true" aria-controls="accordion-six">
                Year Built
              </button>
            </h2>
            <div id="accordion-six" className="accordion-collapse collapse show">
              <div className="accordion-body">
                <div className="main-number">
                  <div className="input-number range-number">
                    <input type="number" placeholder={"2019"} className="form-control" />
                  </div>
                  -
                  <div className="input-number range-number">
                    <input type="number" placeholder={"2022"} className="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-seven" aria-expanded="true" aria-controls="accordion-seven">
                Amenities
              </button>
            </h2>
            <div id="accordion-seven" className="accordion-collapse collapse show">
              <div className="accordion-body">
                <ul className="most-rating scroll-box">
                  {Amenities.map((item, index) => (
                    <li key={index}>
                      <input type="checkbox" id={`service-${index + 1}`} value={item} checked={amenities.includes(item)} onChange={handleAmenities} />
                      <label htmlFor={`service-${index + 1}`}>
                        <span>{item}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
