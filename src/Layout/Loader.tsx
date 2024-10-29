/* eslint-disable no-useless-escape */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { Loaders } from "../Data/Layout/Loader";
import { dynamicGrf, Image } from "../Utils";

const Loader: React.FC = () => {
  const [show, setShow] = useState<boolean>(true);
  const { pathname } = useLocation();
  const [firstPart] = pathname
    .split("/")
    .slice(1)
    .map((item) => item.replace(/[!@#\$%\^\*\(\)_\+\{\}\[\]:;"'<>,.?/\\|`~=]/g, " "));

  useEffect(() => {
    const timeout = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timeout);
  }, [show]);

  const loaderKey = Object.keys(Loaders).find((key) => firstPart.includes(key));
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
          <div className={`${firstPart.includes("property") ? "property-loader" : `text-center ${firstPart.includes("job") ? "job-loader" : "car-loader"}`}`}>{loaderContent}</div>
        </div>
      )}
    </Fragment>
  );
};

export default Loader;
