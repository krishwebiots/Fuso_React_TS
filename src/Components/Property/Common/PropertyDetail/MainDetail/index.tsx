import { Rating } from "react-simple-star-rating";
import { Label } from "reactstrap";
import { Href } from "../../../../../Constants/Constants";
import { useAppDispatch } from "../../../../../ReduxToolkit/Hooks";
import { setShareModal } from "../../../../../ReduxToolkit/Reducers/SidebarReducers";
import { Fragment } from "react/jsx-runtime";
import ShareModal from "./ShareModal";
import { useState } from "react";

const MainDetail = () => {
  const dispatch = useAppDispatch();
  const [isSave, setSave] = useState(false);
  return (
    <Fragment>
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
                <a href={Href} className="print-button">
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
      <ShareModal />
    </Fragment>
  );
};

export default MainDetail;
