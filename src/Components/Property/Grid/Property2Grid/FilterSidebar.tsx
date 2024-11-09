import { PropertyTypeData } from "../../../../Data/Property/Grid";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setPropertyType } from "../../../../ReduxToolkit/Reducers/FilterReducers";

const FilterSidebar = () => {
  const dispatch = useAppDispatch();
  const { propertyType } = useAppSelector((state) => state.filter);

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
                  {PropertyTypeData.map(({ id, label, count, type }) => (
                    <li key={id}>
                      <input type="checkbox" id={id} checked={propertyType.includes("all") ? true : propertyType.includes(type)} onChange={() => dispatch(setPropertyType(type))} />
                      <label htmlFor={id}>
                        <span>{label}</span>
                        <span>{count}</span>
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
                  <li>
                    <input type="checkbox" id="bed-one" />
                    <label htmlFor="bed-one">
                      <span>1 BHK</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="bed-two" />
                    <label htmlFor="bed-two">
                      <span>2 BHK</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="bed-three" />
                    <label htmlFor="bed-three">
                      <span>3 BHK</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="bed-four" />
                    <label htmlFor="bed-four">
                      <span>4 BHK</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="bed-five" />
                    <label htmlFor="bed-five">
                      <span>5 BHK</span>
                    </label>
                  </li>
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
                    <input type="number" placeholder="Min" className="form-control" />
                  </div>
                  -
                  <div className="input-number range-number">
                    <input type="number" placeholder="Max" className="form-control" />
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
                  <li>
                    <input type="checkbox" id="service-one" />
                    <label htmlFor="service-one">
                      <span>Air Conditioning</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="service-two" />
                    <label htmlFor="service-two">
                      <span>Doorman</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="service-three" />
                    <label htmlFor="service-three">
                      <span>Family Room</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="service-four" />
                    <label htmlFor="service-four">
                      <span>Parking</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="service-five" />
                    <label htmlFor="service-five">
                      <span>Waterfront</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="service-six" />
                    <label htmlFor="service-six">
                      <span>Onsite Parking</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="service-seven" />
                    <label htmlFor="service-seven">
                      <span>Fireplace</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="service-eight" />
                    <label htmlFor="service-eight">
                      <span>Hardwood Flows</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="service-nine" />
                    <label htmlFor="service-nine">
                      <span>Dishwasher</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="service-ten" />
                    <label htmlFor="service-ten">
                      <span>Dining Room</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="service-eleven" />
                    <label htmlFor="service-eleven">
                      <span>Cleaning Service</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="service-twelve" />
                    <label htmlFor="service-twelve">
                      <span>Central Heating</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="service-thirteen" />
                    <label htmlFor="service-thirteen">
                      <span>Unit Washer/Dryer</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="service-fourteen" />
                    <label htmlFor="service-fourteen">
                      <span>Pets Allowed</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="service-fifteen" />
                    <label htmlFor="service-fifteen">
                      <span>Wifi</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="service-sixteen" />
                    <label htmlFor="service-sixteen">
                      <span>TV Cable</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="service-seventeen" />
                    <label htmlFor="service-seventeen">
                      <span>Microwave</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="service-eighteen" />
                    <label htmlFor="service-eighteen">
                      <span>Refrigerator</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="service-nineteen" />
                    <label htmlFor="service-nineteen">
                      <span>TV Cable</span>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="service-twenty" />
                    <label htmlFor="service-twenty">
                      <span>Gym</span>
                    </label>
                  </li>
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
