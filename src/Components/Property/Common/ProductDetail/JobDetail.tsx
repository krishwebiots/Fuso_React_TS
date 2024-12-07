import { FC, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { useAppDispatch } from "../../../../ReduxToolkit/Hooks";
import { fetchProductApiData } from "../../../../ReduxToolkit/Reducers/ProductReducers";
import DetailSidebar from "./DetailSidebar";
import RelatedProduct from "./RelatedProduct";
import JobDescriptionBox from "./DetailBody/DetailBodyItem/JobDescriptionBox";
import { AboutTheRole, CanApply, Introduction, JobLike } from "../../../../Constants/Constants";
import { AboutTheRoleData, CanApplyData, IntroductionData, JobLikeData } from "../../../../Data/Job";
import { JobDetailType } from "../../../../Types/ProductType";
import MainDetail from "./MainDetail";
import Benefits from "./DetailBody/DetailBodyItem/Benefits";

const JobDetail: FC<JobDetailType> = ({ detailType }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
  }, [dispatch]);
  return (
    <section className={`job-detail-section section-b-space ${detailType === "style_2" ? "pt-0" : ""}`}>
      <Container>
        {detailType === "style_2" && <MainDetail type="job" detailType={detailType} />}
        <Row className="gy-lg-0 gy-4">
          <Col lg={detailType === "style_3" ? "7" : "8"} className={detailType === "style_2" || detailType === "style_5" ? "col-xl-9" : ""}>
            {(detailType === "style_4" || detailType === "style_5") && <MainDetail type="job" detailType={detailType} />}
            <div className={`job-description ${detailType === "style_3" ? "detail-style-1" : ""}`}>
              {detailType === "style_3" && <JobDescriptionBox title={Introduction} data={IntroductionData} />}
              <JobDescriptionBox title={AboutTheRole} data={AboutTheRoleData} />
              {(detailType === "style_2" || detailType === "style_3") && <Benefits />}
              <JobDescriptionBox title={JobLike} data={JobLikeData} list />
              <JobDescriptionBox title={CanApply} data={CanApplyData} list />
            </div>
          </Col>
          <DetailSidebar type="job" sliderStyle={detailType} />
        </Row>
        <RelatedProduct type="job" />
      </Container>
    </section>
  );
};

export default JobDetail;
