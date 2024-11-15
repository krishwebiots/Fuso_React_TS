import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Dropdown, DropdownItem, DropdownMenu, Input, Label, Nav, NavLink, TabContent, TabPane } from "reactstrap";
import { CarRental, Href, Rental, Search } from "../../../Constants/Constants";
import { CarHomeSliderSettings, HomeTabData } from "../../../Data/Demo/CarDemo1";
import { HomeNavData } from "../../../Data/Demo/PropertyDemo2";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicGrf, dynamicImage, dynamicNumber, Image } from "../../../Utils";
import RangeInputFields from "../../Property/Common/GridView/Filter/RangeInputFields";

const CarHomeSection = () => {
  const [basicTab, setBasicTab] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: number]: boolean }>({});
  const [selectedCity, setSelectedCity] = useState(["Enter Keyword...", "Enter Location", "Enter Car Type", "Enter Your Price"]);

  const toggle = (title: number) => setDropdownOpen((prevState) => ({ [title]: !prevState[title] }));
  const handleSelect = (index: number, value: any) => setSelectedCity((prev) => prev.map((item, i) => (i === index ? value.title : item)));
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
            {HomeNavData.slice(0, 2).map((item, index) => (
              <NavLink className={basicTab === item.id ? "active" : ""} color="transparent" onClick={() => setBasicTab(item.id)} key={index}>
                {item.title}
                <i className="ri-arrow-right-line" />
              </NavLink>
            ))}
          </Nav>
          <TabContent activeTab={basicTab}>
            {dynamicNumber(3).map((item, index) => (
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
                    <Link to={RouteList.Car.Grid.Car3Grid} className="btn-solid">
                      {Search}
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
