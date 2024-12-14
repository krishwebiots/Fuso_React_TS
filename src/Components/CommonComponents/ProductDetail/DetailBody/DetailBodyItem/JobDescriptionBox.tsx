import { FC } from "react";
import { JobDescriptionBoxType } from "../../../../../Types/ProductType";

const JobDescriptionBox: FC<JobDescriptionBoxType> = ({ title, data, list }) => {
  return (
    <div className="description-box">
      <h5 className="description-title">{title}</h5>
      {list ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>{data}</p>
      )}
    </div>
  );
};

export default JobDescriptionBox;
