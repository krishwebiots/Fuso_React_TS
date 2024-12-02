import { Rating } from "react-simple-star-rating";
import { Label } from "reactstrap";
import { Href } from "../../../../../Constants/Constants";
import { useAppDispatch } from "../../../../../ReduxToolkit/Hooks";
import { setShareModal } from "../../../../../ReduxToolkit/Reducers/SidebarReducers";
import { Fragment } from "react/jsx-runtime";
import ShareModal from "./ShareModal";
import { FC, useState } from "react";
import { CarTitleListData } from "../../../../../Data/Car";
import SvgIcon from "../../../../../Utils/SvgIcon";

const MainDetail: FC<{ type?: string }> = ({ type }) => {
  const dispatch = useAppDispatch();
  const [isSave, setSave] = useState(false);
  return (
    <Fragment>
      {type === "property" && (
        <div className="property-detail-main">
          <div className="main-detail-flex">
            <div>
              <h3>Luxury 3-Bedroom Mansion with Pool</h3>
              <h6>Vasant Kunj, New Delhi, Vasant Kunj, New Delhi - South, Delhi NCR</h6>
              <div className="label-flex">
                <Rating initialValue={4} size={23} />
                <Label className="detail-label">For Sale</Label>
              </div>
            </div>
            <div className="price-box">
              <h4>
                $25,200 <span>/ EMI - ₹ 1.58L</span>
              </h4>
              <ul className="detail-social-list">
                <li>
                  <a href={Href} onClick={() => dispatch(setShareModal())}>
                    <i className="ri-share-line" />
                    Share
                  </a>
                </li>
                <li>
                  <a href={Href} className="print-button" onClick={() => window.print()}>
                    <i className="ri-printer-line" />
                    Print
                  </a>
                </li>
                <li>
                  <a href={Href} className={`add-to-fav ${isSave ? "clicked" : ""}`} onClick={() => setSave(!isSave)}>
                    <i className={`ri-bookmark-${isSave ? "fill" : "line"} save-${isSave ? "icon" : "outline"}`} />
                    Save
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {type === "car" && (
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
      )}
      <ShareModal />
    </Fragment>
  );
};

export default MainDetail;
