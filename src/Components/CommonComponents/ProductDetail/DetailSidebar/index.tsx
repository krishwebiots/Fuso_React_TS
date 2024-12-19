import { FC, Fragment } from "react";
import { Button, Col } from "reactstrap";
import { MakeOfferPriceTitle, ScheduleTestDriverTitle } from "../../../../Constants/Constants";
import { useAppDispatch } from "../../../../ReduxToolkit/Hooks";
import { setDriverModal, setOfferModal } from "../../../../ReduxToolkit/Reducers/LayoutReducers";
import { CarDetailType } from "../../../../Types/ProductType";
import DriverModal from "../../../CommonComponents/Modal/DriverModal";
import OfferModal from "../../../CommonComponents/Modal/OfferModal";
import ContactInfo from "./ContactInfo";
import Exploration from "./Exploration";
import FeaturedProperty from "./FeaturedProperty";
import Apply from "./Apply";
import OtherOpportunities from "./OtherOpportunities";
import ApplyForJob from "./ApplyForJob";
import KeyJobDetails from "./KeyJobDetails";
import SimilarJobs from "./SimilarJobs";
import ShareFriends from "../../GridView/RightSidebar/ShareFriends";

const DetailSidebar: FC<CarDetailType> = ({ type, sliderStyle }) => {
  const dispatch = useAppDispatch();

  return (
    <Fragment>
      {type === "car" ? (
        <Fragment>
          <Col lg="3">
            <div className="car-detail-sidebar">
              <div className="sidebar-box">
                <Button className="btn-solid" onClick={() => dispatch(setDriverModal())}>
                  <i className="ri-steering-2-line" /> {ScheduleTestDriverTitle}
                </Button>
                <Button className="btn-border" onClick={() => dispatch(setOfferModal())}>
                  <i className="ri-price-tag-3-line" /> {MakeOfferPriceTitle}
                </Button>
              </div>
              <div className="sidebar-box">
                <div className="detail-sub-sidebar">
                  <ContactInfo type={type} />
                  <Exploration type={type} />
                </div>
              </div>
              <div className="sidebar-box">
                <FeaturedProperty type={type} />
              </div>
            </div>
          </Col>
          <DriverModal />
          <OfferModal />
        </Fragment>
      ) : type === "job" ? (
        <Col lg={sliderStyle === "style_3" ? "5" : "4"} className={sliderStyle === "style_2" || sliderStyle === "style_5" ? "col-xl-3" : ""}>
          <div className={`detail-right-sidebar ${sliderStyle === "style_4" ? "similar-sidebar" : ""}`}>
            {sliderStyle === "style_2" || sliderStyle === "style_5" ? (
              <Fragment>
                <ApplyForJob />
                <OtherOpportunities />
                <ShareFriends />
              </Fragment>
            ) : sliderStyle === "style_3" ? (
              <Fragment>
                <KeyJobDetails />
              </Fragment>
            ) : sliderStyle === "style_4" ? (
              <Fragment>
                <SimilarJobs />
              </Fragment>
            ) : (
              <Fragment>
                <Apply />
                <OtherOpportunities />
              </Fragment>
            )}
          </div>
        </Col>
      ) : (
        <Col xl="3" lg="4">
          <div className="detail-sidebar">
            <div className="detail-sub-sidebar">
              <ContactInfo />
              <Exploration />
            </div>
            <FeaturedProperty type={type} />
          </div>
        </Col>
      )}
    </Fragment>
  );
};

export default DetailSidebar;
