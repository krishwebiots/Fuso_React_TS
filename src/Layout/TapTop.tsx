import { FC } from "react";
import { Button } from "reactstrap";
import { PathTypes } from "../Types/LayoutType";
import { dynamicImage, Image } from "../Utils";
import UseStickyBar from "../Utils/UseStickyBar";

const TapTop: FC<PathTypes> = ({ part }) => {
  const fix = UseStickyBar(100);

  const executeScroll = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const isJobOrProperty = ["job", "property"].some((item) => part?.includes(item));

  return (
    <div className={`tap-to-tap ${isJobOrProperty ? (part?.includes("job-1") ? "job-color-change" : "") : "car-top"} ${fix ? " show" : ""}`}>
      <Button color="transparent" onClick={executeScroll} className={isJobOrProperty ? "top-box" : ""}>
        {isJobOrProperty ? <i className="ri-arrow-up-line" /> : <Image src={dynamicImage(`${part?.includes("car-2") ? "car2" : "car"}/tap-to-top.png`)} alt="car-top" className="img-fluid" />}
      </Button>
    </div>
  );
};

export default TapTop;
