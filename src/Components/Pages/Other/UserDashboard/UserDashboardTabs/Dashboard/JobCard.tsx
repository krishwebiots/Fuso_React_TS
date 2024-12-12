import { Col } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { UserJobSwiper } from "../../../../../../Data/Pages/Other";
import { useAppSelector } from "../../../../../../ReduxToolkit/Hooks";
import JobProductBox2 from "../../../../../CommonComponents/ProductBox/JobProductBox2";

const JobCard = () => {
  const { productItem } = useAppSelector((state) => state.product);
  return (
    <Col xl="7">
      <Swiper className="user-job-swiper job-hire-section" {...UserJobSwiper}>
        {productItem
          .filter(({ type }) => type === "job")
          .map((job, index) => (
            <SwiperSlide key={index}>
              <JobProductBox2 data={job} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Col>
  );
};

export default JobCard;
