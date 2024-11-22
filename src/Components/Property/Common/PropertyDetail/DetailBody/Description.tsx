import React from "react";
import { PropertyDescriptionTitle, PropertyDetailsTitle } from "../../../../../Constants/Constants";
import { PropertyDescriptionData, PropertyDetailsData } from "../../../../../Data/Property";

const Description = () => {
  return (
    <div className="detail-body">
      <h4 className="detail-page-title">{PropertyDescriptionTitle}</h4>
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
  );
};

export default Description;
