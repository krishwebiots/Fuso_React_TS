import { SearchNormal1 } from "iconsax-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Dropdown, DropdownMenu, DropdownToggle, Input, Row } from "reactstrap";
import { Href, Search } from "../../../Constants/Constants";
import { Cities } from "../../../Data/Demo/JobDemo2";
import { JobCategoriesScrollData, JobHomeIcon, SelectExperienceData } from "../../../Data/Demo/JobDemo3";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, dynamicNumber, dynamicSvg, Image } from "../../../Utils";

const JobHomeSection = () => {
  const [selectedCity, setSelectedCity] = useState(["Select Experience", "Select Location"]);
  const [dropdownOpen, setDropdownOpen] = useState([false, false]);

  const toggleDropdown = (index: number) => setDropdownOpen((prev) => prev.map((isOpen, i) => (i === index ? !isOpen : isOpen)));
  const handleSelect = (index: number, value: string) => setSelectedCity((prev) => prev.map((item, i) => (i === index ? value : item)));

  useEffect(() => {
    const handleScroll = () => {
      const translateAngle = window.pageYOffset * 0.15;

      const translateObjectsRight = document.querySelectorAll(".scroll-quote .marquee");
      const translateObjectsLeft = document.querySelectorAll(".reverse-quote .marquee");

      translateObjectsRight.forEach((object) => ((object as HTMLElement).style.transform = `translateX(${translateAngle}px)`));
      translateObjectsLeft.forEach((object) => ((object as HTMLElement).style.transform = `translateX(-${translateAngle}px)`));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="job3-home-section bg-size" style={{ backgroundImage: `url(${dynamicImage("job-3/bg-effect/home-bg-effect.png")})` }}>
      <ul className="home-icons">
        {JobHomeIcon.map((item, index) => (
          <li key={index}>
            <div className="job-bg-icon">
              <Image src={dynamicSvg(`job/job-box/${item}.svg`)} alt={`ji-${item}`} className="img-fluid" />
            </div>
          </li>
        ))}
      </ul>
      <Image src={dynamicImage("job-3/bg-effect/home-bg-effect.png")} className="bg-img" style={{ display: "none" }} />
      <Container>
        <Row className="justify-content-center">
          <Col xll="8" xl="9" lg="10">
            <div className="home-content">
              <h1 className="text-white">Find your Next Job and Make your Own Goal</h1>
              <p>Discover trusted job opportunities tailored to your skills and aspirations. Join our community and let us guide you towards success.</p>
              <div className="search-input-home">
                <div className="icon-search">
                  <SearchNormal1 />
                  <Input type="text" placeholder="Enter skills / Companies" />
                </div>
                {dynamicNumber(2).map((item, index) => (
                  <Dropdown isOpen={dropdownOpen[index]} toggle={() => toggleDropdown(index)} className={`select-dropdown d-md-inline-block d-none ${item === 2 ? "full-dropdown" : ""}`} key={index}>
                    <DropdownToggle caret className="select-button" color="transparent">
                      {selectedCity[index]}
                    </DropdownToggle>
                    <DropdownMenu>
                      {item === 1 ? (
                        <ul className="select-menu">
                          {SelectExperienceData.map((list, idx) => (
                            <li key={idx}>
                              <Link className={`select-item ${list === selectedCity[index] ? "active" : ""}`} to={Href} onClick={() => handleSelect(index, list)}>
                                {list}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <Row>
                          {Cities.map((cityGroup, idx) => (
                            <Col xl="4" sm="6" key={idx}>
                              <ul className="select-menu">
                                {cityGroup.map((city, idx) => (
                                  <li key={idx}>
                                    <Link className={`select-item ${city === selectedCity[index] ? "active" : ""}`} to={Href} onClick={() => handleSelect(index, city)}>
                                      {city}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </Col>
                          ))}
                        </Row>
                      )}
                    </DropdownMenu>
                  </Dropdown>
                ))}
                <Link to={RouteList.Job.Grid.JobLeftSidebar} className="btn-solid">
                  {Search}
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {JobCategoriesScrollData.map((item, index) => (
        <div className={item.class} key={index}>
          <ul className="marquee">
            {item.scrollData.map((data, index) => (
              <li className="marquee-pill" key={index}>
                <Image src={dynamicSvg(`job/category/${data.image}.svg`)} alt={data.title} className="img-fluid" />
                <h6>{data.title}</h6>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default JobHomeSection;
