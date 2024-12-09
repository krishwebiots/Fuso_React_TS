import { FC, Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import { RouteList } from "../../../Routers/RouteList";
import BlogSidebar from "../BlogGridView/BlogSidebar";
import Breadcrumbs from "../Breadcrumbs";
import About from "./About";
import BannerImg from "./BannerImg";
import BlogContent from "./BlogContent";
import BlogDetailTitle from "./BlogDetailTitle";
import Comment from "./Comment";

const BlogDetail: FC<{ type?: string }> = ({ type }) => {
  return (
    <Fragment>
      <Breadcrumbs title="Blog" url={RouteList.Home.CarDemo1} mainClass="page-breadcrumbs-section" />
      <section className="blog-grid-section section-b-space">
        <Container>
          <Row className="custom-row g-xxl-5 g-4">
            <Col lg="3" className={`${type !== "right" ? "order-lg-0" : ""} order-1`}>
              <BlogSidebar />
            </Col>
            <Col lg="9">
              <div className="blog-content-sec ratio_45">
                <BannerImg type={type} />
                {type !== "quote_box" && <BlogDetailTitle />}
                <BlogContent />
                <About />
                <Comment />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default BlogDetail;
