import { LanguageCircle } from "iconsax-react";
import { useTranslation } from "react-i18next";
import { Href, Language } from "../../../Constants/Constants";
import { LanguagesData } from "../../../Data/Layout/Header";

const LanguageSection = () => {
  const { i18n } = useTranslation();
  return (
    <div className="login-flex onhover-dropdown">
      <a href={Href} className="login-icon">
        <LanguageCircle />
        <span>{Language}</span>
        <i className="ri-arrow-down-wide-line" />
      </a>
      <ul className="active-list onhover-list">
        {LanguagesData.map((item, index) => (
          <li className="active-item" key={index} onClick={() => i18n.changeLanguage(item.data)}>
            <a href={Href}>{item.language}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSection;
