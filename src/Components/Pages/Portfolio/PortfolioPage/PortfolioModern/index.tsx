import { MouseEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { PortfolioItems } from "../../../../../Data/Pages/Portfolio";
import { RouteList } from "../../../../../Routers/RouteList";
import { PortfolioModernType } from "../../../../../Types/PortfolioType";
import { dynamicImage, Image } from "../../../../../Utils";
import RatioImage from "../../../../../Utils/RatioImage";

const PortfolioModernContainer = () => {
  const [hoveredImageStyle, setHoveredImageStyle] = useState<PortfolioModernType>({ left: 0, top: 0, index: null });

  const handleMouseMove = (e: MouseEvent<HTMLLIElement>, index: number) => {
    const rect = (e.currentTarget as HTMLLIElement).getBoundingClientRect();
    const offsetX = 350;
    const offsetY = 0;
    setHoveredImageStyle({
      left: e.clientX - rect.left + offsetX,
      top: e.clientY - rect.top + offsetY,
      index,
    });
  };

  const handleMouseLeave = () => setHoveredImageStyle({ left: 0, top: 0, index: null });

  return (
    <div className="creative-bg-img h-auto overflow-hidden">
      <RatioImage src={dynamicImage("car/bg-effect/service-bg.png")} alt="service-bg" className="img-fluid bg-img" />
      <Container>
        <ul className="creative-portfolio-list" id="nav">
          {PortfolioItems.map(({ title, imgSrc }, i) => (
            <li key={i} onMouseMove={(e) => handleMouseMove(e, i)} onMouseLeave={handleMouseLeave} style={{ position: "relative" }}>
              <Link to={RouteList.Pages.Portfolio.Detail.PortfolioDetail1} className="portfolio-link">
                {title}
              </Link>
              {hoveredImageStyle.index === i && (
                <div
                  className="full-img"
                  style={{
                    position: "absolute",
                    left: `${hoveredImageStyle.left}px`,
                    top: `${hoveredImageStyle.top}px`,
                    zIndex: 10,
                  }}
                >
                  <Image src={dynamicImage(`portfolio/full-img/${imgSrc}`)} alt={title} className="img-fluid" />
                </div>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default PortfolioModernContainer;
