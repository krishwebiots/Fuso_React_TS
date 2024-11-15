import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Dropdown, DropdownItem, DropdownMenu, Input, Nav, NavItem, Row, TabContent, TabPane } from "reactstrap";
import { Href } from "../../../Constants/Constants";
import { HomeNavData, HomeTabData } from "../../../Data/Demo/PropertyDemo2";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, dynamicNumber } from "../../../Utils";
import RatioImage from "../../../Utils/RatioImage";
import RangeInputFields from "../../Property/Common/GridView/Filter/RangeInputFields";
import LogoSection from "../Common/LogoSection";

const PropertyHomeSection = () => {
  const [basicTab, setBasicTab] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(Array(HomeTabData.length).fill(false));
  const [selectedCity, setSelectedCity] = useState(["Enter Keyword...", "Property Type", "Location", "Pricing"]);

  const toggle = (index: number) => setDropdownOpen(dropdownOpen.map((item, i) => (i === index ? !item : item)));
  const handleSelect = (index: number, value: any) => setSelectedCity((prev) => prev.map((item, i) => (i === index ? value.title : item)));

  return (
    <div className="property2-section overflow-hidden">
      <RatioImage src={dynamicImage("property2/home-img.jpg")} alt="home-img" className="bg-img" />
      <Container>
        <Row className="justify-content-between align-items-center gy-lg-0 gy-4">
          <Col lg="7">
            <div className="home-content">
              <h1>
                Discover suitable <span>real estate</span> for your family
              </h1>
              <p>This is where you may locate a dream place for you of any sort anywhere in the world at an inexpensive price.</p>
            </div>
          </Col>
          <Col xxl="4" lg="5">
            <div className="home-form-box">
              <Nav pills>
                {HomeNavData.map((item, index) => (
                  <NavItem key={index}>
                    <Button className={`nav-link ${basicTab === item.id ? "active" : ""}`} color="transparent" onClick={() => setBasicTab(item.id)}>
                      {item.title}
                    </Button>
                  </NavItem>
                ))}
              </Nav>
              <TabContent activeTab={basicTab}>
                {dynamicNumber(3).map((item, index) => (
                  <TabPane className={`fade ${basicTab === item ? "show" : ""}`} tabId={item} key={index}>
                    <ul className="home-form">
                      {HomeTabData.map((item, index) => (
                        <li className="input-box" key={index}>
                          <Dropdown className={item.id !== 1 ? "select-dropdown" : ""} isOpen={dropdownOpen[index]} toggle={() => toggle(index)}>
                            {item.id === 1 ? (
                              <Input type="search" placeholder={selectedCity[index]} onClick={() => toggle(index)} />
                            ) : (
                              <div color="" className="select-button" onClick={() => toggle(index)}>
                                {selectedCity[index]}
                              </div>
                            )}
                            <DropdownMenu className={`select-menu ${item.id === 4 ? "home-range" : ""}`}>
                              {item.dropdownMenu ? (
                                item.dropdownMenu?.map((list, idx) => (
                                  <DropdownItem key={idx}>
                                    <a className={item.id === 1 ? "dropdown-item" : "select-item"} href={Href} onClick={() => handleSelect(index, list)}>
                                      {list.icon ? list.icon : ""}
                                      {index === 1 ? <h6>{list.title}</h6> : list.title}
                                    </a>
                                  </DropdownItem>
                                ))
                              ) : (
                                <RangeInputFields />
                              )}
                            </DropdownMenu>
                          </Dropdown>
                        </li>
                      ))}
                      <li className="input-box select-button">
                        <Input type="text" placeholder="Advanced" readOnly />
                      </li>
                      <li>
                        <Link to={RouteList.Property.Grid.Property3Grid} className="btn-solid property2-change">
                          Find Now
                        </Link>
                      </li>
                    </ul>
                  </TabPane>
                ))}
              </TabContent>
            </div>
          </Col>
        </Row>
      </Container>
      <LogoSection swiperClass="logo-car2-slider" />
    </div>
  );
};

export default PropertyHomeSection;
