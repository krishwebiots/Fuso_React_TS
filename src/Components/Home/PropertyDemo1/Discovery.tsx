import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { DiscoveryTitle } from "../../../Constants/Constants";
import { DiscoverySliderData } from "../../../Data/Demo/PropertyDemo1";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";

const Discovery = () => {
  return (
    <section className="section-b-space property-discovery-section">
      <Container>
        <CommonHeader title={DiscoveryTitle} headClass="title-style-1 dark-title" />
        <Swiper slidesPerView={5} spaceBetween={30} loop={true} className="discovery-slider">
          {DiscoverySliderData.map((property, index) => (
            <SwiperSlide key={index}>
              <Link to={RouteList.Property.Grid.Property3Grid} className="discovery-img">
                <Image src={dynamicImage(`property/discovery/${property.img}`)} alt={`${property.location}-img`} className="img-fluid" />
                <div className="discovery-content">
                  <h5>{property.location}</h5>
                  <ul>
                    <li>
                      <span>{property.sale} Sale</span>
                    </li>
                    <li>
                      <span>{property.rent} Rent</span>
                    </li>
                  </ul>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Discovery;
