import { FC, useState } from "react";
import { Tooltip } from "reactstrap";
import { TooltipsType } from "../../Types/CommonComponentsType";

const Tooltips: FC<TooltipsType> = ({ title, target }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  return (
    <Tooltip isOpen={tooltipOpen} target={target} toggle={() => setTooltipOpen(!tooltipOpen)}>
      {title}
    </Tooltip>
  );
};

export default Tooltips;
