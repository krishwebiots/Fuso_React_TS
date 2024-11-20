import React from "react";
import { Rating } from "react-simple-star-rating";
import { Label } from "reactstrap";
import { Href } from "../../../../Constants/Constants";

const MainDetail = () => {
  return (
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
              <a href={Href}>
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
              <a href={Href} className="add-to-fav">
                <i className="ri-bookmark-line save-outline" />
                <i className="ri-bookmark-fill save-icon" />
                Save
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainDetail;
