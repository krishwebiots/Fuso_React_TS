import { FC } from "react";
import { OverviewTitle, SymbolRegex } from "../../../../../../Constants/Constants";
import { OverviewData } from "../../../../../../Data/Property";
import SvgIcon from "../../../../../../Utils/SvgIcon";
import { DetailBodyItemType } from "../../../../../../Types/ProductType";
import { dynamicGrf, Image } from "../../../../../../Utils";
import { useLocation } from "react-router-dom";

const Overview: FC<DetailBodyItemType> = ({ label }) => {
  const { pathname } = useLocation();

  const Part = pathname.split("/").map((item) => item.replace(SymbolRegex, " "));
  return (
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
  );
};

export default Overview;
