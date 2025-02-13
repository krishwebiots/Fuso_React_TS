import { FC } from "react";
import { SvgType } from "../Types/CommonComponentsType";

const SvgIcon: FC<SvgType> = (props) => {
  return (
    <svg className={props.className} style={props.style} onClick={props.onClick}>
      <use xlinkHref={`${process.env.PUBLIC_URL}/assets/svg/${props.iconId}`} />
    </svg>
  );
};
export default SvgIcon;
