import { Container } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { dynamicImage, dynamicNumber, Image } from "../../../Utils";

const LogoSection = () => {
  return (
    <section className="logo-section section-t-lg-space">
      <Container>
        <Swiper slidesPerView={5} spaceBetween={30} loop={true} className="logo-car2-slider">
          {dynamicNumber(6).map((item, index) => (
            <SwiperSlide key={index}>
              <div className="logo-img">
                <Image src={dynamicImage(`job/logo/${item}.png`)} alt={`g-${item}`} className="img-fluid" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default LogoSection;
