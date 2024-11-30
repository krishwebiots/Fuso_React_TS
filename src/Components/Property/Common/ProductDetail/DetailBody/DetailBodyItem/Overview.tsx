import { FC, Fragment } from "react";
import { useLocation } from "react-router-dom";
import { OverviewTitle, SymbolRegex } from "../../../../../../Constants/Constants";
import { OverviewData } from "../../../../../../Data/Property";
import { DetailBodyItemType } from "../../../../../../Types/ProductType";
import { dynamicGrf, Image } from "../../../../../../Utils";
import SvgIcon from "../../../../../../Utils/SvgIcon";
import { CarOverviewData } from "../../../../../../Data/Car";

const Overview: FC<DetailBodyItemType> = ({ label, type }) => {
  const { pathname } = useLocation();

  const Part = pathname.split("/").map((item) => item.replace(SymbolRegex, " "));
  return (
    <Fragment>
      {type === "car" ? (
        <div className="detail-box">
          <h3 className="car-title">Car Overview</h3>
          <ul className="overview-list">
            {CarOverviewData.map((item) => (
              <li key={item.id}>
                <div className="overview-icon">
                  <SvgIcon iconId={`car/sprite/detail.svg#${item.id}`} />
                </div>
                <div className="overview-info">
                  <span>{item.label}</span>
                  <h6>{item.value}</h6>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="detail-body" id="overview">
          {label && <h4 className="detail-page-title">{OverviewTitle}</h4>}
          <ul className="overview-list">
            {OverviewData.map((item, index) => (
              <li className="overview-box" key={index}>
                <div className="overview-icon">{Part[3] === "property-animated-icon" ? <Image src={dynamicGrf(item.gif)} alt="g-1" className="img-fluid" /> : <SvgIcon iconId={`property/sprite/overview.svg#${item.svg}`} />}</div>
                <div className="overview-content">
                  <h5>{item.title}</h5>
                  <span>{item.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default Overview;
