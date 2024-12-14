import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import { BlogsTitle, ReadMore } from "../../../Constants/Constants";
import { BlogsContentData, BlogsData } from "../../../Data/Demo/CarDemo2";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, dynamicSvg, Image } from "../../../Utils";
import RatioImage from "../../../Utils/RatioImage";
import VideoModal from "../../CommonComponents/Modal/VideoModal";
import CommonHeader from "../Common/CommonHeader";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { setVideoModal } from "../../../ReduxToolkit/Reducers/LayoutReducers";

const Blogs = () => {
  const dispatch = useAppDispatch();
  return (
    <Fragment>
      <section className="car2-blog-section section-t-lg-space section-b-lg-space overflow-hidden">
        <RatioImage src={dynamicImage("car2/bg-effect/featured-bg.png")} alt="featured-bg" className="bg-img" />
        <Container>
          <CommonHeader title={BlogsTitle} content={BlogsContentData} titleClass="text-white" headClass="title-style-5" />
          <Row className="justify-content-center gy-4">
            <Col lg="6" sm="8" className="d-lg-block d-none">
              <div className="main-blog-img position-relative">
                <Image src={dynamicImage("car2/blog/1.jpg")} alt="b-1" className="img-fluid w-100 main-img" />
                <Button className="btn-play" onClick={() => dispatch(setVideoModal())}>
                  <Image src={dynamicSvg("car2/play.svg")} alt="play" className="img-fluid" />
                </Button>
              </div>
            </Col>
            <Col lg="6">
              <ul className="blog-list">
                {BlogsData.map((blog, index) => (
                  <li key={index}>
                    <Link to={RouteList.Pages.Blog.Detail.BlogLeftClassic} className="blog-img">
                      <Image src={dynamicImage(blog.img)} alt={`blog-${index + 2}`} className="img-fluid" />
                    </Link>
                    <div className="blog-content">
                      <Link to={RouteList.Pages.Blog.Detail.BlogLeftClassic} className="blog-title">
                        {blog.title}
                      </Link>
                      <p>{blog.description}</p>
                      <Link to={RouteList.Pages.Blog.Detail.BlogLeftClassic} className="text-btn">
                        {ReadMore} <i className="ri-arrow-right-line" />
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <VideoModal />
    </Fragment>
  );
};

export default Blogs;
