import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { JobCitiesTitle } from "../../../Constants/Constants";
import { JobCitiesData, JobCitiesSwiperSetting } from "../../../Data/Demo/JobDemo3";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, Image } from "../../../Utils";

const JobCities = () => {
  return (
    <section className="job3-category section-b-space">
      <Container>
        <div className="detail-flex-title">
          <h2 className="text-white">{JobCitiesTitle}</h2>
          <div className="swiper-flex car-arrow">
            <div className="swiper-button-prev job-category-prev">
              <ArrowLeft2 className="iconsax" />
            </div>
            <div className="swiper-button-next job-category-next">
              <ArrowRight2 className="iconsax" />
            </div>
          </div>
        </div>
        <Swiper {...JobCitiesSwiperSetting}>
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
  );
};

export default JobCities;
