import { FC } from "react";
import { BlogDescriptionBoxType } from "../../../../Types/ProductType";

const BlogDescriptionBox: FC<BlogDescriptionBoxType> = ({ title, data, list }) => {
  return (
    <div className="blog-info">
      <h4>{title}</h4>
      {list ? (
        <ul className="detail-list">
          {data.map((item, index) => (
            <li key={index}>
              <p>
                <strong>{item.title} : </strong>
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="detail-list conclusion-list">
          {data.map((item, index) => (
            <li key={index}>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogDescriptionBox;
