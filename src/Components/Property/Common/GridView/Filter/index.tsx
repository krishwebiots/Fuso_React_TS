import { FC, Fragment, useEffect, useState } from "react";
import { UncontrolledAccordion } from "reactstrap";
import { AmenitiesFilterData, BhkOptions, PropertyTypeData } from "../../../../../Data/Property";
import { useAppDispatch, useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { FilterSidebarType } from "../../../../../Types/ProductType";
import CommonFilter from "./Common/CommonFilter";
import BrandModelFilter from "./BrandModelFilter";
import { CarColorData, CategoriesData, FuelTypeData, ModalYearData, OwnerData, SeatsData, TransmissionData } from "../../../../../Data/Car";
import { setMinAndMaxKilometers, setMinAndMaxPrice } from "../../../../../ReduxToolkit/Reducers/FilterReducers";
import { JobAllCategoriesData } from "../../../../../Data/Job";

const FilterSidebar: FC<FilterSidebarType> = ({ value, modalType, type }) => {
  const { propertyType, bedsRooms, amenities, squareFeetStatus, yearBuiltStatus, carCategories, carFuelType, carModalYear, carSeats, carColor, carTransmission, carOwner, jobCategories } = useAppSelector((state) => state.filter);
  const [openItems, setOpenItems] = useState<string[]>(["1", "2", "3", "4", "5", "6", "7"]);
  const dispatch = useAppDispatch();

  const toggle = (id: string) => setOpenItems((openItems) => (openItems.includes(id) ? openItems.filter((item) => item !== id) : [...openItems, id]));

  let minPrice = Array.isArray(value) && value.length > 0 ? value.reduce((res: any, obj: any) => (Math.round(obj?.price) < Math.round(res?.price) ? obj : res)) : undefined;
  let maxPrice = Array.isArray(value) && value.length > 0 ? value.reduce((res: any, obj: any) => (Math.round(obj?.price) > Math.round(res?.price) ? obj : res)) : undefined;

  let minKilometers = Array.isArray(value) && value.length > 0 ? value.reduce((res: any, obj: any) => (Math.round(obj?.kilometers) < Math.round(res?.kilometers) ? obj : res)) : undefined;
  let maxKilometers = Array.isArray(value) && value.length > 0 ? value.reduce((res: any, obj: any) => (Math.round(obj?.kilometers) > Math.round(res?.kilometers) ? obj : res)) : undefined;

  useEffect(() => {
    dispatch(setMinAndMaxPrice([minPrice?.price, maxPrice?.price]));
    dispatch(setMinAndMaxKilometers([minKilometers?.kilometers, maxKilometers?.kilometers]));
  }, [dispatch, maxKilometers, maxPrice, minKilometers, minPrice]);

  return (
    <div className={`property-sidebar ${type === "job" ? "job-sidebar" : ""}`}>
      <UncontrolledAccordion defaultOpen={openItems} stayOpen toggle={toggle} className={`${type === "car" ? "car" : type === "job" ? "car-accordion job" : ""}-accordion`}>
        {type === "property" ? (
          <Fragment>
            {modalType === "map-modal" && <CommonFilter title="Map Modal" id="7" modalType={modalType} />}
            <CommonFilter title="Property Type" id="1" data={PropertyTypeData} checkValue={propertyType} />
            <CommonFilter title="Price range" id="2" priceRange type="property" />
            <CommonFilter title="Beds rooms" id="3" data={BhkOptions} checkValue={bedsRooms} />
            <CommonFilter title="Square Feet" id="4" values={squareFeetStatus} squareFeet />
            <CommonFilter title="Year Built" id="5" values={yearBuiltStatus} squareFeet />
            <CommonFilter title="Amenities" id="6" data={AmenitiesFilterData} checkValue={amenities} />
          </Fragment>
        ) : type === "job" ? (
          <Fragment>
            <CommonFilter title="All Categories" id="2" data={JobAllCategoriesData} checkValue={jobCategories} type="job" />
          </Fragment>
        ) : (
          <Fragment>
            <BrandModelFilter id="1" />
            <CommonFilter title="Budget" id="2" priceRange type="car" />
            <CommonFilter title="Categories" id="3" data={CategoriesData} checkValue={carCategories} radio type="car" />
            <CommonFilter title="Fuel Type" id="8" data={FuelTypeData} checkValue={carFuelType} type="car" />
            <CommonFilter title="Modal Year" id="9" data={ModalYearData} checkValue={carModalYear} radio type="car" />
            <CommonFilter title="Seats" id="10" data={SeatsData} checkValue={carSeats} type="car" />
            <CommonFilter title="Color" id="11" data={CarColorData} checkValue={carColor} type="car" subClass="filter-color" />
            <CommonFilter title="KMS Driven" id="12" priceRange type="kilometers" />
            <CommonFilter title="Transmission" id="13" data={TransmissionData} checkValue={carTransmission} type="car" />
            <CommonFilter title="Owner" id="14" data={OwnerData} checkValue={carOwner} type="car" />
          </Fragment>
        )}
      </UncontrolledAccordion>
    </div>
  );
};

export default FilterSidebar;
