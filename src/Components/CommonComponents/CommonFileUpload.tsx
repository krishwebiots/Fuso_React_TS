import { Export } from "iconsax-react";
import { FC, Fragment, useState } from "react";
import Dropzone from "react-dropzone";

const CommonFileUpload: FC<{ multiple?: boolean }> = ({ multiple }) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const onDrop = (acceptedFiles: File[]) => setUploadedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  const removeFile = (indexToRemove: number) => setUploadedFiles((prevFiles) => prevFiles.filter((_, index) => index !== indexToRemove));
  return (
    <Fragment>
      {uploadedFiles.length === 0 ? (
        <Dropzone onDrop={onDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="dropzone-container">
              <Export className="iconsax" />
              <input {...getInputProps()} />
              <h5>Click to upload, or drop files here.</h5>
            </div>
          )}
        </Dropzone>
      ) : (
        <Fragment>
          {multiple && (
            <Dropzone onDrop={onDrop}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()} className="add-more-files-zone">
                  <Export className="iconsax" />
                  <input {...getInputProps()} />
                  <h5>Click or drag more files to add</h5>
                </div>
              )}
            </Dropzone>
          )}

          <div className="uploaded-files">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="file-card">
                {file.type.startsWith("image/") ? <img src={URL.createObjectURL(file)} alt={file.name} className="file-thumbnail" /> : <div className="file-placeholder">{file.name.split(".").pop()?.toUpperCase()} File</div>}
                <p className="file-name">{file.name}</p>
                <p className="file-size">{(file.size / 1024).toFixed(2)} KB</p>
                <button onClick={() => removeFile(index)} className="remove-button" title="Remove file">
                  ×
                </button>
              </div>
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default CommonFileUpload;
