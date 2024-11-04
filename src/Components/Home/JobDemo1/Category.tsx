import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { JobCategoryTitle } from "../../../Constants/Constants";
import { JobCategoryContentData } from "../../../Data/Demo/JobDemo1";
import { useAppSelector } from "../../../ReduxToolkit/Hooks";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicSvg, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";

const Category = () => {
  const { categoryItem } = useAppSelector((state) => state.product);
  return (
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
  );
};

export default Category;
