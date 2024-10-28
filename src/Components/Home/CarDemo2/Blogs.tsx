import { Button, Col, Row } from "reactstrap";
import { BlogsTitle } from "../../../Constants/Constants";
import { BlogsContentData } from "../../../Data/Demo/CarDemo2";
import { dynamicImage, dynamicSvg, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";

const Blogs = () => {
  return (
    <section className="car2-blog-section section-t-lg-space section-b-lg-space overflow-hidden bg-size" style={{ backgroundImage: `url(${dynamicImage("car2/bg-effect/featured-bg.png")})` }}>
      <Image src={dynamicImage("car2/bg-effect/featured-bg.png")} alt="featured-bg" className="bg-img" style={{ display: "none" }} />
      <div className="container">
        <CommonHeader title={BlogsTitle} content={BlogsContentData} headClass="title-style-5 dark-title" />
        <Row className="justify-content-center gy-4">
          <Col lg="6" sm="8" className="d-lg-block d-none">
            <div className="main-blog-img position-relative">
              <Image src={dynamicImage("car2/blog/1.jpg")} alt="b-1" className="img-fluid w-100 main-img" />
              <Button type="button" className="btn-play" data-bs-toggle="modal" data-bs-target="#videomodal">
                <Image src={dynamicSvg("car2/play.svg")} alt="play" className="img-fluid" />
              </Button>
            </div>
          </Col>
          <div className="col-lg-6">
            <ul className="blog-list">
              <li>
                <a href="blog-left-classic.html" className="blog-img">
                  <img src="assets/images/car2/blog/2.jpg" alt="b-2" className="img-fluid" />
                </a>
                <div className="blog-content">
                  <a href="blog-left-classic.html" className="blog-title">
                    Perfect Ride with Our Car Rental
                  </a>
                  <p>It's about the experiences, the memories, and the freedom that come with each mile traveled.</p>
                  <a href="blog-left-classic.html" className="text-btn">
                    Read More <i className="ri-arrow-right-line" />
                  </a>
                </div>
              </li>
              <li>
                <a href="blog-left-classic.html" className="blog-img">
                  <img src="assets/images/car2/blog/3.jpg" alt="b-3" className="img-fluid" />
                </a>
                <div className="blog-content">
                  <a href="blog-left-classic.html" className="blog-title">
                    A Beginner's Guide to Car Maintenance
                  </a>
                  <p>Owning a car comes with the responsibility of regular maintenance to keep it running smoothly.</p>
                  <a href="blog-left-classic.html" className="text-btn">
                    Read More <i className="ri-arrow-right-line" />
                  </a>
                </div>
              </li>
              <li>
                <a href="blog-left-classic.html" className="blog-img">
                  <img src="assets/images/car2/blog/4.jpg" alt="b-4" className="img-fluid" />
                </a>
                <div className="blog-content">
                  <a href="blog-left-classic.html" className="blog-title">
                    Why Understanding Your Car Matters
                  </a>
                  <p>Planning a road trip can be exciting, but ensuring your car is ready for the journey is crucial.</p>
                  <a href="blog-left-classic.html" className="text-btn">
                    Read More <i className="ri-arrow-right-line" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </Row>
      </div>
    </section>
  );
};

export default Blogs;
