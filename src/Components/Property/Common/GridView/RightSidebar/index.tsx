import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Col } from "reactstrap";
import { RouteList } from "../../../../../Routers/RouteList";
import { RightSidebarType } from "../../../../../Types/ProductType";
import { dynamicSvg, Image } from "../../../../../Utils";

const RightSidebar: FC<RightSidebarType> = ({ value }) => {
  return (
    <Col xl="3" lg="4">
      <div className="job-right-sidebar">
        <div className="right-sidebar">
          <h6 className="sidebar-title">Jobs you might be interested in</h6>
          {value.slice(0, 3).map((item, index) => (
            <div className="sidebar-job-box" key={index}>
              <div className="job-icon">
                {item.image.map((imgSrc, idx) => (
                  <Image src={dynamicSvg(imgSrc)} alt={`job-${idx}`} className="img-fluid" key={idx} />
                ))}
              </div>
              <Link to={RouteList.Job.Grid.JobLeftSidebar}>
                {item.title}
                <span>{item.company}</span>
              </Link>
            </div>
          ))}
        </div>
        <div className="share-friends">
          <h6>Have a friend who’ll be good for this job?</h6>
          <Link to="https://web.whatsapp.com/" target="_blank" className="btn-solid">
            <i className="ri-whatsapp-line" />
            Share with a Friend
          </Link>
        </div>
        <div className="sidebar-banner">
          <h2>10M+ Users are on the Fuso app</h2>
          <Button className="btn-solid">Download Now</Button>
        </div>
      </div>
    </Col>
  );
};

export default RightSidebar;
