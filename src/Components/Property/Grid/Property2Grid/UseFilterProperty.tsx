import { useEffect, useState } from "react";
import { FilterProductsType, ProductType } from "../../../../Types/ProductType";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";

const UseFilterProperty = ({ value }: FilterProductsType) => {
  const [showProduct, setShowProduct] = useState<ProductType[]>(value);
  const { propertyType, bedsRooms, amenities, squareFeetStatus } = useAppSelector((state) => state.filter);

  useEffect(() => {
    const filteredProducts = value?.filter((product) => {
      const filterPropertyType = propertyType.length === 0 || product.category === undefined || propertyType.some((prop) => product.category?.includes(prop) || propertyType.includes("all"));
      const filterBeadsRooms = bedsRooms.length === 0 || product.bhk === undefined || bedsRooms.includes(product.bhk);
      const filterAmenities = amenities.length === 0 || product.amenities === undefined || amenities.includes(product.amenities);
      const filterSquareFeet = squareFeetStatus.min === 0 || squareFeetStatus.max === 0 || product.squareFeet === undefined || product.squareFeet < squareFeetStatus.min || product.squareFeet > squareFeetStatus.max;
      return filterPropertyType && filterBeadsRooms && filterAmenities && filterSquareFeet;
    });
    setShowProduct(filteredProducts);
  }, [amenities, bedsRooms, propertyType, squareFeetStatus.max, squareFeetStatus.min, value]);

  return showProduct;
};

export default UseFilterProperty;
