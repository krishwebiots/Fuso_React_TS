import { FC, Fragment } from "react";
import { Button, Col } from "reactstrap";
import { CarDetailType } from "../../../../../Types/ProductType";
import ContactInfo from "./ContactInfo";
import Exploration from "./Exploration";
import FeaturedProperty from "./FeaturedProperty";
import OfferModal from "../../../../CommonComponents/Modal/OfferModal";
import { useAppDispatch } from "../../../../../ReduxToolkit/Hooks";
import { setDriverModal, setOfferModal } from "../../../../../ReduxToolkit/Reducers/SidebarReducers";
import { MakeOfferPriceTitle, ScheduleTestDriverTitle } from "../../../../../Constants/Constants";
import DriverModal from "../../../../CommonComponents/Modal/DriverModal";

const DetailSidebar: FC<CarDetailType> = ({ type }) => {
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
