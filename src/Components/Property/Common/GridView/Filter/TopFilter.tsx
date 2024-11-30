const TopFilter = () => {
  return (
    <div className="top-flex">
      <h5>Filter:</h5>
      <ul className="top-filter">
        <li className="simple-select">
          <select>
            <option data-display="Select">Condition</option>
            <option value={1}>New</option>
            <option value={1}>Used</option>
          </select>
        </li>
        <li>
          <select>
            <option data-display="Select">Category</option>
            <option value={1}>Bus</option>
            <option value={1}>Car</option>
            <option value={1}>Truck</option>
            <option value={1}>Trailers</option>
          </select>
        </li>
        <li>
          <select>
            <option data-display="Select">Car Type</option>
            <option value={1}>Diesel</option>
            <option value={2}>Electric</option>
            <option value={3}>Petrol</option>
            <option value={4}>CNG</option>
            <option value={5}>Hybrid</option>
            <option value={6}>Convertible</option>
          </select>
        </li>
        <li>
          <select>
            <option data-display="Select">Any Models</option>
            <option value={1}>2020 &amp; above</option>
            <option value={2}>2016 &amp; above</option>
            <option value={3}>2012 &amp; above</option>
            <option value={4}>2008 &amp; above</option>
          </select>
        </li>
      </ul>
    </div>
  );
};

export default TopFilter;
