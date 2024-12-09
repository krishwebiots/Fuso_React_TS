import { FC, Fragment, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { setCardToShow } from "../../../ReduxToolkit/Reducers/SidebarReducers";
import { BlogGridViewType } from "../../../Types/BlogType";
import BlogSidebar from "./BlogSidebar";
import BlogBox from "./BolgBox";
import TopSlider from "./TopSlider";
import Breadcrumbs from "../Breadcrumbs";
import { RouteList } from "../../../Routers/RouteList";

const BlogGridView: FC<BlogGridViewType> = ({ carShow, side, gridSize, type, sectionClass }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCardToShow(carShow || 9));
  }, [carShow, dispatch]);
  return (
    <Fragment>
      <Breadcrumbs title="Blog" url={RouteList.Home.CarDemo1} mainClass="page-breadcrumbs-section" />
      <section className={`blog-grid-section section-b-space ${sectionClass ? sectionClass : ""}`}>
        <Container>
          {type === "top_slider" && <TopSlider />}
          <Row className="custom-row gy-lg-0 gy-4">
            {side !== "no" && (
              <Col lg="3" className={`${side !== "right" ? "order-lg-0" : ""} order-1`}>
                <BlogSidebar socialContact />
              </Col>
            )}
            <div className={side === "no" ? "col-lg-12" : "col-lg-9"}>
              {type === "load_more" ? (
                <div className="featured-wrapper">
                  <BlogBox gridSize={gridSize} type={type} />
                </div>
              ) : (
                <BlogBox gridSize={gridSize} type={type} />
              )}
            </div>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default BlogGridView;
