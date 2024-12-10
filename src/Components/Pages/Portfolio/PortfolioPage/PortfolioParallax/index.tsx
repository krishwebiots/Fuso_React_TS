import { dynamicImage, dynamicNumber } from "../../../../../Utils";
import RatioImage from "../../../../../Utils/RatioImage";

const PortfolioParallaxContainer = () => {
  return (
    <div className="portfolio-section p-0">
      {dynamicNumber(5).map((item, index) => (
        <div className="portfolio-parallax-image" key={index}>
          <RatioImage src={dynamicImage(`portfolio/full-img/${item}.jpg`)} alt="portfolio-image1" className="bg-img" />
        </div>
      ))}
    </div>
  );
};

export default PortfolioParallaxContainer;
