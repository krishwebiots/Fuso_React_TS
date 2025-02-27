import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Col } from "reactstrap";
import { DownloadNow, JobsYouMightBeInterested, UsersAreOnTheFusoApp } from "../../../../Constants/Constants";
import { RouteList } from "../../../../Routers/RouteList";
import { RightSidebarType } from "../../../../Types/ProductType";
import { dynamicSvg, Image } from "../../../../Utils";
import ShareFriends from "./ShareFriends";

const RightSidebar: FC<RightSidebarType> = ({ value }) => {
  return (
    <Col xl="3" lg="4">
      <div className="job-right-sidebar">
        <div className="right-sidebar">
          <h6 className="sidebar-title">{JobsYouMightBeInterested}</h6>
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
        <ShareFriends />
        <div className="sidebar-banner">
          <h2>{UsersAreOnTheFusoApp}</h2>
          <Button className="btn-solid">{DownloadNow}</Button>
        </div>
      </div>
    </Col>
  );
};

export default RightSidebar;
