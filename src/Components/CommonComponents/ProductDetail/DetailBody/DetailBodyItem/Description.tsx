import { FC, Fragment } from "react";
import { DescriptionTitle, PropertyDescriptionTitle, PropertyDetailsTitle } from "../../../../../Constants/Constants";
import { PropertyDescriptionData, PropertyDetailsData } from "../../../../../Data/Property";
import { DetailBodyItemType } from "../../../../../Types/ProductType";
import { CarDescription } from "../../../../../Data/Car";

const Description: FC<DetailBodyItemType> = ({ label, type }) => {
  return (
    <Fragment>
      {type === "car" ? (
        <div className="detail-box" id="description">
          <h3 className="car-title">{DescriptionTitle}</h3>
          {CarDescription.map((item, index) => (
            <p className={index === 0 ? "mb-md-2" : ""} key={index}>
              {item}
            </p>
          ))}
        </div>
      ) : (
        <div className="detail-body" id="description">
          {label && <h4 className="detail-page-title">{PropertyDescriptionTitle}</h4>}
          <p>{PropertyDescriptionData}</p>
          <h4 className="detail-page-title">{PropertyDetailsTitle}</h4>
          <ul className="property-detail-page">
            {PropertyDetailsData.map((item, index) => (
              <li key={index}>
                <h6>{item.label}</h6>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default Description;
