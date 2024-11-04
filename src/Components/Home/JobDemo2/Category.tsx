import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BrowseByCategory } from "../../../Constants/Constants";
import { BrowseByCategoryContent, Job2CategorySetting } from "../../../Data/Demo/JobDemo2";
import { useAppSelector } from "../../../ReduxToolkit/Hooks";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicSvg, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";

const Category = () => {
  const { categoryItem } = useAppSelector((state) => state.product);

  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.init();
  }, []);
  return (
    <section className="category-dark-section bg-transparent job-category-section">
      <Container>
        <CommonHeader title={BrowseByCategory} content={BrowseByCategoryContent} headClass="title-style-4" />
        <div className="job-arrow position-relative">
          <Swiper {...Job2CategorySetting} className="dark-category-slider" onInit={(swiper: SwiperType) => (swiperRef.current = swiper)}>
            {categoryItem
              .filter((e) => [14, 15, 16, 17, 18, 19, 20, 21].includes(e.id))
              .map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="category-box">
                    <div className="category-icon">
                      <Image src={dynamicSvg(item.categoryImage)} alt="c-1" className="img-fluid" />
                    </div>
                    <div className="category-title">
                      <Link to={RouteList.Job.Grid.JobLeftSidebar}>
                        <h5>{item.label}</h5>
                      </Link>
                      <span>{item.jobList}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          <div className="swiper-button-next dark-category-next" />
          <div className="swiper-button-prev dark-category-prev" />
        </div>
      </Container>
    </section>
  );
};

export default Category;
