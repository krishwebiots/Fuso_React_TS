import { FC, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { useAppDispatch } from "../../../../ReduxToolkit/Hooks";
import { fetchProductApiData } from "../../../../ReduxToolkit/Reducers/ProductReducers";
import DetailSidebar from "./DetailSidebar";
import RelatedProduct from "./RelatedProduct";
import JobDescriptionBox from "./DetailBody/DetailBodyItem/JobDescriptionBox";
import { AboutTheRole, CanApply, JobLike } from "../../../../Constants/Constants";
import { AboutTheRoleData, CanApplyData, JobLikeData } from "../../../../Data/Job";
import { JobDetailType } from "../../../../Types/ProductType";
import MainDetail from "./MainDetail";
import Benefits from "./DetailBody/DetailBodyItem/Benefits";

const JobDetail: FC<JobDetailType> = ({ type }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
  }, [dispatch]);
  return (
    <section className={`job-detail-section section-b-space ${type === "style_2" ? "pt-0" : ""}`}>
      <Container>
        {type === "style_2" && <MainDetail type="job" />}
        <Row className="gy-lg-0 gy-4">
          <Col lg="8" className={type === "style_2" ? "col-xl-9" : ""}>
            <div className="job-description">
              <JobDescriptionBox title={AboutTheRole} data={AboutTheRoleData} />
              {type === "style_2" && <Benefits />}
              <JobDescriptionBox title={JobLike} data={JobLikeData} list />
              <JobDescriptionBox title={CanApply} data={CanApplyData} list />
            </div>
          </Col>
          <DetailSidebar type="job" sliderStyle={type} />
        </Row>
        <RelatedProduct type="job" />
      </Container>
    </section>
  );
};

export default JobDetail;
