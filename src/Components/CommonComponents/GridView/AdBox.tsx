import { FC, Fragment } from "react";
import { Link } from "react-router-dom";
import { ExperienceDoYouHave, FilterJobsBySalary, FindTheseJobs, Href } from "../../../Constants/Constants";
import { AdIconListData, AdListData, AdPriceListData } from "../../../Data/Job";
import { RouteList } from "../../../Routers/RouteList";

const AdBox: FC<{ id: number }> = ({ id }) => {
  return (
    <Fragment>
      {id === 1 ? (
        <div className="job-ad-box job-box light-purple">
          <h5>{ExperienceDoYouHave}</h5>
          <ul className="ad-list">
            {AdListData.map((item, index) => (
              <li key={index}>
                <Link to={RouteList.Job.Grid.JobLeftSidebar}>
                  {item} <i className="ri-arrow-right-double-line" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : id === 5 ? (
        <div className="job-ad-box job-box light-blue">
          <h5>{FindTheseJobs}</h5>
          <ul className="ad-list price-filter">
            {AdIconListData.map((item, index) => (
              <li key={index}>
                <a href={Href}>
                  {item.icon}
                  <span>{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="job-ad-box job-box light-red">
          <h5>{FilterJobsBySalary}</h5>
          <ul className="ad-list price-filter">
            {AdPriceListData.map((item, index) => (
              <li key={index}>
                <Link to={RouteList.Job.Grid.JobLeftSidebar}>
                  {item.price}
                  <span>{item.value}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default AdBox;
