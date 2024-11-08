import { useState } from "react";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import { Container, Dropdown, DropdownItem, DropdownMenu, Input, Label, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { Href, Search } from "../../../Constants/Constants";
import { DropdownData } from "../../../Data/Demo/CarDemo2";
import { HomeNavData } from "../../../Data/Demo/PropertyDemo2";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicNumber } from "../../../Utils";
import { format } from "date-fns";

const TabSection = () => {
  const [basicTab, setBasicTab] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: number]: boolean }>({});
  const [selectedCity, setSelectedCity] = useState(["Select your Location", "Choose your Date", "Choose your Date"]);
  const [startDate, setStartDate] = useState<Date | any>(new Date());

  const handleSelect = (index: number, value: any) => setSelectedCity((prev) => prev.map((item, i) => (i === index ? value.title || value : item)));
  const handleChange = (date: Date | any, index: number) => {
    setStartDate(date);
    handleSelect(index, format(date, "MM/dd/yyyy"));
  };

  const toggle = (title: number) => setDropdownOpen((prevState) => ({ [title]: !prevState[title] }));
  return (
    <Container>
      <div className="property-home-tab car2-home-tab">
        <Nav tabs>
          {HomeNavData.slice(0, 2).map((item, index) => (
            <NavItem key={index}>
              <NavLink className={basicTab === item.id ? "active" : ""} color="transparent" onClick={() => setBasicTab(item.id)} key={index}>
                {item.title}
                <i className="ri-arrow-right-line" />
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <TabContent activeTab={basicTab}>
          {dynamicNumber(2).map((item, index) => (
            <TabPane className={`fade ${basicTab === item ? "show" : ""}`} tabId={item} key={index}>
              <ul className="tab-list">
                {DropdownData.map((item, index) => (
                  <li className="tab-item" key={index}>
                    <div className="label-flex">
                      {item.icon}
                      <Label>{item.label}</Label>
                    </div>
                    <Dropdown isOpen={dropdownOpen[index]} toggle={() => toggle(index)}>
                      <div className="select-button" onClick={() => toggle(index)}>
                        <Input type="text" placeholder={selectedCity[index]} readOnly />
                      </div>
                      <DropdownMenu className="select-menu">
                        {item.dropdownMenu ? (
                          item.dropdownMenu.map((item, i) => (
                            <DropdownItem key={i} href={Href} onClick={() => handleSelect(index, item)}>
                              {item.title}
                            </DropdownItem>
                          ))
                        ) : (
                          <DropdownItem href={Href}>
                            <DatePicker selected={startDate} onChange={(date) => handleChange(date, index)} inline />
                          </DropdownItem>
                        )}
                      </DropdownMenu>
                    </Dropdown>
                  </li>
                ))}
                <li className="tab-item">
                  <Link to={RouteList.Car.Grid.Car3Grid} className="btn-pills">
                    {Search}
                  </Link>
                </li>
              </ul>
            </TabPane>
          ))}
        </TabContent>
      </div>
    </Container>
  );
};

export default TabSection;
