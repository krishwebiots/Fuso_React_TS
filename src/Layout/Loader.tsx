import { FC, useEffect, useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { Loaders } from "../Data/Layout/Loader";
import { PathTypes } from "../Types/LayoutType";
import { dynamicGrf, Image } from "../Utils";

const Loader: FC<PathTypes> = ({ part }) => {
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timeout);
  }, [show]);

  const loaderKey = Object.keys(Loaders).find((key) => part === key);

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
          <div className={`${part?.includes("property") ? "property-loader" : `text-center ${part?.includes("job") ? "job-loader" : "car-loader"}`}`}>{loaderContent}</div>
        </div>
      )}
    </Fragment>
  );
};

export default Loader;
