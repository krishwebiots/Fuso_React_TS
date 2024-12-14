import { Clock } from "iconsax-react";
import { Fragment } from "react";
import { Label } from "reactstrap";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { dynamicSvg, Image } from "../../../../Utils";
import { SimilarJobsData } from "../../../../Data/Job";
import { toast } from "react-toastify";

const SimilarJobs = () => {
  const { productItem } = useAppSelector((state) => state.product);
  const PropertyData = productItem.filter((item) => item.type === "job");

  const handleWishlist = () => toast.success("Added to Wishlist successfully");

  return (
    <Fragment>
      {SimilarJobsData.map((item, index) => (
        <Fragment key={index}>
          <h6 className={`job-title ${index === 1 ? "mt-lg-5 mt-4" : ""}`}>{item}</h6>
          <div className="similar-bg">
            {PropertyData.slice(index === 0 ? 0 : 4, index === 0 ? 4 : 8).map((item, index) => (
              <div className="sidebar-job-box" key={index}>
                <div className="job-title-flex">
                  <div className="job-title">
                    <div className="job-icon">
                      {item.image.map((imgSrc, idx) => (
                        <Image src={dynamicSvg(imgSrc)} alt={`job-${idx}`} className="img-fluid" key={idx} />
                      ))}
                    </div>
                    <a href="job-left-sidebar.html" className="job-detail">
                      <h5>{item.title}</h5>
                      <span>{item.company}</span>
                    </a>
                  </div>
                  <a href="#!" className="save-btn" onClick={() => handleWishlist()}>
                    <i className="ri-bookmark-line" />
                  </a>
                </div>
                <div className="job-flex">
                  <div className="job-tag">
                    <Label>
                      <Image src={dynamicSvg("job/job-box/dollar-circle.svg")} alt="dollar-circle" className="img-fluid" />
                      {item.salary}K USD
                    </Label>
                    <Label>
                      <Image src={dynamicSvg("job/job-box/briefcase.svg")} alt="briefcase" className="img-fluid" />
                      {item.jobType?.slice(0, 1).map((job) => job.replace("_", " "))}
                    </Label>
                  </div>
                  <div className="post-time">
                    <span>
                      <Clock className="iconsax" />
                      {item.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default SimilarJobs;
