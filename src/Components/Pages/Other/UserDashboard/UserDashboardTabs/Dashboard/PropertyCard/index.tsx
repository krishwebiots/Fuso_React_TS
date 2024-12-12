import { Fragment } from "react";
import { Button, Col } from "reactstrap";
import { MoreDetails } from "../../../../../../../Constants/Constants";
import { useAppDispatch } from "../../../../../../../ReduxToolkit/Hooks";
import { setMoreDetailsModal } from "../../../../../../../ReduxToolkit/Reducers/SidebarReducers";
import { dynamicImage, Image } from "../../../../../../../Utils";
import MoreDetailsModal from "./MoreDetailsModal";

const PropertyCard = () => {
  const dispatch = useAppDispatch();
  return (
    <Fragment>
      <Col md="8">
        <div className="white-card property-card">
          <div className="card-title">
            <h5>Make a Big Splash with Unbeatable Sale Prices!</h5>
            <Button className="btn-solid" onClick={() => dispatch(setMoreDetailsModal())}>
              {MoreDetails}
            </Button>
          </div>
          <Image src={dynamicImage("other/user-dashboard/home-card.png")} alt="home-card" className="img-fluid" />
        </div>
      </Col>
      <MoreDetailsModal />
    </Fragment>
  );
};

export default PropertyCard;
