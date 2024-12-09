import { Col, Row } from "reactstrap";
import { BlogContent1, BlogContent2, ConclusionData, ProfessionalData, SocialContactData, UnveilingContent1, UnveilingContent2 } from "../../../../Data/Pages/Blog";
import { dynamicImage } from "../../../../Utils";
import RatioImage from "../../../../Utils/RatioImage";
import BlogDescriptionBox from "./BlogDescriptionBox";
import { Link } from "react-router-dom";
import { RouteList } from "../../../../Routers/RouteList";

const BlogContent = () => {
  return (
    <div className="blog-detail-flex">
      <div className="blog-detail">
        <div className="blog-info">
          <p>{BlogContent1}</p>
          <p className="mt-12">{BlogContent2}</p>
        </div>
        <div className="blog-info">
          <h4>Unveiling the Wonders of Knowledge</h4>
          <Row className="ratio_60 gy-3">
            {[1, 13].map((item, index) => (
              <Col xs="6" className="w-sm-100" key={index}>
                <div className="banner-img">
                  <RatioImage src={dynamicImage(`blog/${item}.jpg`)} alt="b-1" className="img-fluid bg-img" />
                </div>
              </Col>
            ))}
          </Row>
          <p className="mt-12">{UnveilingContent1}</p>
          <p className="mt-12">{UnveilingContent2}</p>
        </div>
        <BlogDescriptionBox title="Tips for Professional Success" data={ProfessionalData} list />
        <div className="blog-info">
          <h2>
            <i className="ri-double-quotes-l" />
            Life Is a Journey, Not a Destination: Choose the Ride That Makes Every Mile an Adventure
            <i className="ri-double-quotes-r" />
          </h2>
        </div>
        <BlogDescriptionBox title="Conclusion" data={ConclusionData} />
        <div className="blog-info">
          <ul className="update-list">
            <li>
              <span>Categorized in:</span>
              <Link to={RouteList.Pages.Blog.BlogLeftSidebar}>Property, Job, Community</Link>
            </li>
            <li>
              <i className="ri-time-line" />
              <strong>Last Update:</strong>
              15 March 2022
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul className="social-list">
          {SocialContactData.map((item, index) => (
            <li key={index}>
              <Link to={item.url} target="_blank">
                <i className={item.icon} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogContent;
