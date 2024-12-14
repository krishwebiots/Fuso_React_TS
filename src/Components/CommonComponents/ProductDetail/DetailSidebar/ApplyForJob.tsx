import { Link } from "react-router-dom";
import { ApplyForJobTitle } from "../../../../Constants/Constants";
import { ApplyForJobListData } from "../../../../Data/Job";
import { RouteList } from "../../../../Routers/RouteList";

const ApplyForJob = () => {
  return (
    <div className="detail-sidebar-box">
      <Link to={RouteList.Pages.Other.ContactUs1} className="btn-solid">
        {ApplyForJobTitle}
      </Link>
      <ul className="sidebar-list">
        {ApplyForJobListData.map((item, index) => (
          <li key={index}>
            {item.title}
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplyForJob;
