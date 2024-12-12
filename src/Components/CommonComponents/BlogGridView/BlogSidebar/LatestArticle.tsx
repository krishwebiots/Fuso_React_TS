import { Link } from "react-router-dom";
import { LatestArticleTitle } from "../../../../Constants/Constants";
import { LatestArticleData } from "../../../../Data/Pages/Blog";
import { RouteList } from "../../../../Routers/RouteList";
import { dynamicImage, Image } from "../../../../Utils";
import { Label } from "reactstrap";

const LatestArticle = () => {
  return (
    <div className="blog-sidebar-box">
      <div className="sidebar-title">
        <h4>{LatestArticleTitle}</h4>
      </div>
      <ul className="article-list">
        {LatestArticleData.map((item, index) => (
          <li key={index}>
            <Link to={RouteList.Pages.Blog.Detail.BlogLeftClassic} className="article-list-img">
              <Image src={dynamicImage(`blog/${item.image}`)} alt="al-1" className="img-fluid" />
            </Link>
            <div className="article-list-content">
              <div className="post-flex">
                <Label>{item.type}</Label>
                <span>{item.date}</span>
              </div>
              <Link to={RouteList.Pages.Blog.Detail.BlogLeftClassic}>{item.title}</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestArticle;
