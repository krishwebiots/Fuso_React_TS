import { Link } from "react-router-dom";
import { OtherOpportunitiesTitle } from "../../../../../Constants/Constants";
import { useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { RouteList } from "../../../../../Routers/RouteList";
import { dynamicSvg, Image } from "../../../../../Utils";

const OtherOpportunities = () => {
  const { productItem } = useAppSelector((state) => state.product);
  const PropertyData = productItem.filter((item) => item.type === "job");
  return (
    <div className="detail-sidebar-box">
      <h5 className="description-title">{OtherOpportunitiesTitle}</h5>
      {PropertyData.slice(0, 3).map((item, index) => (
        <div className="other-job-box" key={index}>
          <div className="job-icon">
            {item.image.map((imgSrc, idx) => (
              <Image src={dynamicSvg(imgSrc)} alt={`job-${idx}`} className="img-fluid" key={idx} />
            ))}
          </div>
          <Link to={RouteList.Job.Grid.JobLeftSidebar} className="job-content">
            {item.title}
            <span>{item.company}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default OtherOpportunities;
