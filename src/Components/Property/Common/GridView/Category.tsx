import { Container } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Href } from "../../../../Constants/Constants";
import { CarCategoryData, CategoryInnerSlider } from "../../../../Data/Car";
import { dynamicSvg, Image } from "../../../../Utils";

const Category = () => {
  return (
    <div className="category-inner-section">
      <Container>
        <Swiper className="category-inner-slider" {...CategoryInnerSlider}>
          {CarCategoryData.map((item, index) => (
            <SwiperSlide key={index}>
              <a href={Href} className="category-box">
                <div className="category-icon">
                  <Image src={dynamicSvg(`car/category/${index + 1}.svg`)} alt="Sedan" className="img-fluid" />
                </div>
                <h5>{item}</h5>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Category;
