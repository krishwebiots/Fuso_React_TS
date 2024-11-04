import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { Swiper as SwiperType } from "swiper"; // Import Swiper type
import { Swiper, SwiperSlide } from "swiper/react";
import { ExploreByCategory } from "../../../Constants/Constants";
import { CategoriesContentData, CategoriesSettingData } from "../../../Data/Demo/CarDemo2";
import { useAppSelector } from "../../../ReduxToolkit/Hooks";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";

const Category = () => {
  const { categoryItem } = useAppSelector((state) => state.product);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.init();
  }, []);
  return (
    <section className="car2-category-section section-t-lg-space section-b-lg-space">
      <Container>
        <CommonHeader title={ExploreByCategory} content={CategoriesContentData} headClass="title-style-2" />
        <div className="arrow-style-2 position-relative">
          <Swiper {...CategoriesSettingData} className="car2-category-slider ratio3_2" onInit={(swiper: SwiperType) => (swiperRef.current = swiper)}>
            {categoryItem
              .filter((e) => [8, 9, 10, 11, 12, 13].includes(e.id))
              .map((car, index) => (
                <SwiperSlide key={index}>
                  <div className="category-box">
                    <Link to={RouteList.Car.Grid.Car3Grid} className="category-img bg-size" style={{ backgroundImage: `url(${dynamicImage(car.categoryImage)})` }}>
                      <Image src={dynamicImage(car.categoryImage)} alt={`car-${index + 1}`} className="img-fluid" style={{ display: "none" }} />
                    </Link>
                    <Link to={RouteList.Car.Grid.Car3Grid} className="category-title">
                      {car.label}
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            <div className="swiper-button-next car2-category-next" />
            <div className="swiper-button-prev car2-category-prev" />
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Category;
