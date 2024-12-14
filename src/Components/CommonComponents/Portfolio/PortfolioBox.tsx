import { Play } from "iconsax-react";
import { FC, Fragment, MutableRefObject, useEffect, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Href, PortfolioTitle } from "../../../Constants/Constants";
import { PortfolioData, PortfolioImagesSlider } from "../../../Data/Pages/Portfolio";
import { useAppDispatch, useAppSelector } from "../../../ReduxToolkit/Hooks";
import { setVideoModal } from "../../../ReduxToolkit/Reducers/LayoutReducers";
import { RouteList } from "../../../Routers/RouteList";
import { PortfolioBoxType } from "../../../Types/PortfolioType";
import { dynamicImage } from "../../../Utils";
import RatioImage from "../../../Utils/RatioImage";
import PaginationDynamic from "../Pagination";

const PortfolioBox: FC<PortfolioBoxType> = ({ activeTab, gridSize, type }) => {
  const { cardToShow } = useAppSelector((state) => state.layout);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();

  const Portfolio = PortfolioData.filter((item) => item.type === activeTab || "all" === activeTab);
  const totalPages = Math.ceil(Portfolio?.length / cardToShow);
  const showPortfolio = Portfolio?.slice(cardToShow * currentPage - cardToShow, cardToShow * currentPage);

  useEffect(() => setCurrentPage(1), [activeTab]);

  return (
    <Fragment>
      <div className="m-p-g">
        <Row className={`ratio3_2 g-3 g-xl-4 ${type !== "box_slider" ? "grid m-p-g__thumbs row-grid row-2-grid" : ""}`}>
          {type === "image_change" ? (
            showPortfolio.map((item, index) => (
              <Col sm="6" className={`grid-item ${gridSize === 3 ? "col-lg-4" : gridSize === 4 ? "col-xl-3 col-lg-4" : ""}`} key={index}>
                <div className="image-hover-box">
                  <div className="image-both-box">
                    <div className="front">
                      <Link to={RouteList.Pages.Portfolio.Detail.PortfolioDetail1}>
                        <RatioImage src={dynamicImage(item.image)} alt="blog" className="bg-img" />
                      </Link>
                    </div>
                    <div className="back">
                      <Link to={RouteList.Pages.Portfolio.Detail.PortfolioDetail1}>
                        <RatioImage src={dynamicImage(item.backImage)} alt="blog" className="bg-img" />
                      </Link>
                    </div>
                  </div>
                  <div className="portfolio-info">
                    <h4>{PortfolioTitle}</h4>
                    <span>{PortfolioTitle}</span>
                  </div>
                </div>
              </Col>
            ))
          ) : type === "box_slider" ? (
            showPortfolio.map((item, index) => (
              <Col sm="6" className={`grid-item ${gridSize === 3 ? "col-lg-4" : gridSize === 4 ? "col-xl-3 col-lg-4" : ""}`} key={index}>
                <div className="portfolio-slider-box">
                  <Swiper className="portfolio-images-slider" {...PortfolioImagesSlider}>
                    {item.slider.map((data, index) => (
                      <SwiperSlide key={index}>
                        <Link to={RouteList.Pages.Portfolio.Detail.PortfolioDetail1} className="slider-img">
                          <RatioImage src={dynamicImage(`portfolio/${data}.jpg`)} alt="slider-img" className="bg-img" />
                        </Link>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </Col>
            ))
          ) : (
            <Gallery>
              {showPortfolio.map((item, index) => (
                <Col sm="6" className={`grid-item ${gridSize === 3 ? "col-lg-4" : gridSize === 4 ? "col-xl-3 col-lg-4" : ""}`} key={index}>
                  <div className="blog-box blog-grid">
                    <Item original={dynamicImage(item.image)} width="1100" height="1000">
                      {({ ref, open }) =>
                        type === "gallery" ? (
                          <div className="img-box bg-size" style={{ backgroundImage: `url(${dynamicImage(item.image)})` }}>
                            <img className="bg-img img-fluid" ref={ref as unknown as MutableRefObject<HTMLImageElement>} src={dynamicImage(item.image)} alt="Image_description" style={{ display: "none" }} />
                            <div className="portfolio-icon-flex">
                              <Link to={Href} onClick={open} className="play-btn search-btn m-p-g__thumbs-img" />
                              <Link to={RouteList.Pages.Portfolio.Detail.PortfolioDetail1} className="play-btn link-btn" />
                            </div>
                          </div>
                        ) : (
                          <Link to={Href} onClick={open} className="img-box m-p-g__thumbs-img bg-size" style={{ backgroundImage: `url(${dynamicImage(item.image)})` }}>
                            <img className="bg-img img-fluid" ref={ref as unknown as MutableRefObject<HTMLImageElement>} src={dynamicImage(item.image)} alt="Image_description" style={{ display: "none" }} />
                          </Link>
                        )
                      }
                    </Item>
                    {type === "transform" && (
                      <div className="portfolio-content">
                        <h3>{item.title}</h3>
                        <h6>{item.text}</h6>
                      </div>
                    )}
                    {type === "video" && (
                      <Button className="play-btn" onClick={() => dispatch(setVideoModal())}>
                        <Play className="iconsax" />
                      </Button>
                    )}
                  </div>
                </Col>
              ))}
            </Gallery>
          )}
        </Row>
      </div>
      <PaginationDynamic totalPages1={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </Fragment>
  );
};

export default PortfolioBox;
