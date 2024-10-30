import React, { useState } from "react";
import CountUp from "react-countup";
import { getTrackBackground, Range } from "react-range";
import { Link } from "react-router-dom";
import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, Row, TabContent, TabPane } from "reactstrap";
import { Href, MAX, MIN, STEP } from "../../../Constants/Constants";
import { DropdownData } from "../../../Data/Demo/CarDemo1";
import { JobCounterData, JobHomeSectionData } from "../../../Data/Demo/JobDemo1";
import { RouteList } from "../../../Routers/RouteList";
import { JobHomeType } from "../../../Types/HomeDemo";
import { dynamicGrf, dynamicImage, dynamicSvg, Image } from "../../../Utils";

const JobHomeSection = () => {
  const [dropdownOpen, setDropdownOpen] = useState(Array(DropdownData.length).fill(false));
  const [values, setValues] = useState([20000, 100000]);

  const toggle = (index: number) => setDropdownOpen(dropdownOpen.map((item, i) => (i === index ? !item : item)));

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
                  <Link to={RouteList.Job.Grid.JobLeftSidebar} className="btn-solid">
                    Search
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
