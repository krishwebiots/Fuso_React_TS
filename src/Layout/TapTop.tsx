import { Button } from "reactstrap";
import { dynamicImage, Image } from "../Utils";
import UsePathName from "../Utils/UsePathName";
import UseStickyBar from "../Utils/UseStickyBar";

const TapTop = () => {
  const fix = UseStickyBar(100);
  const [Path] = UsePathName();

  const executeScroll = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const isJobOrProperty = ["job", "property"].some((item) => Path?.includes(item));

  return (
    <div className={`tap-to-tap ${isJobOrProperty ? (Path === "job" ? "job-color-change" : "") : "car-top"} ${fix ? " show" : ""}`}>
      <Button color="transparent" onClick={executeScroll} className={isJobOrProperty ? "top-box" : ""}>
        {isJobOrProperty ? <i className="ri-arrow-up-line" /> : <Image src={dynamicImage(`${Path?.includes("car-2") ? "car2" : "car"}/tap-to-top.png`)} alt="car-top" className="img-fluid" />}
      </Button>
    </div>
  );
};

export default TapTop;
