import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Dropdown, DropdownItem, DropdownMenu, Input, Label, Nav, NavItem, Row, TabContent, TabPane } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Href, Search } from "../../../Constants/Constants";
import { HomeTabData, PropertyHomeSliderSetting } from "../../../Data/Demo/PropertyDemo1";
import { HomeNavData } from "../../../Data/Demo/PropertyDemo2";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, dynamicNumber, Image } from "../../../Utils";
import RangeInputFields from "../../Property/Common/GridView/Filter/RangeInputFields";

const PropertyHomeSection = () => {
  const [basicTab, setBasicTab] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: number]: boolean }>({});
  const [selectedCity, setSelectedCity] = useState(["Enter Keyword...", "Enter Location", "Enter Property Type", "Enter Your Price"]);

  const toggle = (title: number) => setDropdownOpen((prevState) => ({ [title]: !prevState[title] }));
  const handleSelect = (index: number, value: any) => setSelectedCity((prev) => prev.map((item, i) => (i === index ? value.title : item)));

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
                  {HomeNavData.slice(0, 2).map((item, index) => (
                    <NavItem>
                      <Button className={`nav-link ${basicTab === item.id ? "active" : ""}`} color="transparent" onClick={() => setBasicTab(item.id)} key={index}>
                        {item.title}
                        <i className="ri-arrow-right-line" />
                      </Button>
                    </NavItem>
                  ))}
                </Nav>
                <TabContent activeTab={basicTab}>
                  {dynamicNumber(2).map((item, index) => (
                    <TabPane className={`fade ${basicTab === item ? "show" : ""}`} tabId={item} key={index}>
                      <ul className="tab-list">
                        {HomeTabData.map((item, index) => (
                          <li className="tab-item" key={index}>
                            <div className="label-flex">
                              {item.icon}
                              <Label>{item.label}</Label>
                            </div>
                            <Dropdown className="select-dropdown" isOpen={dropdownOpen[index]} toggle={() => toggle(index)}>
                              <div className="select-button" onClick={() => toggle(index)}>
                                <Input type="text" placeholder={selectedCity[index]} readOnly />
                              </div>
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
