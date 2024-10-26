import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { CategoriesTitle } from "../../../Constants/Constants";
import { CategoriesContentData, CategoriesData, CategoriesSettingData } from "../../../Data/Demo/CradDemo1";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";

const Categories = () => {
  return (
    <section className="car-categories-section bg-color section-t-lg-space">
      <Container>
        <CommonHeader title={CategoriesTitle} content={CategoriesContentData} headClass="title-style-2" animation />
        <Swiper {...CategoriesSettingData} className="car-categories-slider">
          {CategoriesData.map((car, index) => (
            <SwiperSlide key={index}>
              <div className="categories-box">
                <Link to={RouteList.Car.Listing.CarLeftList} className="categories-img">
                  <Image src={dynamicImage(`car/category/${car.img}`)} alt={`car-${index + 1}`} className="img-fluid" />
                </Link>
                <div className="categories-board">
                  <span>{car.name}</span>
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
