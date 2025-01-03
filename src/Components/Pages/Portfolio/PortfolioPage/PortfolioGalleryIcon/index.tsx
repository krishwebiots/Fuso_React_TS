import { Fragment } from "react/jsx-runtime";
import Portfolio from "../../../../CommonComponents/Portfolio";
import VideoModal from "../../../../CommonComponents/Modal/VideoModal";

const PortfolioGalleryIconContainer = () => {
  return (
    <Fragment>
      <Portfolio sectionClass="portfolio-video" type="gallery" gridSize={3} carShow={9} />
      <VideoModal />
    </Fragment>
  );
};

export default PortfolioGalleryIconContainer;
