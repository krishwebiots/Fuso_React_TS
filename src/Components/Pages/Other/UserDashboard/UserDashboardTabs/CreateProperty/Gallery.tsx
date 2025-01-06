import { AddProperty, GalleryTitle, Href } from "../../../../../../Constants/Constants";
import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";

const Gallery = () => {
  const uploader = Uploader({
    apiKey: "free",
  });
  const options = { multi: false };
  return (
    <div className="user-form-box">
      <h4 className="dashboard-title">{GalleryTitle}</h4>
      <div className="upload-box">
        <UploadDropzone uploader={uploader} options={options}  onUpdate={(files) => alert(files.map((x) => x.fileUrl).join("\n"))} className="dropzone" />
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
