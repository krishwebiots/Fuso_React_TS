import { Play } from "iconsax-react";
import { Fragment } from "react";
import { Href, VideoTitle } from "../../../../../Constants/Constants";
import { useAppDispatch } from "../../../../../ReduxToolkit/Hooks";
import { setVideoModal } from "../../../../../ReduxToolkit/Reducers/SidebarReducers";
import { dynamicImage, Image } from "../../../../../Utils";
import VideoModal from "../../../../CommonComponents/Modal/VideoModal";

const Video = () => {
  const dispatch = useAppDispatch();

  return (
    <Fragment>
      <div className="detail-body ratio_60">
        <h4 className="detail-page-title">{VideoTitle}</h4>
        <div className="video-img">
          <Image src={dynamicImage("property/detail/4.jpg")} alt="v-1" className="img-fluid bg-img" />
          <a href={Href} className="play-btn" onClick={() => dispatch(setVideoModal())}>
            <Play className="iconsax" />
          </a>
        </div>
      </div>
      <VideoModal />
    </Fragment>
  );
};

export default Video;
