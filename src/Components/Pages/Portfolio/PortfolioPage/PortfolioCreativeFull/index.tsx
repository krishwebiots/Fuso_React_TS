import { Link } from "react-router-dom";
import { PortfolioItems } from "../../../../../Data/Pages/Portfolio";
import { dynamicImage } from "../../../../../Utils";
import RatioImage from "../../../../../Utils/RatioImage";
import { RouteList } from "../../../../../Routers/RouteList";

const PortfolioCreativeFullContainer = () => {
  const rowItems = [4, 3, 2];
  let startIndex = 0;
  return (
    <div className="creative-bg-img">
      <RatioImage src={dynamicImage("car/bg-effect/service-bg.png")} alt="service-bg" className="img-fluid bg-img" />
      <div className="container">
        {rowItems.map((itemCount, rowIndex) => {
          const rowItemsSlice = PortfolioItems.slice(startIndex, startIndex + itemCount);
          startIndex += itemCount;
          return (
            <ul key={rowIndex} className="creative-portfolio">
              {rowItemsSlice.map(({ title, imgSrc }, i) => (
                <li key={i}>
                  <Link to={RouteList.Pages.Portfolio.Detail.PortfolioDetail1} className="portfolio-link">
                    {title}
                  </Link>
                  <div className="full-img">
                    <RatioImage src={dynamicImage(`portfolio/full-img/${imgSrc}`)} alt={title} className="img-fluid bg-img" />
                  </div>
                </li>
              ))}
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioCreativeFullContainer;
