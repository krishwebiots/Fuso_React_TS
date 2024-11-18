import { useState } from "react";
import { Button, Container, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { OfferTitle } from "../../../Constants/Constants";
import { OfferContentData } from "../../../Data/Demo/CarDemo1";
import { useAppSelector } from "../../../ReduxToolkit/Hooks";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicSvg, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";
import CarProductBox1 from "../../CommonComponents/ProductBox/CarProductBox1";

const Offer = () => {
  const [activeTab, setActiveTab] = useState("honda");
  const { productItem, categoryItem } = useAppSelector((state) => state.product);

  return (
    <section className="car-offer-section car-product-section section-b-space bg-color">
      <Container>
        <CommonHeader title={OfferTitle} content={OfferContentData} headClass="title-style-2" animation />
        <Nav pills>
          {categoryItem
            .filter((e) => [1, 2, 3, 4, 5, 6, 7].includes(e.id))
            .map((tab, index) => (
              <NavItem key={index}>
                <Button className={`nav-link${tab.value === activeTab ? " active" : ""}`} onClick={() => setActiveTab(tab.value)}>
                  <Image src={dynamicSvg(tab.categoryLogo)} alt={tab.label} className="img-fluid" />
                  {tab.label}
                </Button>
              </NavItem>
            ))}
          <NavItem>
            <NavLink href={RouteList.Car.Grid.Car3Grid}>More 10+</NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          {categoryItem
            .filter(({ id }) => [1, 2, 3, 4, 5, 6, 7].includes(id))
            .map((item, index) => (
              <TabPane className={`fade ${activeTab === item.value ? "show" : ""}`} tabId={item.value} key={index}>
                <Swiper slidesPerView={4} spaceBetween={30} autoplay={{ delay: 2500, disableOnInteraction: false }} modules={[Autoplay]} className="car-tab-slider ratio_65">
                  {productItem
                    .filter(({ category }) => category?.includes(activeTab))
                    .map((item, index) => (
                      <SwiperSlide key={index}>
                        <CarProductBox1 data={item} />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </TabPane>
            ))}
        </TabContent>
      </Container>
    </section>
  );
};

export default Offer;
