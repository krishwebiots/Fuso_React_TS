import { format } from "date-fns";
import { FC, Fragment, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import { Button, Dropdown, DropdownItem, DropdownMenu, Input, Label, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { Href, Search } from "../../../Constants/Constants";
import { HomeTabData } from "../../../Data/Demo/CarDemo1";
import { HomeNavData } from "../../../Data/Demo/PropertyDemo2";
import { RouteList } from "../../../Routers/RouteList";
import { SearchTabListType } from "../../../Types/HomeDemo";
import { dynamicGrf, dynamicNumber, Image } from "../../../Utils";
import RangeInputFields from "../../Property/Common/GridView/Filter/Common/RangeInputFields";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { setSearchModal } from "../../../ReduxToolkit/Reducers/SidebarReducers";

const SearchTabList: FC<SearchTabListType> = ({ showTab, datePicker, scrollDown, form, pills, endPoint, tabs, showNav, button, icon }) => {
  const [startDate, setStartDate] = useState<Date | any>(new Date());
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: number]: boolean }>({});
  const [selected, setSelected] = useState(HomeTabData);
  const [basicTab, setBasicTab] = useState(1);
  const dispatch = useAppDispatch();

  const toggle = (title: number) => setDropdownOpen((prevState) => ({ [title]: !prevState[title] }));
  const handleSelect = (id: number, value: any) => setSelected((prev) => prev.map((item) => (item.id === id ? { ...item, inputLabel: value } : item)));
  const handleChange = (date: Date | any, id: number) => {
    setStartDate(date);
    handleSelect(id, format(date, "MM/dd/yyyy"));
  };
  useEffect(() => {
    setSelected(HomeTabData.filter(({ id }) => showTab?.includes(id)));
  }, [showTab]);

  return (
    <Fragment>
      {!showNav && (
        <Nav pills={pills} tabs={tabs}>
          {HomeNavData.slice(0, endPoint || 3).map((item, index) =>
            datePicker ? (
              <NavItem key={index}>
                <NavLink className={basicTab === item.id ? "active" : ""} color="transparent" onClick={() => setBasicTab(item.id)} key={index}>
                  {item.title}
                  {!icon && <i className="ri-arrow-right-line" />}
                </NavLink>
              </NavItem>
            ) : button ? (
              <NavItem key={index}>
                <Button className={`nav-link ${basicTab === item.id ? "active" : ""}`} color="transparent" onClick={() => setBasicTab(item.id)} key={index}>
                  {item.title}
                  {!icon && <i className="ri-arrow-right-line" />}
                </Button>
              </NavItem>
            ) : (
              <NavLink className={basicTab === item.id ? "active" : ""} color="transparent" onClick={() => setBasicTab(item.id)} key={index}>
                {item.title}
                {!icon && <i className="ri-arrow-right-line" />}
              </NavLink>
            )
          )}
        </Nav>
      )}
      <TabContent activeTab={basicTab}>
        {dynamicNumber(form ? 3 : 2).map((item, index) => (
          <TabPane className={`fade ${basicTab === item ? "show" : ""}`} tabId={item} key={index}>
            <ul className={form ? "home-form" : "tab-list"}>
              {selected.map((item, index) => (
                <li className={form ? "input-box" : "tab-item"} key={index}>
                  {!form && (
                    <div className="label-flex">
                      {item.icon}
                      <Label>{item.label}</Label>
                    </div>
                  )}
                  <Dropdown className="select-dropdown" isOpen={dropdownOpen[index]} toggle={() => toggle(index)}>
                    {item.id === 1 ? (
                      <Input type="search" placeholder={item.inputLabel} onClick={() => toggle(index)} />
                    ) : (
                      <div className="select-button" onClick={() => toggle(index)}>
                        {form ? item.inputLabel : <Input type="text" placeholder={item.inputLabel} readOnly />}
                      </div>
                    )}
                    <DropdownMenu className={`select-menu ${item.id === 11 ? "home-range" : ""}`}>
                      {item.dropdownMenu ? (
                        item.dropdownMenu?.map((list, idx) => (
                          <DropdownItem key={idx} onClick={() => handleSelect(item.id, list.title)}>
                            <a className={item.id === 1 ? "dropdown-item" : "select-item"} href={Href}>
                              {list.icon ? list.icon : ""}
                              {index === 1 ? <h6>{list.title}</h6> : list.title}
                            </a>
                          </DropdownItem>
                        ))
                      ) : datePicker ? (
                        <DropdownItem href={Href}>
                          <DatePicker selected={startDate} onChange={(date) => handleChange(date, item.id)} inline />
                        </DropdownItem>
                      ) : (
                        <RangeInputFields />
                      )}
                    </DropdownMenu>
                  </Dropdown>
                </li>
              ))}
              {form && (
                <li className="input-box select-button" onClick={() => dispatch(setSearchModal())}>
                  <Input type="text" placeholder="Advanced" readOnly />
                </li>
              )}
              <li className="tab-item">
                <Link to={RouteList.Car.Grid.Car3Grid} className={`btn-solid ${form ? "property2-change" : ""}`}>
                  {Search}
                </Link>
              </li>
              {scrollDown && (
                <li className="scroll-down tab-item">
                  <Image src={dynamicGrf("mouse-animation.gif")} alt="mouse-animation" className="img-fluid" />
                </li>
              )}
            </ul>
          </TabPane>
        ))}
      </TabContent>
    </Fragment>
  );
};

export default SearchTabList;
