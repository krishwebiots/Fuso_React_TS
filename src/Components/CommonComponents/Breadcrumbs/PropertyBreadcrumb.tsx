import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Dropdown, DropdownItem, DropdownMenu, Input, Label, TabContent, TabPane } from "reactstrap";
import { Href, Search } from "../../../Constants/Constants";
import { HomeTabData } from "../../../Data/Demo/PropertyDemo1";
import { RouteList } from "../../../Routers/RouteList";
import RangeInputFields from "../../Property/Common/GridView/Filter/RangeInputFields";

const PropertyBreadcrumb = () => {
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: number]: boolean }>({});
  const [selectedCity, setSelectedCity] = useState(["Hollowland", "Apartment", "Apartment", "$ 50,000  To  $ 1,20,000"]);

  const toggle = (title: number) => setDropdownOpen((prevState) => ({ [title]: !prevState[title] }));
  const handleSelect = (index: number, value: any) => setSelectedCity((prev) => prev.map((item, i) => (i === index ? value.title : item)));
  return (
    <div className="breadcrumbs-section">
      <Container>
        <div className="breadcrumbs-main">
          <div className="property-home-tab">
            <TabContent>
              <TabPane className="fade show">
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
            </TabContent>
          </div>
        </div>
      </Container>
      <div id="particles-js" className="breadcrumbs-particles" />
    </div>
  );
};

export default PropertyBreadcrumb;
