import { useSearchParams } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { ClearAll, Filters, Href, SymbolRegex } from "../../../../Constants/Constants";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { clearAllFilters, removeFilter } from "../../../../ReduxToolkit/Reducers/FilterReducers";

const HeaderFilter = () => {
  const filterTags: Record<string, any> = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const parseQueryParams = (): Record<string, string> => {
    const parsedData: Record<string, string> = {};
    searchParams.forEach((value, key) => (parsedData[key] = value));
    return parsedData;
  };

  const oldData = parseQueryParams();

  const remove = (key: string, value: any) => dispatch(removeFilter({ key, value }));

  const clearAll = () => dispatch(clearAllFilters());

  const stringConvert = (str: string) => str.charAt(0).toUpperCase() + str.slice(1).replace(SymbolRegex, " ");

  const renderTag = (key: string, value: any, index: number = 0): JSX.Element | JSX.Element[] | null => {
    if ("jobSalary" === key) {
      return (
        <li key={`${key}-${index}`}>
          <a href={Href}>{`${stringConvert(key)}: ${filterTags[key][0]} - ${filterTags[key][1]}`}</a>
        </li>
      );
    }
    if (Array.isArray(value)) {
      return value.map((item, subIndex) => renderTag(key, item, subIndex)).filter((child): child is JSX.Element => child !== null);
    }
    return (
      <li key={`${key}-${index}`}>
        <a href={Href}>
          {stringConvert(value)}
          <i className="ri-close-line" onClick={() => remove(key, value)} />
        </a>
      </li>
    );
  };

  return (
    <div className="filter-header">
      <h4>{Filters}</h4>
      <div className="job-header-box">
        <ul className="job-filter-list">{filterTags && Object.entries(filterTags).map(([key, value], i) => <Fragment key={i}>{filterTags[key] && oldData[key] && renderTag(key, value)}</Fragment>)}</ul>
        <a href="#!" className="text-btn" onClick={clearAll}>
          {ClearAll}
        </a>
      </div>
    </div>
  );
};

export default HeaderFilter;
