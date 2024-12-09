import { dynamicImage, Image } from "../../../Utils";

const BlogDetailTitle = () => {
  return (
    <div className="blog-detail-title">
      <h3>Road Warriors: Adventure Awaits with the Perfect Ride</h3>
      <ul className="blog-view-list">
        <li className="author-name-box">
          <Image src={dynamicImage("car/testimonial/4.jpg")} alt="p-1" className="img-fluid" />
          <span className="author-name">Rose Roberts</span>
        </li>
        <li>
          <i className="ri-calendar-line" />
          <span>03/12/2021</span>
        </li>
        <li>
          <i className="ri-eye-line" />
          <span>20K Viewed</span>
        </li>
      </ul>
    </div>
  );
};

export default BlogDetailTitle;
