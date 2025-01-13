import { ArrowLeft2, ArrowRight2, Play } from "iconsax-react";
import { FC, useEffect, useState } from "react";
import { Button, Col, Container, Nav, NavItem, NavLink, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Href, VideoTitle } from "../../../Constants/Constants";
import { CraNavDetailsData, DetailSimpleSlider } from "../../../Data/Property";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { fetchProductApiData } from "../../../ReduxToolkit/Reducers/ProductReducers";
import { setVideoModal } from "../../../ReduxToolkit/Reducers/LayoutReducers";
import { CarDetailType } from "../../../Types/ProductType";
import { dynamicImage, dynamicNumber } from "../../../Utils";
import RatioImage from "../../../Utils/RatioImage";
import UseStickyBar from "../../../Utils/UseStickyBar";
import DetailBody from "./DetailBody";
import DetailImages from "./DetailImages";
import DetailSidebar from "./DetailSidebar";
import RelatedProduct from "./RelatedProduct";

const CarDetail: FC<CarDetailType> = ({ detailImages, type, scrollspy, classicSlider }) => {
  const [activeTab, setActiveTab] = useState(CraNavDetailsData[0].id);
  const dispatch = useAppDispatch();
  const fix = UseStickyBar(300);

  const toggle = (id: string) => {
    setActiveTab(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    dispatch(fetchProductApiData());
  }, [dispatch]);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 20;

      CraNavDetailsData.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="section-b-space car-detail-section">
      <Container>
        {detailImages && (
          <div className="car-detail-image">
            <DetailImages type="car_detail" />
          </div>
        )}
        <Row className="custom-row">
          <Col lg="9">
            {scrollspy && (
              <div className={`sticky-nav ${fix ? "sticky" : ""}`}>
                <Nav pills>
                  {CraNavDetailsData.map(({ id, label }) => (
                    <NavItem key={id} onClick={() => toggle(id)}>
                      <NavLink className={`${activeTab === id ? "active" : ""}`} href={`#${id}`}>
                        {label}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
              </div>
            )}
            {classicSlider && (
              <div className="car-detail-image position-relative">
                <Swiper {...DetailSimpleSlider} className="detail-simple-slider ratio2_3">
                  {dynamicNumber(9).map((item) => (
                    <SwiperSlide key={item}>
                      <a href={Href} className="car-slider-img bg-size">
                        <RatioImage src={dynamicImage(`car/product/${item}.jpg`)} alt="d-1" className="img-fluid bg-img" />
                      </a>
                    </SwiperSlide>
                  ))}
                  <div className="swiper-button-next">
                    <ArrowLeft2 className="iconsax" />
                  </div>
                  <div className="swiper-button-prev">
                    <ArrowRight2 className="iconsax" />
                  </div>
                </Swiper>
                <Button className="video-modal-btn" onClick={() => dispatch(setVideoModal())}>
                  <Play className="iconsax" />
                  {VideoTitle}
                </Button>
              </div>
            )}
            <div className="car-detail-right">{scrollspy ? <DetailBody type={type} /> : <DetailBody type={type} />}</div>
          </Col>
          <DetailSidebar type={type} />
        </Row>
        <RelatedProduct type={type} />
      </Container>
    </div>
  );
};

export default CarDetail;
