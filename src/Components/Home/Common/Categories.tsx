import { FC, Fragment } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { BrowseByCategory, CategoriesTitle, ExploreByCategory, JobCategoryTitle } from "../../../Constants/Constants";
import { CategoriesContentData, CategoriesSettingData } from "../../../Data/Demo/CarDemo1";
import { JobCategoryContentData } from "../../../Data/Demo/JobDemo1";
import { BrowseByCategoryContent, Job2CategorySetting } from "../../../Data/Demo/JobDemo2";
import { useAppSelector } from "../../../ReduxToolkit/Hooks";
import { RouteList } from "../../../Routers/RouteList";
import { PropsType } from "../../../Types/HomeDemoType";
import { dynamicImage, dynamicSvg, Image } from "../../../Utils";
import RatioImage from "../../../Utils/RatioImage";
import CommonHeader from "../Common/CommonHeader";

const Categories: FC<PropsType> = ({ type }) => {
  const { categoryItem } = useAppSelector((state) => state.product);
  return (
    <Fragment>
      {/* Car Demo-1 */}
      {type === "car_demo1" && (
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
      )}

      {/* Car Demo-2 */}
      {type === "car_demo2" && (
        <section className="car2-category-section section-t-lg-space section-b-lg-space">
          <Container>
            <CommonHeader title={ExploreByCategory} content={CategoriesContentData} headClass="title-style-2" />
            <div className="arrow-style-2 position-relative">
              <Swiper {...CategoriesSettingData} className="car2-category-slider ratio3_2">
                {categoryItem
                  .filter((e) => [8, 9, 10, 11, 12, 13].includes(e.id))
                  .map((car, index) => (
                    <SwiperSlide key={index}>
                      <div className="category-box">
                        <Link to={RouteList.Car.Grid.Car3Grid} className="category-img">
                          <RatioImage src={dynamicImage(car.categoryImage)} alt={`car-${index + 1}`} className="img-fluid bg-img" />
                        </Link>
                        <Link to={RouteList.Car.Grid.Car3Grid} className="category-title">
                          {car.label}
                        </Link>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
              <div className="swiper-button-next car2-category-next" />
              <div className="swiper-button-prev car2-category-prev" />
            </div>
          </Container>
        </section>
      )}

      {/* Job Demo-1 */}
      {type === "job_demo1" && (
        <section className="job-category-section section-b-space">
          <Container>
            <CommonHeader title={JobCategoryTitle} content={JobCategoryContentData} headClass="title-style-3 text-center" />
            <Row className="gy-4">
              {categoryItem
                .filter((e) => [14, 15, 16, 17, 18, 19, 20, 21].includes(e.id))
                .map((item, index) => (
                  <Col xl="3" lg="4" sm="6" key={index}>
                    <div className="category-box">
                      <Image src={dynamicSvg("job/job-box/dots-category.svg")} alt="dots-category" className="img-fluid dot-img" />
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
                  </Col>
                ))}
            </Row>
          </Container>
        </section>
      )}

      {/* Job Demo-2 */}
      {type === "job_demo2" && (
        <section className="category-dark-section bg-transparent job-category-section">
          <Container>
            <CommonHeader title={BrowseByCategory} content={BrowseByCategoryContent} headClass="title-style-4" />
            <div className="job-arrow position-relative">
              <Swiper {...Job2CategorySetting} className="dark-category-slider">
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
      )}

      {/* Property Demo-1 */}
      {type === "property_demo1" && (
        <section className="property-categories-section section-b-space bg-color">
          <Container>
            <CommonHeader title={CategoriesTitle} headClass="title-style-1" />
            <Row className="row-cols-xl-5 row-cols-sm-3 row-cols-2 justify-content-center gy-xl-0 g-3">
              {categoryItem
                .filter((e) => [29, 30, 31, 32, 33].includes(e.id))
                .map((item, index) => (
                  <Col key={index}>
                    <Link to={RouteList.Property.Grid.Property3Grid} className="categories-box">
                      <Image src={dynamicImage(item.categoryImage)} alt="categories" className="img-fluid" />
                      <div className="categories-box-border">
                        <div className="icon-name">
                          <h5>{item.label}</h5>
                        </div>
                      </div>
                    </Link>
                  </Col>
                ))}
            </Row>
          </Container>
        </section>
      )}

      {/* Property Demo-2 */}
      {type === "property_demo2" && (
        <section className="section-t-lg-space property2-categories-section">
          <Container>
            <CommonHeader title={CategoriesTitle} headClass="title-style-1 title-style-6" />
            <Row className="gy-xl-0 gy-md-4 g-3 justify-content-center">
              {categoryItem
                .filter(({ id }) => [34, 35, 36, 37].includes(id))
                .map((item, index) => (
                  <Col lg="3" xs="6" key={index}>
                    <Link to={RouteList.Property.Grid.Property3Grid} className="categories-box">
                      <Image src={dynamicImage(item.categoryImage)} alt="c-1" className="img-fluid w-100" />
                      <div className="categories-info">
                        <h4>{item.label}</h4>
                        <h6>{item.propertyList}</h6>
                      </div>
                    </Link>
                  </Col>
                ))}
            </Row>
          </Container>
        </section>
      )}
    </Fragment>
  );
};

export default Categories;
