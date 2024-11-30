import { Input } from "reactstrap";
import { Href, RequestExplorationTitle, SubmitRequest } from "../../../../../Constants/Constants";
import { FC } from "react";

const Exploration: FC<{ type?: string }> = ({ type }) => {
  return (
    <div className="detail-sidebar-box">
      {type === "car" ? <h3 className="car-title">{RequestExplorationTitle}</h3> : <h4 className="detail-page-title">{RequestExplorationTitle}</h4>}
      <div className="detail-input">
        <Input type="text" placeholder="Your Name" />
      </div>
      <div className="detail-input">
        <Input type="email" placeholder="Email Address" />
      </div>
      <div className="detail-input">
        <Input type="text" placeholder="Phone Number" />
      </div>
      <div className="detail-input">
        <Input type="textarea" placeholder="Message" />
      </div>
      <div className="detail-input">
        <a href={Href} className="btn-solid">
          {SubmitRequest}
        </a>
      </div>
    </div>
  );
};

export default Exploration;
