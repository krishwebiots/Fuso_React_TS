import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { FilterProductsType, ProductType } from "../../../../Types/ProductType";

const UseFilterProperty = ({ value }: FilterProductsType) => {
  const [showProduct, setShowProduct] = useState<ProductType[]>(value);
  const { propertyType, bedsRooms, amenities, squareFeetStatus, yearBuiltStatus, priceStatus, sortBy, popular } = useAppSelector((state) => state.filter);
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const router = useNavigate();

  useEffect(() => {
    const filteredProducts = value
      ?.filter((product) => {
        const filterPropertyType = propertyType.length === 0 || product.category === undefined || propertyType.some((prop) => product.category?.includes(prop) || propertyType.includes("all"));
        const filterBeadsRooms = bedsRooms.length === 0 || product.bhk === undefined || bedsRooms.includes(product.bhk);
        const filterAmenities = amenities.length === 0 || product.amenities === undefined || amenities.includes(product.amenities);
        const filterSquareFeet = product.squareFeet !== undefined && squareFeetStatus ? squareFeetStatus[0] <= product.squareFeet && squareFeetStatus[1] >= product.squareFeet && true : true;
        const filteryearBuilt = product.year !== undefined && yearBuiltStatus ? yearBuiltStatus[0] <= product.year && yearBuiltStatus[1] >= product.year && true : true;
        const filteredPrice = product.price !== undefined && priceStatus ? priceStatus[0] <= product.price && priceStatus[1] >= product.price && true : true;
        const filterMostPopular = !popular || product.productState === popular;

        return filterPropertyType && filterBeadsRooms && filterAmenities && filterSquareFeet && filteryearBuilt && filteredPrice && filterMostPopular;
      })
      .sort((product1, product2) => {
        if (sortBy === "Price (High to Low)") return (product2.price ?? 0) - (product1.price ?? 0);
        if (sortBy === "User Rating (High to Low)") return (product2.rating ?? 0) - (product1.rating ?? 0);
        return 0;
      });
    setShowProduct(filteredProducts);

    const params = new URLSearchParams(searchParams);
    ["property", "beds", "price", "square", "year", "amenities"].forEach((name) => params.delete(name));

    propertyType.forEach((price) => params.append("property", price));
    if (priceStatus) params.set("price", `${priceStatus[0]}-${priceStatus[1]}`);
    bedsRooms.forEach((beds) => params.append("beds", beds));
    if (squareFeetStatus) params.set("square", `${squareFeetStatus[0]}-${squareFeetStatus[1]}`);
    if (yearBuiltStatus) params.set("year", `${yearBuiltStatus[0]}-${yearBuiltStatus[1]}`);
    amenities.forEach((amenities) => params.append("amenities", amenities));

    router(`${pathname}?${params}`);
  }, [amenities, bedsRooms, pathname, popular, priceStatus, propertyType, router, searchParams, sortBy, squareFeetStatus, value, yearBuiltStatus]);

  return showProduct;
};

export default UseFilterProperty;
