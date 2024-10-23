import { Media } from "reactstrap";
import { ImageProps } from "../Types/CommonComponentsType";

//dynamic image
const images = require.context(`/public/assets/images`, true);

export const dynamicImage = (image: string) => {
  return images(`./${image}`);
};

//Image Tag
export const Image: React.FC<ImageProps> = (props) => {
  return <Media {...props} alt={props.alt ? props.alt : "image"} loading="lazy" />;
};

//dynamic Number
export const dynamicNumber = (totalLength: number) => {
  return Array.from({ length: totalLength }, (_, index) => index + 1);
};