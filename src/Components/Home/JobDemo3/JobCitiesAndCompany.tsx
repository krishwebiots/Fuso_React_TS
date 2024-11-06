import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { Fragment, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { Swiper as SwiperType } from "swiper";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { ApplyNow, JobCities, TopRatedCompany } from "../../../Constants/Constants";
import { JobCitiesData, JobCitiesSwiperSetting, RatedJobData, TopRatedCompanyContent } from "../../../Data/Demo/JobDemo3";
import { useAppSelector } from "../../../ReduxToolkit/Hooks";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, dynamicSvg, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";
import SvgIcon from "../Common/SvgIcon";

const JobCitiesAndCompany = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const { productItem } = useAppSelector((state) => state.product);

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.init();
  }, []);
  return (
    <Fragment>
      <section className="job3-category section-b-space">
        <Container>
          <div className="detail-flex-title">
            <h2 className="text-white">{JobCities}</h2>
            <div className="swiper-flex car-arrow">
              <div className="swiper-button-prev job-category-prev">
                <ArrowLeft2 />
              </div>
              <div className="swiper-button-next job-category-next">
                <ArrowRight2 />
              </div>
            </div>
          </div>
          <Swiper {...JobCitiesSwiperSetting} onInit={(swiper: SwiperType) => (swiperRef.current = swiper)}>
            {JobCitiesData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="category-box">
                  <Link to={RouteList.Job.Grid.JobLeftSidebar} className="category-img">
                    <Image src={dynamicImage(`job-3/category/${item.image}`)} alt="c-1" className="img-fluid" />
                  </Link>
                  <Link to={RouteList.Job.Grid.JobLeftSidebar} className="d-block">
                    <h4>{item.title}</h4>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
      <section className="rated-job-section position-relative overflow-x-hidden">
        {RatedJobData.map((item, index) => (item.type === "png" ? <Image src={dynamicImage(item.image)} alt="o-1" className={`img-fluid ${item.class}`} key={index} /> : <Image src={dynamicSvg(item.image)} alt="o-1" className={`img-fluid ${item.class}`} key={index} />))}
        <Container>
          <CommonHeader title={TopRatedCompany} content={TopRatedCompanyContent} headClass="title-style-5" />
          <Swiper pagination={true} slidesPerView={4} spaceBetween={30} modules={[Pagination]} className="job3-box-slider">
            {productItem
              .filter(({ id }) => [16, 17, 18, 19, 20, 21, 22].includes(id))
              .map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="company-job-box">
                    <div className="company-logo">
                      {item.image.map((imgSrc, idx) => (
                        <Image src={dynamicSvg(imgSrc)} alt={`job-${idx}`} className="img-fluid" key={idx} />
                      ))}
                    </div>
                    <div className="company-content">
                      <Link to={RouteList.Job.Grid.JobLeftSidebar} className="d-block company-job-title">
                        <h5>{item.company}</h5>
                      </Link>
                      <ul className="hire-list">
                        <li>
                          <SvgIcon iconId="property/sprite/star.svg#star-svg" />
                          {item.rating}
                        </li>
                        <li>{item.location}</li>
                      </ul>
                      <Link to={RouteList.Job.Grid.JobLeftSidebar} className="d-block">
                        <h5>{item.title}</h5>
                      </Link>
                      <Link to={RouteList.Pages.Other.ContactUs1} className="btn-solid">
                        {ApplyNow}
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </Container>
      </section>
    </Fragment>
  );
};

export default JobCitiesAndCompany;
