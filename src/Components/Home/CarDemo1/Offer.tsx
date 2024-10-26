import { useState } from "react";
import { Button, Container, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { OfferTitle } from "../../../Constants/Constants";
import { OfferContentData, OfferTabs } from "../../../Data/Demo/CradDemo1";
import { AllData } from "../../../Data/Demo/Product";
import { RouteList } from "../../../Routers/RouteList";
import { Image } from "../../../Utils";
import CarProductCard from "../Common/CarProductCard";
import CommonHeader from "../Common/CommonHeader";

const Offer = () => {
  const [activeTab, setActiveTab] = useState("honda");

  return (
    <section className="car-offer-section car-product-section section-b-space bg-color">
      <Container>
        <CommonHeader title={OfferTitle} content={OfferContentData} headClass="title-style-2" animation />
        <Nav pills>
          {OfferTabs.map((tab, index) => (
            <NavItem key={index}>
              <Button className={`nav-link${tab.id === activeTab ? " active" : ""}`} onClick={() => setActiveTab(tab.id)}>
                <Image src={tab.imgSrc} alt={tab.label} className="img-fluid" />
                {tab.label}
              </Button>
            </NavItem>
          ))}
          <NavItem>
            <NavLink to={RouteList.Car.Grid.Car3Grid}>More 10+</NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane className={`fade ${activeTab === "honda" ? "show" : ""}`} tabId={"honda"}>
            <Swiper slidesPerView={4} spaceBetween={30} autoplay={{ delay: 2500, disableOnInteraction: false }} modules={[Autoplay]} loop={true} className="car-tab-slider ratio_65">
              {AllData.map((item, index) => (
                <SwiperSlide key={index}>
                  <CarProductCard data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </TabPane>
        </TabContent>
      </Container>
    </section>
  );
};

export default Offer;
