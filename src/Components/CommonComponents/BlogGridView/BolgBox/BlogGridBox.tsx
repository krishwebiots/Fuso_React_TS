import { FC } from "react";
import { BlogGridBoxType } from "../../../../Types/BlogType";
import { Link } from "react-router-dom";
import { RouteList } from "../../../../Routers/RouteList";
import RatioImage from "../../../../Utils/RatioImage";
import { dynamicGrf, dynamicImage, Image } from "../../../../Utils";

const BlogGridBox: FC<BlogGridBoxType> = ({ data }) => {
  return (
    <div className="blog-grid-box">
      <div className="blog-img">
        <Link to={RouteList.Pages.Blog.Detail.BlogLeftClassic}>
          <RatioImage src={dynamicImage(data.image)} alt="bi-1" className="img-fluid bg-img" />
        </Link>
        {data.fireBox && (
          <div className="fire-box">
            <Image src={dynamicGrf("fire.gif")} alt="fire" className="img-fluid" />
          </div>
        )}
        <div className="author-flex">
          <div className="author-name-box">
            <Image src={dynamicImage(data.authorImage)} alt="p-1" className="img-fluid" />
            <div className="author-name">
              <span>{data.author}</span>
            </div>
          </div>
          <Link to={RouteList.Pages.Blog.Detail.BlogLeftClassic} className="read-arrow">
            <i className="ri-arrow-right-down-line" />
          </Link>
        </div>
      </div>
      <div className="blog-content">
        <Link to={RouteList.Pages.Blog.Detail.BlogLeftClassic} className="blog-title">
          {data.title}
        </Link>
        <p>{data.summary}</p>
        <ul className="blog-view-list">
          <li>
            <i className="ri-calendar-line" />
            <span>{data.date}</span>
          </li>
          <li>
            <i className="ri-eye-line" />
            <span>{data.views}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogGridBox;
