import { AddProperty, GalleryTitle, Href } from "../../../../../../Constants/Constants";
import CommonFileUpload from "../../../../../CommonComponents/CommonFileUpload";

const Gallery = () => {
  return (
    <div className="user-form-box">
      <h4 className="dashboard-title">{GalleryTitle}</h4>
      <div className="upload-box">
        <CommonFileUpload multiple />
      </div>
      <div className="text-end mt-3">
        <a href={Href} className="btn-solid">
          {AddProperty}
        </a>
      </div>
    </div>
  );
};

export default Gallery;
