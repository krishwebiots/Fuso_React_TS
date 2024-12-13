import { FC, useState } from "react";
import { Button } from "reactstrap";
import ConfigDB from "../Config/ThemeCustomizerConfig";

const Customizer: FC<{ part: string[] }> = ({ part }) => {
  const [isLayoutMode, setLayoutMode] = useState(false);
  const [isLayoutType, setLayoutType] = useState(false);

  const toggleLayoutMode = () => {
    const mode = isLayoutMode ? "light" : "dark";
    document.body.classList.toggle("light", isLayoutMode);
    document.body.classList.toggle("dark", !isLayoutMode);
    ConfigDB.mix_background_layout = mode;
    setLayoutMode(!isLayoutMode);
  };

  const toggleLayoutType = () => {
    const layoutType = isLayoutType ? "ltr" : "rtl";
    document.documentElement.dir = layoutType;
    ConfigDB.layout_type = layoutType;
    setLayoutType(!isLayoutType);
  };

  return (
    <div className={`theme-btn-flex ${part[1] === "job" ? "job-color-change" : part[1] === "car-2" ? "car2-color-change" : ""}`}>
      {part[1] !== "job-2" && part[2] !== "login-2" && part[2] !== "login-3" && part[2] !== "signup-2" && part[2] !== "signup-3" && (
        <Button className="mode-button mode-change-button" onClick={toggleLayoutMode}>
          <i className={`ri-${isLayoutMode ? "sun" : "moon"}-line`} />
          <span>{isLayoutMode ? "Light" : "Dark"}</span>
        </Button>
      )}
      <Button className="mode-button rtlBtnEl" onClick={toggleLayoutType}>
        <i className="ri-repeat-line" />
        <span>{isLayoutType ? "LTR" : "RTL"}</span>
      </Button>
    </div>
  );
};

export default Customizer;
