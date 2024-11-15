import React, { useState } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, Label, Row, TabContent, TabPane } from "reactstrap";
import { Href, Search } from "../../../Constants/Constants";
import { HomeTabData, JobCounterData, JobHomeSectionData } from "../../../Data/Demo/JobDemo1";
import { RouteList } from "../../../Routers/RouteList";
import { JobHomeType } from "../../../Types/HomeDemo";
import { dynamicGrf, dynamicImage, dynamicSvg, Image } from "../../../Utils";
import RangeInputFields from "../../Property/Common/GridView/Filter/RangeInputFields";

const JobHomeSection = () => {
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: number]: boolean }>({});
  const [selectedCity, setSelectedCity] = useState(["Enter Keyword...", "Enter Category Type", "Enter Job Type", "Enter Salary"]);

  const toggle = (title: number) => setDropdownOpen((prevState) => ({ [title]: !prevState[title] }));

  const handleSelect = (index: number, value: any) => setSelectedCity((prev) => prev.map((item, i) => (i === index ? value.title : item)));

  const renderImage: React.FC<JobHomeType> = (imageData, key) => {
    const src = imageData.type === "svg" ? dynamicSvg(imageData.image) : dynamicImage(imageData.image);
    return <Image key={key} src={src} alt={imageData.image} className={`img-fluid ${imageData.class || ""}`} />;
  };

  return (
    <div className="job-home-section">
      <Container>
        <div className="home-block-space">
          <Row className="align-items-center">
            <Col xl="7" lg="6">
              <div className="home-content">
                <h3>Build your future with us</h3>
                <h1>Find your job &amp; make sure goal.</h1>
                <p>Your dream job is waiting for you Find the best real estate on your country Your dream job is waiting for you Find the best real estate on your country</p>
                <ul className="counter-list">
                  {JobCounterData.map((item, index) => (
                    <li className="counter-box" key={index}>
                      <div className="counter-info">
                        <h3>
                          <CountUp end={item.end} className="counter-count" delay={0} />
                          {item.suffix}
                        </h3>
                        <h4>{item.label}</h4>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col xl="5" lg="6">
              <div className="home-img">
                {JobHomeSectionData.map((item, index) => {
                  if ("meanClass" in item) {
                    return (
                      <div key={index} className={item.meanClass}>
                        {item.multipleImage.map((imgData, imgIndex) => {
                          if ("childrenClass" in imgData) {
                            return (
                              <div key={imgIndex} className={imgData.childrenClass}>
                                {imgData.childrenImage.map((childImg, childIndex) => renderImage(childImg, childIndex))}
                              </div>
                            );
                          }
                          return renderImage(imgData, imgIndex);
                        })}
                      </div>
                    );
                  }
                  return renderImage(item, index);
                })}
              </div>
            </Col>
          </Row>
        </div>
        <div className="property-home-tab car-home-tab job-home-tab">
          <TabContent>
            <TabPane className="fade show active">
              <ul className="tab-list">
                {HomeTabData.map((item, index) => (
                  <li className="tab-item" key={index}>
                    <div className="label-flex">
                      {item.icon}
                      <Label>{item.label}</Label>
                    </div>
                    <Dropdown isOpen={dropdownOpen[index]} toggle={() => toggle(index)}>
                      <DropdownToggle color="" className="select-button">
                        <Input type="text" placeholder={selectedCity[index]} readOnly />
                      </DropdownToggle>
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
                  <Link to={RouteList.Job.Grid.JobLeftSidebar} className="btn-solid">
                    {Search}
                  </Link>
                </li>
                <li className="scroll-down tab-item">
                  <Image src={dynamicGrf("mouse-animation.gif")} alt="mouse-animation" className="img-fluid" />
                </li>
              </ul>
            </TabPane>
          </TabContent>
        </div>
      </Container>
    </div>
  );
};

export default JobHomeSection;
