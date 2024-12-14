import { Filter } from "../../../../../Constants/Constants";
import { DropdownOptions } from "../../../../../Data/Car";

const TopFilter = () => {
  return (
    <div className="top-flex">
      <h5>{Filter}:</h5>
      <ul className="top-filter">
        {DropdownOptions.map((dropdown, index) => (
          <li className={index === 0 ? "simple-select" : ""} key={index}>
            <select>
              <option>{dropdown.label}</option>
              {dropdown.options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopFilter;
