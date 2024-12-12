import { FC } from "react";
import { RadioGroupType } from "../../../../../../Types/OtherType";
import { Label } from "reactstrap";

const RadioGroup: FC<RadioGroupType> = ({ name, labels, ids, label }) => {
  return (
    <div className="form-input">
      <Label>{label}</Label>
      <ul className="number-radio-list">
        {labels.map((label, index) => (
          <li key={ids[index]}>
            <input type="radio" name={name} id={ids[index]} />
            <label htmlFor={ids[index]}>{label}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RadioGroup;
