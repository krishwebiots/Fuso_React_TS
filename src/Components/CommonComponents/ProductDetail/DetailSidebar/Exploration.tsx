import { FC } from "react";
import { RequestExplorationTitle, SubmitRequest } from "../../../../Constants/Constants";
import RenderInput from "../../../CommonComponents/RenderInput";

const Exploration: FC<{ type?: string }> = ({ type }) => {
  return (
    <div className="detail-sidebar-box">
      {type === "car" ? <h3 className="car-title">{RequestExplorationTitle}</h3> : <h4 className="detail-page-title">{RequestExplorationTitle}</h4>}
      <RenderInput placeholder="Your Name" mainClass="detail-input" review />
      <RenderInput placeholder="Email Address" mainClass="detail-input" inputType="email" review />
      <RenderInput placeholder="Phone Number" mainClass="detail-input" review />
      <RenderInput placeholder="Message" mainClass="detail-input" inputType="textarea" review />
      <RenderInput button={SubmitRequest} mainClass="detail-input" review />
    </div>
  );
};

export default Exploration;
