// import { Filters } from "../../../../../Constants/Constants";
// import { useAppSelector } from "../../../../../ReduxToolkit/Hooks";

// const HeaderFilter = () => {
//   const filterTag = useAppSelector((state) => state.filter);

//   // Convert camelCase to readable string
//   const StringConvert = (str: string) => {
//     return str.replace(/([A-Z])/g, " $1").trim();
//   };

//   // Render a single filter tag
//   const renderTag = (key: string, value: string | number | (string | number)[]) => {
//     const displayKey = StringConvert(key).replace(" Status", ""); // Clean up key name
//     const displayValue = Array.isArray(value) ? value.join(" - ") : String(value); // Format value

//     if (!displayValue || (Array.isArray(value) && value.length === 0)) return null;

//     return (
//       <li>
//         <div className="filter-tag" key={key}>
//           {`${displayKey}: ${displayValue}`}
//           <button className="btn-close" aria-label="Close"></button>
//         </div>
//       </li>
//     );
//   };

//   return (
//     <div className="filter-header">
//       <h4>{Filters}</h4>
//       <div className="job-header-box">
//         <ul className="job-filter-list">{Object.entries(filterTag).map(([key, value]) => renderTag(key, value))}</ul>
//         <a href="#!" className="text-btn">
//           Clear All
//         </a>
//       </div>
//     </div>
//   );
// };

// export default HeaderFilter;
import { Filters, Href } from "../../../../../Constants/Constants";
import { useAppSelector } from "../../../../../ReduxToolkit/Hooks";

const HeaderFilter = () => {
  const filterTag = useAppSelector((state) => state.filter);

  // Converts camelCase or PascalCase to readable strings
  const StringConvert = (str: string) => str.replace(/([A-Z])/g, " $1").trim();

  // Renders a single filter tag
  const renderTag = (key: string, value: any) => {
    if (value === null || value === undefined || value === "" || (Array.isArray(value) && value.length === 0)) {
      return null;
    }

    const formattedKey = StringConvert(key).replace(" Status", ""); // Clean up the key name
    const tagValue = Array.isArray(value) ? (value.length === 2 ? `${value[0]} - ${value[1]}` : value.join(", ")) : String(value);

    return (
      <a href={Href} key={`${key}-${tagValue}`}>
        {`${formattedKey}: ${tagValue}`}
        <button className="btn-close" aria-label="Close"></button>
      </a>
    );
  };

  return (
    <div className="filter-header">
      <h4>{Filters}</h4>
      <div className="job-header-box">
        <ul className="job-filter-list">
          {Object.entries(filterTag).map(([key, value]) => (
            <li key={key}>{renderTag(key, value)}</li>
          ))}
        </ul>
        <a href="#!" className="text-btn">
          Clear All
        </a>
      </div>
    </div>
  );
};

export default HeaderFilter;
