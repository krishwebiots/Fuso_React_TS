import { Fragment } from "react/jsx-runtime";
import { Col, Container, Row } from "reactstrap";
import { AboutTitle, OurFeaturedProperties } from "../../../Constants/Constants";
import { AboutContent, AboutListData } from "../../../Data/Demo/PropertyDemo1";
import { useAppSelector } from "../../../ReduxToolkit/Hooks";
import { dynamicGrf, dynamicSvg, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";
import PropertyCard from "../Common/PropertyCard";
import { RouteList } from "../../../Routers/RouteList";

const AboutUsAndPropertyFeature = () => {
  const { productItem } = useAppSelector((state) => state.product);
  return (
    <Fragment>
      <section className="property-about-section section-b-space">
        <Container>
          <Row className="align-items-center gy-lg-0 gy-4">
            <Col lg="6" className="order-lg-0 order-1">
              <div className="about-img">
                <Image src={dynamicGrf("p-about.gif")} alt="about-img" className="img-fluid" />
              </div>
            </Col>
            <Col lg="6">
              <div className="about-content">
                <CommonHeader title={AboutTitle} content={AboutContent} headClass="title-style-1" />
                <ul className="about-list">
                  {AboutListData.map((item, index) => (
                    <li key={index}>
                      <Image src={dynamicSvg("property/about-us/arrow-5.svg")} alt="about-arrow" className="img-fluid" />
                      <h4>{item}</h4>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="property-featured-section section-b-space bg-color">
        <Container>
          <CommonHeader title={OurFeaturedProperties} headClass="title-style-1" subClass="horizontal-title" url={RouteList.Property.Grid.Property3Grid} view />
          <Row className="gy-4 ratio_landscape">
            {productItem
              .filter(({ id }) => [29, 30, 31, 32, 33, 34, 35, 36].includes(id))
              .map((item, index) => (
                <Col xxl="3" lg="4" sm="6" data-aos="fade-up" data-aos-duration={200 * (index + 1)} key={index}>
                  <PropertyCard data={item} />
                </Col>
              ))}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default AboutUsAndPropertyFeature;
