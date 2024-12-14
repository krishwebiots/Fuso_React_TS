import { FC } from "react";
import CountUp from "react-countup";
import { Col, Container, Row } from "reactstrap";
import { JobCounterData, JobHomeSectionData, JonHomeContent } from "../../../Data/Demo/JobDemo1";
import { JobHomeType } from "../../../Types/HomeDemoType";
import { dynamicImage, dynamicSvg, Image } from "../../../Utils";
import SearchTabList from "../Common/SearchTabList";
import { BuildYourFuture, FindYourJob } from "../../../Constants/Constants";

const JobHomeSection = () => {
  const renderImage: FC<JobHomeType> = (imageData, key) => {
    const src = imageData.type === "svg" ? dynamicSvg(imageData.image) : dynamicImage(imageData.image);
    return <Image key={key} src={src} alt={imageData.image} className={`img-fluid ${imageData.class || ""}`} />;
  };

  return (
    <div className="job-home-section">
      <Container>
        <div className="home-block-space">
          <Row className="align-items-center">
            <Col xl="7" lg="6">
              <div className="home-content">
                <h3>{BuildYourFuture}</h3>
                <h1>{FindYourJob}</h1>
                <p>{JonHomeContent}</p>
                <ul className="counter-list">
                  {JobCounterData.map((item, index) => (
                    <li className="counter-box" key={index}>
                      <div className="counter-info">
                        <h3>
                          <CountUp end={item.end} className="counter-count" delay={0} />
                          {item.suffix}
                        </h3>
                        <h4>{item.label}</h4>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col xl="5" lg="6">
              <div className="home-img">
                {JobHomeSectionData.map((item, index) => {
                  if ("meanClass" in item) {
                    return (
                      <div key={index} className={item.meanClass}>
                        {item.multipleImage.map((imgData, imgIndex) => {
                          if ("childrenClass" in imgData) {
                            return (
                              <div key={imgIndex} className={imgData.childrenClass}>
                                {imgData.childrenImage.map((childImg, childIndex) => renderImage(childImg, childIndex))}
                              </div>
                            );
                          }
                          return renderImage(imgData, imgIndex);
                        })}
                      </div>
                    );
                  }
                  return renderImage(item, index);
                })}
              </div>
            </Col>
          </Row>
        </div>
        <div className="property-home-tab car-home-tab job-home-tab">
          <SearchTabList basicTab={1} showTab={[1, 7, 8, 9]} scrollDown showNav />
        </div>
      </Container>
    </div>
  );
};

export default JobHomeSection;
