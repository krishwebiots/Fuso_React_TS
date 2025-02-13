import { FC, useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input } from "reactstrap";
import { Href } from "../../../../../../Constants/Constants";
import { DropdownType } from "../../../../../../Types/OtherType";
import UseOutsideDropdown from "../../../../../../Utils/UseOutsideDropdown";

const RenderDropdown: FC<DropdownType> = ({ label, placeholder, items }) => {
  const { ref, isComponentVisible, setIsComponentVisible } = UseOutsideDropdown(false);
  const [selected, setSelected] = useState(placeholder);

  const toggle = () => setIsComponentVisible(!isComponentVisible);
  return (
    <div ref={ref} className="form-input">
      <label>{label}</label>
      <Dropdown className="select-dropdown" isOpen={isComponentVisible} toggle={toggle}>
        <DropdownToggle className="select-button" onClick={toggle}>
          <Input type="text" placeholder={selected} />
        </DropdownToggle>
        <DropdownMenu className="select-menu">
          {items.map((item, index) => (
            <DropdownItem key={index} className={`select-item ${selected === item ? "active" : ""}`} href={Href} onClick={() => setSelected(item)}>
              {item}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default RenderDropdown;
