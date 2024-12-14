import { BenefitsTitle } from "../../../../../Constants/Constants";
import { BenefitsListData } from "../../../../../Data/Job";
import { dynamicSvg, Image } from "../../../../../Utils";

const Benefits = () => {
  return (
    <div className="description-box">
      <h5 className="description-title">{BenefitsTitle}</h5>
      <ul className="features-list">
        {BenefitsListData.map((item, index) => (
          <li key={index}>
            <Image src={dynamicSvg(`job/job-detail/${index + 1}.svg`)} alt="j-1" />
            <h5>{item}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Benefits;
