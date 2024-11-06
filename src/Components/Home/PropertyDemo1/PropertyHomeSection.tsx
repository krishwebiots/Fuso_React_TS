import { useState } from "react";
import { getTrackBackground, Range } from "react-range";
import { Link } from "react-router-dom";
import { Button, Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, Nav, NavItem, Row, TabContent, TabPane } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Href, MAX, MIN, Search, STEP } from "../../../Constants/Constants";
import { DropdownData } from "../../../Data/Demo/CarDemo1";
import { PropertyHomeSliderSetting } from "../../../Data/Demo/PropertyDemo1";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, dynamicNumber, Image } from "../../../Utils";

const PropertyHomeSection = () => {
  const [basicTab, setBasicTab] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(Array(DropdownData.length).fill(false));
  const [values, setValues] = useState([20000, 100000]);

  const toggle = (index: number) => setDropdownOpen(dropdownOpen.map((item, i) => (i === index ? !item : item)));
  return (
    <div className="property-home-section">
      <Container>
        <Row className="m-auto g-0">
          <Col xl="10" lg="11">
            <div className="home-content">
              <h1>Discover suitable real estate for your family</h1>
              <p>This is where you may locate a dream place for you of any sort anywhere in the world at an inexpensive price.</p>
              <Link to={RouteList.Property.Grid.Property3Grid} className="btn-solid btn-border">
                Discover more
              </Link>
              <div className="property-home-tab">
                <Nav tabs>
                  <NavItem>
                    <Button className={`nav-link ${basicTab === 1 ? "active" : ""}`} color="transparent" onClick={() => setBasicTab(1)}>
                      Buy
                      <i className="ri-arrow-right-line" />
                    </Button>
                  </NavItem>
                  <NavItem>
                    <Button className={`nav-link ${basicTab === 2 ? "active" : ""}`} color="transparent" onClick={() => setBasicTab(2)}>
                      Rent
                      <i className="ri-arrow-right-line" />
                    </Button>
                  </NavItem>
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
                          <Link to={RouteList.Property.Grid.Property3Grid} className="btn-solid">
                            {Search}
                          </Link>
                        </li>
                      </ul>
                    </TabPane>
                  ))}
                </TabContent>
              </div>
            </div>
          </Col>
          <div className="property-home-img">
            <Swiper {...PropertyHomeSliderSetting} className="property-home-slider">
              {dynamicNumber(3).map((item, index) => (
                <SwiperSlide key={index}>
                  <Image src={dynamicImage(`property/home/${item}.jpg`)} alt={`h-${item}`} className="img-fluid" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default PropertyHomeSection;
