import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { CategoriesTitle } from "../../../Constants/Constants";
import { CategoriesContentData, CategoriesSettingData } from "../../../Data/Demo/CarDemo1";
import { useAppSelector } from "../../../ReduxToolkit/Hooks";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";

const Categories = () => {
  const { categoryItem } = useAppSelector((state) => state.product);
  return (
    <section className="car-categories-section bg-color section-t-lg-space">
      <Container>
        <CommonHeader title={CategoriesTitle} content={CategoriesContentData} headClass="title-style-2" animation />
        <Swiper {...CategoriesSettingData} className="car-categories-slider">
          {categoryItem
            .filter((e) => [1, 2, 3, 4, 5, 6, 7].includes(e.id))
            .map((car, index) => (
              <SwiperSlide key={index}>
                <div className="categories-box">
                  <Link to={RouteList.Car.Listing.CarLeftList} className="categories-img">
                    <Image src={dynamicImage(car.categoryImage)} alt={`car-${index + 1}`} className="img-fluid" />
                  </Link>
                  <div className="categories-board">
                    <span>{car.label}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Categories;
