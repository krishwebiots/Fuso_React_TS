import { FC, Fragment, useEffect, useState } from "react";
import { UncontrolledAccordion } from "reactstrap";
import { CarColorData, CategoriesData, FuelTypeData, ModalYearData, OwnerData, SeatsData, TransmissionData } from "../../../../../Data/Car";
import { JobAllCategoriesData, JobByData, JobCompanyTypeData, JobEducationData, JobLocationData, JobTopCompaniesData, JobTypeData, JobWorkModeData } from "../../../../../Data/Job";
import { AmenitiesFilterData, BhkOptions, PropertyTypeData } from "../../../../../Data/Property";
import { useAppDispatch, useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { setMinAndMaxKilometers, setMinAndMaxPrice, setMinAndMaxSalary } from "../../../../../ReduxToolkit/Reducers/FilterReducers";
import { FilterSidebarType } from "../../../../../Types/ProductType";
import BrandModelFilter from "./BrandModelFilter";
import CommonFilter from "./Common/CommonFilter";

const FilterSidebar: FC<FilterSidebarType> = ({ value, modalType, type }) => {
  const { propertyType, bedsRooms, amenities, squareFeetStatus, yearBuiltStatus, carCategories, carFuelType, carModalYear, carSeats, carColor, carTransmission, carOwner, jobCategories, jobWorkMode, jobCompanyType, jobEducation, jobBy, jonLocation, jobTopCompanies, jobType } = useAppSelector((state) => state.filter);
  const [openItems, setOpenItems] = useState<string[]>(["1", "2", "3", "4", "5", "6", "7"]);
  const dispatch = useAppDispatch();

  const toggle = (id: string) => setOpenItems((openItems) => (openItems.includes(id) ? openItems.filter((item) => item !== id) : [...openItems, id]));

  let minPrice = Array.isArray(value) && value.length > 0 ? value.reduce((res: any, obj: any) => (Math.round(obj?.price) < Math.round(res?.price) ? obj : res)) : undefined;
  let maxPrice = Array.isArray(value) && value.length > 0 ? value.reduce((res: any, obj: any) => (Math.round(obj?.price) > Math.round(res?.price) ? obj : res)) : undefined;

  let minKilometers = Array.isArray(value) && value.length > 0 ? value.reduce((res: any, obj: any) => (Math.round(obj?.kilometers) < Math.round(res?.kilometers) ? obj : res)) : undefined;
  let maxKilometers = Array.isArray(value) && value.length > 0 ? value.reduce((res: any, obj: any) => (Math.round(obj?.kilometers) > Math.round(res?.kilometers) ? obj : res)) : undefined;

  let minSalary = Array.isArray(value) && value.length > 0 ? value.reduce((res: any, obj: any) => (Math.round(obj?.salary) < Math.round(res?.salary) ? obj : res)) : undefined;
  let maxSalary = Array.isArray(value) && value.length > 0 ? value.reduce((res: any, obj: any) => (Math.round(obj?.salary) > Math.round(res?.salary) ? obj : res)) : undefined;

  useEffect(() => {
    dispatch(setMinAndMaxPrice([minPrice?.price, maxPrice?.price]));
    dispatch(setMinAndMaxKilometers([minKilometers?.kilometers, maxKilometers?.kilometers]));
    dispatch(setMinAndMaxSalary([minSalary?.salary, maxSalary?.salary]));
  }, [dispatch, maxKilometers, maxPrice, maxSalary, minKilometers, minPrice, minSalary]);

  return (
    <div className={`property-sidebar ${type === "job" ? "job-sidebar" : ""}`}>
      <UncontrolledAccordion defaultOpen={openItems} stayOpen toggle={toggle} className={`${type === "car" ? "car" : type === "job" ? "car-accordion job" : ""}-accordion`}>
        {type === "property" ? (
          <Fragment>
            {modalType === "map-modal" && <CommonFilter title="Map Modal" id="7" modalType={modalType} />}
            <CommonFilter title="Property Type" id="1" data={PropertyTypeData} checkValue={propertyType} />
            <CommonFilter title="Price range" id="2" priceRange type={type} />
            <CommonFilter title="Beds rooms" id="3" data={BhkOptions} checkValue={bedsRooms} />
            <CommonFilter title="Square Feet" id="4" values={squareFeetStatus} squareFeet />
            <CommonFilter title="Year Built" id="5" values={yearBuiltStatus} squareFeet />
            <CommonFilter title="Amenities" id="6" data={AmenitiesFilterData} checkValue={amenities} />
          </Fragment>
        ) : type === "job" ? (
          <Fragment>
            <CommonFilter title="All Categories" id="2" data={JobAllCategoriesData} checkValue={jobCategories} type={type} />
            <CommonFilter title="Salary" id="3" priceRange type={type} />
            <CommonFilter title="Work Mode" id="4" data={JobWorkModeData} checkValue={jobWorkMode} type={type} radio />
            <CommonFilter title="Company Type" id="9" data={JobCompanyTypeData} checkValue={jobCompanyType} type={type} />
            <CommonFilter title="Education" id="10" data={JobEducationData} checkValue={jobEducation} type={type} />
            <CommonFilter title="By" id="11" data={JobByData} checkValue={jobBy} type={type} />
            <CommonFilter title="Location" id="12" data={JobLocationData} checkValue={jonLocation} type={type} />
            <CommonFilter title="Top CompaniesData" id="13" data={JobTopCompaniesData} checkValue={jobTopCompanies} type={type} />
            <CommonFilter title="Job Type" id="14" data={JobTypeData} checkValue={jobType} type={type} />
          </Fragment>
        ) : (
          <Fragment>
            <BrandModelFilter id="1" />
            <CommonFilter title="Budget" id="2" priceRange type={type} />
            <CommonFilter title="Categories" id="3" data={CategoriesData} checkValue={carCategories} radio type={type} />
            <CommonFilter title="Fuel Type" id="8" data={FuelTypeData} checkValue={carFuelType} type={type} />
            <CommonFilter title="Modal Year" id="9" data={ModalYearData} checkValue={carModalYear} radio type={type} />
            <CommonFilter title="Seats" id="10" data={SeatsData} checkValue={carSeats} type={type} />
            <CommonFilter title="Color" id="11" data={CarColorData} checkValue={carColor} type={type} subClass="filter-color" />
            <CommonFilter title="KMS Driven" id="12" priceRange type="kilometers" />
            <CommonFilter title="Transmission" id="13" data={TransmissionData} checkValue={carTransmission} type={type} />
            <CommonFilter title="Owner" id="14" data={OwnerData} checkValue={carOwner} type={type} />
          </Fragment>
        )}
      </UncontrolledAccordion>
    </div>
  );
};

export default FilterSidebar;
