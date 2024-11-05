/* eslint-disable no-useless-escape */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "reactstrap";
import { dynamicImage, Image } from "../Utils";

const TapTop = () => {
  const [tapTopStyle, setTapTopStyle] = useState(false);
  const { pathname } = useLocation();
  const symbolRegex = /[!@#\$%\^\*\(\)_\+\{\}\[\]:;"'<>,.?/\\|`~=]/g;
  const [firstPart] = pathname
    .split("/")
    .slice(1)
    .map((item) => item.replace(symbolRegex, " "));
  const executeScroll = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  const handleScroll = () => {
    if (window.scrollY > 100) setTapTopStyle(true);
    else setTapTopStyle(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isJobOrProperty = ["job", "property"].some((item) => firstPart.includes(item));

  return (
    <div className={`tap-to-tap ${isJobOrProperty ? (firstPart.includes("job-1") ? "job-color-change" : "") : "car-top"} ${tapTopStyle ? " show" : ""}`}>
      <Button color="transparent" onClick={executeScroll} className={isJobOrProperty ? "top-box" : ""}>
        {isJobOrProperty ? <i className="ri-arrow-up-line" /> : <Image src={dynamicImage(`${firstPart.includes("car-2") ? "car2" : "car"}/tap-to-top.png`)} alt="car-top" className="img-fluid" />}
      </Button>
    </div>
  );
};

export default TapTop;
