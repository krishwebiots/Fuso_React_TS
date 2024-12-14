import { Fragment } from "react";
import { Button, Col } from "reactstrap";
import { MoreDetails, Unbeatable } from "../../../../../../../Constants/Constants";
import { useAppDispatch } from "../../../../../../../ReduxToolkit/Hooks";
import { setMoreDetailsModal } from "../../../../../../../ReduxToolkit/Reducers/LayoutReducers";
import { dynamicImage, Image } from "../../../../../../../Utils";
import MoreDetailsModal from "./MoreDetailsModal";

const PropertyCard = () => {
  const dispatch = useAppDispatch();
  return (
    <Fragment>
      <Col md="8">
        <div className="white-card property-card">
          <div className="card-title">
            <h5>{Unbeatable}</h5>
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
