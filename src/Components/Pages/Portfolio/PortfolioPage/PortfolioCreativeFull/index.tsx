import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PortfolioItems } from "../../../../../Data/Pages/Portfolio";
import { RouteList } from "../../../../../Routers/RouteList";
import { dynamicImage } from "../../../../../Utils";
import RatioImage from "../../../../../Utils/RatioImage";

const PortfolioCreativeFullContainer = () => {
  const rowdata = [4, 3, 2];
  const startindex = 0;
  useEffect(() => {
    const navLinks = document.querySelectorAll(".portfolio-link");

    const handleMouseEnter = (link: Element) => {
      navLinks.forEach((l) => {
        if (l instanceof HTMLElement) {
          l.style.opacity = l === link ? "1" : "0.2";
        }
      });
    };

    const handleMouseLeave = () => {
      navLinks.forEach((l) => {
        if (l instanceof HTMLElement) {
          l.style.opacity = "1";
        }
      });
    };

    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => handleMouseEnter(link));
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("mouseenter", () => handleMouseEnter(link));
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);
  return (
    <div className="creative-bg-img">
      <RatioImage src={dynamicImage("car/bg-effect/service-bg.png")} alt="service-bg" className="img-fluid bg-img" />
      <div className="container">
        {rowdata.map((data, i) => {
          const RowSlice = PortfolioItems.slice(startindex, startindex + data);
          return (
            <ul key={i} className="creative-portfolio">
              {RowSlice.map((item, i) => (
                <li key={i}>
                  <Link to={RouteList.Pages.Portfolio.Detail.PortfolioDetail1} className="portfolio-link">
                    {item.title}
                  </Link>
                  <div className="full-img">
                    <RatioImage src={dynamicImage(`portfolio/full-img/${item.imgSrc}`)} alt={item.title} className="img-fluid bg-img" />
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
