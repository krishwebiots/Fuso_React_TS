import { useState } from "react";
import { getTrackBackground, Range } from "react-range";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, Nav, NavLink, TabContent, TabPane } from "reactstrap";
import { CarRental, Href, MAX, MIN, Rental, STEP } from "../../../Constants/Constants";
import { CarHomeSliderSettings, DropdownData } from "../../../Data/Demo/CarDemo1";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicGrf, dynamicImage, dynamicNumber, Image } from "../../../Utils";

const CarHomeSection = () => {
  const [basicTab, setBasicTab] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(Array(DropdownData.length).fill(false));
  const [values, setValues] = useState([20000, 100000]);

  const toggle = (index: number) => setDropdownOpen(dropdownOpen.map((item, i) => (i === index ? !item : item)));
  return (
    <div className="car-home-section">
      <div className="home-section-box">
        <div className="home-content">
          <h3>{CarRental}</h3>
          <h1>{Rental}</h1>
        </div>
        <div className="home-img-slider">
          <Slider {...CarHomeSliderSettings} className="car-slider-main">
            {dynamicNumber(3).map((item, index) => (
              <div className="main-car-img" key={index}>
                <Image src={dynamicImage(`car/home-img/${item}.png`)} className="img-fluid" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="property-home-tab car-home-tab">
        <div className="car-tab-flex">
          <Nav pills>
            <NavLink className={basicTab === 1 ? "active" : ""} onClick={() => setBasicTab(1)}>
              Buy
              <i className="ri-arrow-right-line" />
            </NavLink>
            <NavLink className={basicTab === 2 ? "active" : ""} onClick={() => setBasicTab(2)}>
              Rent
              <i className="ri-arrow-right-line" />
            </NavLink>
          </Nav>
          <TabContent activeTab={basicTab}>
            {dynamicNumber(2).map((item, index) => (
              <TabPane className={`fade ${basicTab === item ? "show" : ""}`} tabId={item} key={index}>
                <ul className="tab-list">
                  {DropdownData.map(({ icon, label, dropdownItems }, index) => (
                    <li className="tab-item" key={index}>
                      <div className="label-flex">
                        {icon}
                        <label>{label}</label>
                      </div>
                      <Dropdown isOpen={dropdownOpen[index]} toggle={() => toggle(index)}>
                        <DropdownToggle color="" className="select-button">
                          <Input type="text" placeholder="Enter Keyword..." readOnly />
                        </DropdownToggle>
                        <DropdownMenu className="select-menu">
                          {dropdownItems &&
                            dropdownItems.map((item, i) =>
                              typeof item === "string" ? (
                                <DropdownItem key={i} href={Href}>
                                  {item}
                                </DropdownItem>
                              ) : (
                                <DropdownItem key={i} href={Href}>
                                  <i className={item.icon} />
                                  <h6>{item.label}</h6>
                                </DropdownItem>
                              )
                            )}
                          {index === 3 && (
                            <DropdownItem href={Href}>
                              <div className="range-slider">
                                <Range
                                  values={values}
                                  step={STEP}
                                  min={MIN}
                                  max={MAX}
                                  onChange={(values) => setValues(values)}
                                  renderTrack={({ props, children }) => (
                                    <div onMouseDown={props.onMouseDown} onTouchStart={props.onTouchStart} className="range-track">
                                      <output className="range-slider-input">{values[0]}</output>
                                      <div ref={props.ref} className="range-slider-display" style={{ background: getTrackBackground({ values, colors: ["#ccc", "var(--content-color)", "#ccc"], min: MIN, max: MAX }) }}>
                                        {children}
                                      </div>
                                      <output className="range-slider-input">{values[1]}</output>
                                    </div>
                                  )}
                                  renderThumb={({ props, index }) => <div {...props} key={index} className="price-range-thumb" style={{ ...props.style, backgroundColor: "var(--content-color)" }}></div>}
                                />
                              </div>
                            </DropdownItem>
                          )}
                        </DropdownMenu>
                      </Dropdown>
                    </li>
                  ))}
                  <li className="tab-item">
                    <Link to={RouteList.Car.Grid.Car3Grid} className="btn-solid">
                      Search
                    </Link>
                  </li>
                </ul>
              </TabPane>
            ))}
          </TabContent>
          <Link to={Href} className="scroll-down">
            <Image src={dynamicGrf("mouse-animation.gif")} alt="mouse-animation" className="img-fluid" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarHomeSection;
