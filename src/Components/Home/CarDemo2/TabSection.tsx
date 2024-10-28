import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import { Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { Href } from "../../../Constants/Constants";
import { DropdownData } from "../../../Data/Demo/CarDemo2";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicNumber } from "../../../Utils";

const TabSection = () => {
  const [basicTab, setBasicTab] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(Array(DropdownData.length).fill(false));
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const toggle = (index: number) => setDropdownOpen(dropdownOpen.map((item, i) => (i === index ? !item : item)));
  return (
    <Container>
      <div className="property-home-tab car2-home-tab">
        <Nav tabs>
          <NavItem>
            <NavLink className={basicTab === 1 ? "active" : ""} onClick={() => setBasicTab(1)}>
              Buy
              <i className="ri-arrow-right-line" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={basicTab === 2 ? "active" : ""} onClick={() => setBasicTab(2)}>
              Rent
              <i className="ri-arrow-right-line" />
            </NavLink>
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
                        {dropdownItems ? (
                          dropdownItems.map((item, i) => (
                            <DropdownItem key={i} href={Href}>
                              {item}
                            </DropdownItem>
                          ))
                        ) : (
                          <DropdownItem href={Href}>
                            <ReactDatePicker className="form-control flatpickr-input" selected={startDate} onChange={(date: Date | null) => setStartDate(date)} />
                          </DropdownItem>
                        )}
                      </DropdownMenu>
                    </Dropdown>
                  </li>
                ))}
                <li className="tab-item">
                  <Link to={RouteList.Car.Grid.Car3Grid} className="btn-pills">
                    Search
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
