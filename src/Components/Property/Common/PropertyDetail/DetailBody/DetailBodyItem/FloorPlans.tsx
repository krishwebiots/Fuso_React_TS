import { FC } from "react";
import { FloorPlansTitle } from "../../../../../../Constants/Constants";
import { FloorPlansContentData, FloorPlansData } from "../../../../../../Data/Property";
import { DetailBodyItemType } from "../../../../../../Types/ProductType";
import { dynamicImage, Image } from "../../../../../../Utils";
import SvgIcon from "../../../../../../Utils/SvgIcon";

const FloorPlans: FC<DetailBodyItemType> = ({ label }) => {
  return (
    <div className="detail-body" id="floor">
      {label && <h4 className="detail-page-title">{FloorPlansTitle}</h4>}
      <p className="p-0">{FloorPlansContentData}</p>
      <ul className="floor-list">
        {FloorPlansData.map((item, index) => (
          <li className="floor-item" key={index}>
            <div className="floor-icon">
              <SvgIcon iconId={`property/sprite/overview.svg#${item}`} />
              <span>2</span>
            </div>
            <h5>Bedroom</h5>
          </li>
        ))}
      </ul>
      <div className="floor-img">
        <Image src={dynamicImage("property/detail/floor.png")} alt="f-2" className="img-fluid" />
      </div>
    </div>
  );
};

export default FloorPlans;
