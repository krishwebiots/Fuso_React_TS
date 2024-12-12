import { Link } from "react-router-dom";
import { AboutData, SocialContactData } from "../../../Data/Pages/Blog";
import { dynamicImage, Image } from "../../../Utils";
import { Label } from "reactstrap";

const About = () => {
  return (
    <div className="about-author-main">
      <h3>About the author</h3>
      <div className="author-box">
        <div className="author-img">
          <Image src={dynamicImage("car/testimonial/4.jpg")} alt="a-1" className="img-fluid" />
        </div>
        <div className="author-info">
          <div className="author-flex">
            <div className="tag-flex">
              <h4>Rose Roberts</h4>
              <Label>Founder &amp; Writer</Label>
            </div>
            <ul className="social-list">
              {SocialContactData.slice(0, 3).map((item, index) => (
                <li key={index}>
                  <Link to={item.url} target="_blank">
                    <i className={item.icon} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <p>{AboutData}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
