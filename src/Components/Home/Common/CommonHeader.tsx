import { CommonHeaderType } from "../../../Types/CommonComponentsType";

const CommonHeader: React.FC<CommonHeaderType> = ({ title, content, animation, headClass, titleClass }) => {
  return (
    <div className={headClass}>
      <div className="title-flex">
        {animation && (
          <div className="title-animation-left">
            <span />
            <span />
          </div>
        )}
        <h2 className={titleClass}>{title}</h2>
        {animation && (
          <div className="title-animation-right">
            <span />
            <span />
          </div>
        )}
      </div>
      <p>{content}</p>
    </div>
  );
};

export default CommonHeader;
