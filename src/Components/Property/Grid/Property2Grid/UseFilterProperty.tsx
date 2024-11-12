import { useEffect, useState } from "react";
import { FilterProductsType, ProductType } from "../../../../Types/ProductType";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";

const UseFilterProperty = ({ value }: FilterProductsType) => {
  const [showProduct, setShowProduct] = useState<ProductType[]>(value);
  const { propertyType, bedsRooms, amenities, squareFeetStatus, yserBuiltStatus, priceStatus, sortBy, popular } = useAppSelector((state) => state.filter);

  useEffect(() => {
    const filteredProducts = value
      ?.filter((product) => {
        const filterPropertyType = propertyType.length === 0 || product.category === undefined || propertyType.some((prop) => product.category?.includes(prop) || propertyType.includes("all"));
        const filterBeadsRooms = bedsRooms.length === 0 || product.bhk === undefined || bedsRooms.includes(product.bhk);
        const filterAmenities = amenities.length === 0 || product.amenities === undefined || amenities.includes(product.amenities);
        const filterSquareFeet = product.squareFeet !== undefined && product.squareFeet >= squareFeetStatus.min && product.squareFeet <= squareFeetStatus.max;
        const filterYserBuilt = product.year !== undefined && product.year >= yserBuiltStatus.min && product.year <= yserBuiltStatus.max;
        const filteredPrice = product.price !== undefined && product.price >= priceStatus.min && product.price <= priceStatus.max;
        const filterMostPopular = popular ? product.productState === popular : true;

        return filterPropertyType && filterBeadsRooms && filterAmenities && filterSquareFeet && filterYserBuilt && filteredPrice && filterMostPopular;
      })
      .sort((product1, product2) => {
        if (sortBy === "Price (High to Low)") return (product2.price ?? 0) - (product1.price ?? 0);
        if (sortBy === "User Rating (High to Low)") return (product2.rating ?? 0) - (product1.rating ?? 0);
        return 0;
      });
    setShowProduct(filteredProducts);
  }, [amenities, bedsRooms, popular, priceStatus, propertyType, sortBy, squareFeetStatus, value, yserBuiltStatus]);

  return showProduct;
};

export default UseFilterProperty;
