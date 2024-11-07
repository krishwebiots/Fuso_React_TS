import { Container } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { LogoSectionType } from "../../../Types/HomeDemo";
import { dynamicImage, dynamicNumber, Image } from "../../../Utils";

const LogoSection: React.FC<LogoSectionType> = ({ sectionClass, swiperClass, title }) => {
  return (
    <section className={`logo-section ${sectionClass ? sectionClass : ""}`}>
      <Container>
        {title && <h3 className="text-center">{title}</h3>}
        <Swiper slidesPerView={5} spaceBetween={30} loop={true} className={swiperClass}>
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
