import { Add } from "iconsax-react";
import { Button } from "reactstrap";
import { Close } from "../../Constants/Constants";

const CloseBtn = ({ toggle }: { toggle: () => void }) => {
  return (
    <Button onClick={toggle} close>
      {Close} <Add className="iconsax" />
    </Button>
  );
};

export default CloseBtn;
