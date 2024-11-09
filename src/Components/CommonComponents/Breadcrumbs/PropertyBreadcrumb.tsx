import { useState } from "react";
import { getTrackBackground, Range } from "react-range";
import { Link } from "react-router-dom";
import { Container, Dropdown, DropdownItem, DropdownMenu, Input, Label, TabContent, TabPane } from "reactstrap";
import { Href, MAX, MIN, Search, STEP } from "../../../Constants/Constants";
import { HomeTabData } from "../../../Data/Demo/PropertyDemo1";
import { RouteList } from "../../../Routers/RouteList";

const PropertyBreadcrumb = () => {
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: number]: boolean }>({});
  const [values, setValues] = useState([20000, 100000]);
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
                            <div className="range-slider">
                              <Range
                                values={values}
                                step={STEP}
                                min={MIN}
                                max={MAX}
                                onChange={(values) => setValues(values)}
                                renderTrack={({ props, children }) => (
                                  <div
                                    onMouseDown={props.onMouseDown}
                                    onTouchStart={props.onTouchStart}
                                    className="range-track"
                                    style={{
                                      ...props.style,
                                      height: "5px",
                                      width: "100%",
                                      borderRadius: "4px",
                                      background: getTrackBackground({
                                        values: values,
                                        colors: ["#ccc", "var(--theme-default2)", "#ccc"],
                                        min: MIN || 1000,
                                        max: MAX || 10000,
                                      }),
                                      alignSelf: "center",
                                    }}
                                  >
                                    <input type="range" defaultValue={values[0]} className="range-slider-input" />
                                    <div ref={props.ref} className="range-slider-display">
                                      {children}
                                    </div>
                                    <input type="range" defaultValue={values[1]} className="range-slider-input" />
                                  </div>
                                )}
                                renderThumb={({ props, index }) => {
                                  const { key, ...restProps } = props;
                                  const prop = { ...restProps };
                                  return (
                                    <div key={index} {...prop}>
                                      <div
                                        style={{
                                          height: "16px",
                                          width: "8px",
                                          borderRadius: "30%",
                                        }}
                                      />
                                    </div>
                                  );
                                }}
                              />
                            </div>
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
