import { FC, Fragment, useEffect, useState } from "react";
import ScrollSpy from "react-ui-scrollspy";
import { Col, Container, Nav, NavItem, NavLink, Row } from "reactstrap";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Sections, StickySliderFor, StickySliderNav } from "../../../../Data/Property";
import { useAppDispatch } from "../../../../ReduxToolkit/Hooks";
import { fetchProductApiData } from "../../../../ReduxToolkit/Reducers/ProductReducers";
import { PropertyDetailType } from "../../../../Types/ProductType";
import { dynamicImage, dynamicNumber } from "../../../../Utils";
import RatioImage from "../../../../Utils/RatioImage";
import UseStickyBar from "../../../../Utils/UseStickyBar";
import DetailBody from "./DetailBody";
import DetailImages from "./DetailImages";
import DetailSidebar from "./DetailSidebar";
import MainDetail from "./MainDetail";
import RelatedProduct from "./RelatedProduct";

const PropertyDetail: FC<PropertyDetailType> = ({ type, mainClass, thumb }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const dispatch = useAppDispatch();

  const fix = UseStickyBar(300);

  useEffect(() => {
    dispatch(fetchProductApiData());
  }, [dispatch]);
  return (
    <div className={`property-detail-section section-b-space ${mainClass ? mainClass : ""}`}>
      {type === "sidebar-layout" ? (
        <Container className="p-sm-0">
          <div className="detail-images">
            <RatioImage src={dynamicImage("property/detail-main/1.jpg")} alt="sidebar-layout" className="img-fluid bg-img" />
          </div>
          <Container>
            <Row>
              <Col xl="9" lg="8">
                <MainDetail />
                <DetailBody type={type} />
              </Col>
              <DetailSidebar />
            </Row>
            <RelatedProduct type="property" />
          </Container>
        </Container>
      ) : type === "sticky" ? (
        <Container className="p-sm-0">
          <div className={`sticky-tab sticky-header ${fix ? "sticky" : ""}`} id="stickyTab">
            <Nav tabs>
              {Sections.map(({ id, label }) => (
                <NavItem key={id}>
                  <NavLink data-to-scrollspy-id={id} href={`#${id}`}>
                    {label}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </div>
          <Row className="gx-xxl-5 gy-4 gy-xl-0">
            <Col xl="6">
              <div className="detail-images">
                <Row>
                  <Col md="2" className="order-md-0 order-1">
                    <Swiper {...StickySliderNav} direction={"vertical"} onSwiper={setThumbsSwiper} className="sub-vertical-image ratio_asos">
                      {dynamicNumber(9).map((data, i) => (
                        <SwiperSlide tag="a" className="detail-sub-image bg-size" key={i}>
                          <RatioImage src={dynamicImage(`property/detail-main/${data}.jpg`)} className="img-fluid bg-img" alt="image" />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </Col>
                  <Col md="10">
                    <Swiper {...StickySliderFor} direction={"vertical"} thumbs={{ swiper: thumbsSwiper }} className="main-vertical-image ratio_asos">
                      {dynamicNumber(9).map((data, i) => (
                        <SwiperSlide className="detail-main-image bg-size" key={i}>
                          <RatioImage src={dynamicImage(`property/detail-main/${data}.jpg`)} className="img-fluid bg-img" alt="image" />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xl="6">
              <ScrollSpy activeClass="active" updateHistoryStack={false} scrollThrottle={100}>
                <DetailBody type={type} />
              </ScrollSpy>
            </Col>
            <RelatedProduct type="property" />
          </Row>
        </Container>
      ) : (
        <Fragment>
          <div className="detail-images">
            <Container fluid={thumb ? true : false} className={thumb ? "p-0" : ""}>
              <DetailImages type={type} thumb={thumb} />
            </Container>
          </div>
          <Container>
            <MainDetail />
            <Row>
              <Col xl="9" lg="8">
                <DetailBody type={type} />
              </Col>
              <DetailSidebar />
            </Row>
            <RelatedProduct type="property" />
          </Container>
        </Fragment>
      )}
    </div>
  );
};

export default PropertyDetail;
