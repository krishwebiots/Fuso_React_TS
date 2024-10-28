/* eslint-disable no-useless-escape */
import { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { dynamicImage, Image } from "../Utils";
import { useLocation } from "react-router-dom";

const TapTop = () => {
  const [tapTopStyle, setTapTopStyle] = useState(false);
  const path = useLocation();
  const symbolRegex = /[!@#\$%\^\*\(\)_\+\{\}\[\]:;"'<>,.?/\\|`~=]/g;
  const [firstPart] = path.pathname
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

  return (
    <div className={`tap-to-tap car-top${tapTopStyle ? " show" : ""}`}>
      <Button color="transparent" onClick={executeScroll}>
        <Image src={dynamicImage(`${firstPart.includes("car-2") ? "car2/tap-to-top.png" : "car/tap-to-top.png"}`)} alt="car-top" className="img-fluid" />
      </Button>
    </div>
  );
};

export default TapTop;
