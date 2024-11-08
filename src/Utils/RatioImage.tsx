import React, { useEffect, useRef } from "react";
import { RatioImageType } from "../Types/CommonComponentsType";

const RatioImage: React.FC<RatioImageType> = (props) => {
  const { alt } = props;
  const bgImg = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = bgImg.current;
    if (image && image.classList.contains("bg-img")) {
      const parentElement = image.parentElement;
      const src = image.getAttribute("src");
      if (parentElement) {
        parentElement.classList.add("bg-size");
        image.style.display = "none";
        parentElement.setAttribute(
          "style",
          `
          background-image: url(${src});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: block;
          `
        );
      }
    }
  }, []);

  return <img ref={bgImg} {...props} alt={alt || "image"} />;
};
export default RatioImage;
