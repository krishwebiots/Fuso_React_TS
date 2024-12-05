import { Fragment } from "react/jsx-runtime";
import { Filters, Href, SymbolRegex } from "../../../../../Constants/Constants";
import { useAppDispatch, useAppSelector } from "../../../../../ReduxToolkit/Hooks";

const HeaderFilter = () => {
  const filterTags: Record<string, any> = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const StringConvert = (str: string): string => str.replace(/([A-Z])/g, " $1").trim();

  const removeFilter = (key: string, value: any) => dispatch({ type: "filter/removeFilter", payload: { key, value } });

  const clearAllFilters = () => dispatch({ type: "filter/clearAllFilters" });

  const renderTag = (key: string, value: any, index: number = 0): JSX.Element | JSX.Element[] | null => {
    const updatedKey = StringConvert(key);
    const displayKey = updatedKey.replace("job", "").trim();

    if (!value || (Array.isArray(value) && value.length === 0)) {
      return null;
    }

    if (Array.isArray(value) && ["priceStatus", "squareFeetStatus", "yearBuiltStatus", "budgetStatus", "carKilometers", "jobSalary", "minAndMaxSalary"].includes(key)) {
      const [min, max] = value;
      const displayValue = `${min}-${max}`;
      return (
        <li key={`${key}-${index}`}>
          <a href={Href}>{`${displayKey}: ${displayValue}`}</a>
        </li>
      );
    }

    if (Array.isArray(value)) {
      return value.map((item, subIndex) => renderTag(key, item, subIndex)).filter((child): child is JSX.Element => child !== null);
    }

    return (
      <li key={`${key}-${index}`}>
        <a href={Href}>
          {`${displayKey}: ${value.replace(SymbolRegex, " ")}`}
          <i className="ri-close-line" onClick={() => removeFilter(key, value)} />
        </a>
      </li>
    );
  };

  const allTags = Object.entries(filterTags);

  return (
    <div className="filter-header">
      <h4>{Filters}</h4>
      <div className="job-header-box">
        <ul className="job-filter-list">
          {allTags.map(([key, value]) => (
            <Fragment key={key}>{renderTag(key, value)}</Fragment>
          ))}
        </ul>
        <a href="#!" className="text-btn" onClick={clearAllFilters}>
          Clear All
        </a>
      </div>
    </div>
  );
};

export default HeaderFilter;
