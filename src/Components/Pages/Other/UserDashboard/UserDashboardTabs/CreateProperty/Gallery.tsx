import { Dropzone, ExtFile, FileMosaic } from "@dropzone-ui/react";
import { GalleryExport } from "iconsax-react";
import { Fragment, useState } from "react";
import { AddProperty, ClickToUpload, GalleryTitle, Href } from "../../../../../../Constants/Constants";

const Gallery = () => {
  const [files, setFiles] = useState<ExtFile[]>([]);
  const updateFiles = (incomingFiles: ExtFile[]) => setFiles(incomingFiles);
  const removeFile = (id: string | number | undefined) => setFiles(files.filter((x: ExtFile) => x.id !== id));
  return (
    <div className="user-form-box">
      <h4 className="dashboard-title">{GalleryTitle}</h4>
      <div className="upload-box">
        <Dropzone onChange={updateFiles} className="dropzone" value={files} maxFiles={1} header={false} footer={false} minHeight="80px" label="Drag'n drop files here or click to Browse">
          {files.map((file: ExtFile) => (
            <FileMosaic key={file.id} {...file} onDelete={removeFile} info={true} preview />
          ))}
          {files.length === 0 && (
            <Fragment>
              <div className="upload-hidden">
                <GalleryExport className="iconsax" />
                <h5>{ClickToUpload}</h5>
              </div>
              <div className="upload-files-result" />
            </Fragment>
          )}
        </Dropzone>
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
