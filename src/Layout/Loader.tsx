import { useEffect, useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { Loaders } from "../Data/Layout/Loader";
import { dynamicGrf, Image } from "../Utils";
import UsePathName from "../Utils/UsePathName";

const Loader = () => {
  const [show, setShow] = useState<boolean>(true);
  const [Path] = UsePathName();

  useEffect(() => {
    const timeout = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timeout);
  }, [show]);

  const loaderKey = Object.keys(Loaders).find((key) => Path === key);

  const loaderContent = Loaders[loaderKey || ""]?.svg || (
    <Fragment>
      <Image src={dynamicGrf(Loaders[loaderKey || ""]?.src || "car1-loader.gif")} alt="loader" className="img-fluid" />
      <h4>{Loaders[loaderKey || ""]?.text || "Loading Car rental Template. Please wait…"}</h4>
    </Fragment>
  );

  return (
    <Fragment>
      {show && (
        <div className="loader-wrapper">
          <div className={`${Path?.includes("property") ? "property-loader" : `text-center ${Path?.includes("job") ? "job-loader" : "car-loader"}`}`}>{loaderContent}</div>
        </div>
      )}
    </Fragment>
  );
};

export default Loader;
