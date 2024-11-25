import { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Dropdown, DropdownMenu, DropdownToggle, Input, Row } from "reactstrap";
import { Href, Search } from "../../../Constants/Constants";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, dynamicNumber, Image } from "../../../Utils";
import LogoSection from "../Common/LogoSection";
import CitySelectMenu from "../../CommonComponents/CitySelectMenu";
import { Cities } from "../../../Data/Demo/JobDemo2";

const JobHomeSection = () => {
  const [selectedCity, setSelectedCity] = useState("Location");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const homeMoveRef = useRef<NodeListOf<HTMLLIElement> | null>(null);
  const layerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const ivalueX = (e.pageX * -1) / 60;
      const ivalueY = (e.pageY * -1) / 60;
      const cvalueX = (e.pageX * -1) / 80;
      const cvalueY = (e.pageY * -1) / 90;

      homeMoveRef.current?.forEach((item) => {
        item.style.transform = `translate3d(${ivalueX}px, ${ivalueY}px, 0)`;
        item.style.transform = `translate3d(${cvalueX}px, ${cvalueY}px, 0)`;
      });
    };

    const layerElement = layerRef.current;
    if (layerElement) layerElement.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (layerElement) layerElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    homeMoveRef.current = document.querySelectorAll(".dark-job-img li");
  }, []);

  return (
    <Fragment>
      <div ref={layerRef} className="dark-job-home">
        <Container>
          <ul className="dark-job-img">
            {dynamicNumber(7).map((item, index) => (
              <li key={index}>
                <Image src={dynamicImage(`dark-job/home-img/${item}.jpg`)} alt={`b-${item}`} className="img-fluid" data-aos="zoom-in" />
              </li>
            ))}
          </ul>
          <Row className="justify-content-center">
            <Col lg="8">
              <div className="home-content">
                <div>
                  <h1>Find your Next Job and Make your Own Goal</h1>
                  <p>Discover trusted job opportunities tailored to your skills and aspirations. Join our community and let us guide you towards success.</p>
                  <div className="search-input-home">
                    <div className="animated-line-section">
                      <span className="animated-line" />
                      <span className="animated-line" />
                    </div>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle} className="select-dropdown">
                      <DropdownToggle caret color="transparent" className="select-button">
                        {selectedCity}
                      </DropdownToggle>
                      <DropdownMenu>
                        <Row>
                          {Cities.map((cityList, i) => (
                            <CitySelectMenu key={i} multiColumn cityList={cityList} selectedCity={selectedCity} onSelectCity={(city) => setSelectedCity(city)} href={Href} />
                          ))}
                        </Row>
                      </DropdownMenu>
                    </Dropdown>
                    <Input type="text" />
                    <Link to={RouteList.Job.Grid.JobLeftSidebar} className="btn-pills">
                      {Search}
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <LogoSection type={"job_demo2"} />
    </Fragment>
  );
};

export default JobHomeSection;
