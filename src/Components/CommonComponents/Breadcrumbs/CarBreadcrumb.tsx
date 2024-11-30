import { Container } from "reactstrap";
import { Href } from "../../../Constants/Constants";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { FC, Fragment, useState } from "react";
import { setShareModal } from "../../../ReduxToolkit/Reducers/SidebarReducers";
import ShareModal from "../../Property/Common/ProductDetail/MainDetail/ShareModal";
import { CarTitleListData } from "../../../Data/Car";
import SvgIcon from "../../../Utils/SvgIcon";
import DetailImages from "../../Property/Common/ProductDetail/DetailImages";
import { CarBreadcrumbType } from "../../../Types/ProductType";

const CarBreadcrumb: FC<CarBreadcrumbType> = ({ detailImages, mailClass, multiple, type }) => {
  const dispatch = useAppDispatch();
  const [isSave, setSave] = useState(false);
  return (
    <Fragment>
      <div className={`car-breadcrumbs-section ${mailClass ? mailClass : ""}`}>
        <Container>
          {!detailImages && (
            <div className="car-detail-image">
              <DetailImages type={type} multiple={multiple} />
            </div>
          )}
          <div className="car-top-title">
            <div className="car-title-flex">
              <div className="car-title mb-0">
                <h3>Velocity Racer Pro</h3>
                <p>Shifts gears automatically based on the car's speed and acceleration.</p>
                <ul className="car-title-list">
                  {CarTitleListData.map((item, index) => (
                    <li key={index}>
                      <SvgIcon iconId={`car/sprite/detail.svg#${item.icon}`} />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="price-box">
                <ul className="detail-social-list">
                  <li>
                    <a href={Href} onClick={() => dispatch(setShareModal())}>
                      <i className="ri-share-line" />
                    </a>
                  </li>
                  <li>
                    <a href={Href} className="print-button" onClick={() => window.print()}>
                      <i className="ri-printer-line" />
                    </a>
                  </li>
                  <li>
                    <a href={Href} className={`add-to-fav ${isSave ? "clicked" : ""}`} onClick={() => setSave(!isSave)}>
                      <i className={`ri-bookmark-${isSave ? "fill" : "line"} save-${isSave ? "icon" : "outline"}`} />
                    </a>
                  </li>
                </ul>
                <h4>
                  $25,200 <span>/ EMI - ₹ 1.58L</span>
                </h4>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <ShareModal />
    </Fragment>
  );
};

export default CarBreadcrumb;
