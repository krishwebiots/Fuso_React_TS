import { FC, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { Fragment } from "react/jsx-runtime";
import { Label } from "reactstrap";
import { Applicants, CarLocation, CarMainLabel, ForSale, Href, JobLocation, JobMainLabel, Print, PropertyLocation, PropertyMainLabel, Save, Share } from "../../../../Constants/Constants";
import { CarTitleListData } from "../../../../Data/Car";
import { SkillListData } from "../../../../Data/Job";
import { useAppDispatch } from "../../../../ReduxToolkit/Hooks";
import { setShareModal } from "../../../../ReduxToolkit/Reducers/LayoutReducers";
import { MainDetailType } from "../../../../Types/ProductType";
import { dynamicSvg, Image } from "../../../../Utils";
import SvgIcon from "../../../../Utils/SvgIcon";
import ShareModal from "./ShareModal";

const MainDetail: FC<MainDetailType> = ({ type, detailType }) => {
  const dispatch = useAppDispatch();
  const [isSave, setSave] = useState(false);
  return (
    <Fragment>
      {type === "property" && (
        <div className="property-detail-main">
          <div className="main-detail-flex">
            <div>
              <h3>{PropertyMainLabel}</h3>
              <h6>{PropertyLocation}</h6>
              <div className="label-flex">
                <Rating initialValue={4} size={23} />
                <Label className="detail-label">{ForSale}</Label>
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
                    {Share}
                  </a>
                </li>
                <li>
                  <a href={Href} className="print-button" onClick={() => window.print()}>
                    <i className="ri-printer-line" />
                    {Print}
                  </a>
                </li>
                <li>
                  <a href={Href} className={`add-to-fav ${isSave ? "clicked" : ""}`} onClick={() => setSave(!isSave)}>
                    <i className={`ri-bookmark-${isSave ? "fill" : "line"} save-${isSave ? "icon" : "outline"}`} />
                    {Save}
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
              <h3>{CarMainLabel}</h3>
              <p>{CarLocation}</p>
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
      {type === "job" && (
        <div className={`top-detail ${detailType === "style_2" ? "top-detail-style-2" : ""}`}>
          <div className="detail-title-flex">
            <div className="job-icon">
              <Image src={dynamicSvg("job/job-box/1.svg")} alt="j-1" className="img-fluid" />
            </div>
            <div className="top-title">
              <div className="review-title-flex">
                <div>
                  <h5>{JobMainLabel}</h5>
                  <span className="review-rating">
                    <span>
                      <i className="ri-star-fill" />
                      4.3
                    </span>
                    85 Review
                  </span>
                </div>
              </div>
              <ul className="review-list">
                <li>
                  <i className="ri-time-line" /> : <span>30+ days ago</span>
                </li>
                <li>
                  <i className="ri-team-line" /> {Applicants}
                  <span>20 people View</span>
                </li>
              </ul>
              <div className="flex-address">
                <i className="ri-map-pin-line" />
                <p>{JobLocation}</p>
              </div>
              <ul className="skill-list">
                {SkillListData.map((item, index) => (
                  <li key={index}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      <ShareModal />
    </Fragment>
  );
};

export default MainDetail;
