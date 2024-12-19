import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../../ReduxToolkit/Hooks";
import { FilterProductsType, ProductType } from "../../../Types/ProductType";

const UseFilterCar = ({ value }: FilterProductsType) => {
  const [showProduct, setShowProduct] = useState<ProductType[]>(value);
  const { carBrandModel, budgetStatus, carCategories, carFuelType, carModalYear, carSeats, carColor, carTransmission, carOwner, carKilometers, popular, sortBy } = useAppSelector((state) => state.filter);
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const router = useNavigate();

  useEffect(() => {
    const filteredProducts = value
      ?.filter((product) => {
        const BrandModel = carBrandModel.length === 0 || product.category === undefined || carBrandModel.some((prop) => product.category?.includes(prop));
        const PriceBudget = product.price !== undefined && budgetStatus ? budgetStatus[0] <= product.price && budgetStatus[1] >= product.price && true : true;
        const Categories = carCategories.length === 0 || product.category === undefined || product.category?.includes(carCategories) || carCategories.includes("all");
        const FuelType = carFuelType.length === 0 || product.fuel === undefined || carFuelType.includes(product.fuel);
        const ModalTear = product.year === undefined || carModalYear <= product.year;
        const Seats = carSeats.length === 0 || product.seats === undefined || carSeats.includes(product.seats);
        const Color = carColor.length === 0 || product.color === undefined || carColor.includes(product.color);
        const Transmission = carTransmission.length === 0 || product.transmission === undefined || carTransmission.includes(product.transmission);
        const Owner = carOwner.length === 0 || product.owner === undefined || carOwner.includes(product.owner);
        const Kilometers = product.kilometers !== undefined && carKilometers ? carKilometers[0] <= product.kilometers && carKilometers[1] >= product.kilometers && true : true;
        const MostPopular = !popular || product.productState === popular;

        return BrandModel && PriceBudget && Categories && FuelType && ModalTear && Seats && Color && Transmission && Owner && Kilometers && MostPopular;
      })
      .sort((product1, product2) => {
        if (sortBy === "$ High To Low") return (product2.price ?? 0) - (product1.price ?? 0);
        if (sortBy === "Alphabetical A-Z") return product1.title.localeCompare(product2.title);
        if (sortBy === "Alphabetical Z-A") return product2.title.localeCompare(product1.title);
        return 0;
      });

    setShowProduct(filteredProducts);

    const params = new URLSearchParams(searchParams);

    ["brand-model", "categories", "fuel", "modal", "seats", "color", "transmission", "owner"].forEach((name) => params.delete(name));

    if (carBrandModel.length !== 0) params.set("brand-model", carBrandModel.join(","));
    if (budgetStatus) params.set("budget", `${budgetStatus[0]}-${budgetStatus[1]}`);
    if (carCategories.length !== 0) params.set("categories", carCategories);
    if (carFuelType.length !== 0) params.set("fuel", carFuelType.join(","));
    if (carModalYear) params.set("modal", carModalYear);
    if (carSeats.length !== 0) params.set("seats", carSeats.join(","));
    if (carColor.length !== 0) params.set("color", carColor.join(","));
    if (carTransmission.length !== 0) params.set("transmission", carTransmission.join(","));
    if (carOwner.length !== 0) params.set("owner", carOwner.join(","));
    if (carKilometers) params.set("kilometers", `${carKilometers[0]}-${carKilometers[1]}`);

    router(`${pathname}?${params}`);
  }, [carBrandModel, pathname, budgetStatus, router, searchParams, value, carCategories, carFuelType, carModalYear, carSeats, carColor, carTransmission, carOwner, carKilometers, popular, sortBy]);

  return showProduct;
};

export default UseFilterCar;
