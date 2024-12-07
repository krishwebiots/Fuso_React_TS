import { Col, Container, Row } from "reactstrap";
import BlogSidebar from "./BlogSidebar";
import BlogBox from "./BolgBox";
import { useAppDispatch, useAppSelector } from "../../../ReduxToolkit/Hooks";
import { FC, useEffect } from "react";
import { setCardToShow } from "../../../ReduxToolkit/Reducers/SidebarReducers";
import { BlogGridViewType } from "../../../Types/BlogType";

const BlogGridView: FC<BlogGridViewType> = ({ carShow, side }) => {
  const dispatch = useAppDispatch();
  const { cardToShow } = useAppSelector((state) => state.sidebar);

  useEffect(() => {
    dispatch(setCardToShow(carShow || cardToShow));
  }, [carShow, cardToShow, dispatch]);
  return (
    <section className="blog-grid-section section-b-space">
      <Container>
        <Row className="custom-row gy-lg-0 gy-4">
          <Col lg="3" className={`${side !== "right" ? "order-lg-0" : ""} order-1`}>
            <BlogSidebar />
          </Col>
          <Col lg="9">
            <BlogBox />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogGridView;
