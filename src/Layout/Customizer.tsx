import { FC, useState } from "react";
import { Button } from "reactstrap";
import ConfigDB from "../Config/ThemeCustomizerConfig";
import { PathTypes } from "../Types/LayoutType";

const Customizer: FC<PathTypes> = ({ part }) => {
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
    <div className="theme-btn-flex">
      {part !== "job-2" && (
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
