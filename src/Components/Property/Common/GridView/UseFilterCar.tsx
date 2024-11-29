import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { FilterProductsType, ProductType } from "../../../../Types/ProductType";

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
        const FuelType = carFuelType.length === 0 || product.fuel === undefined || carFuelType.some((prop) => product.fuel?.includes(prop));
        const ModalTear = product.year === undefined || carModalYear <= product.year;
        const Seats = carSeats.length === 0 || product.seats === undefined || carSeats.some((prop) => product.seats?.includes(prop));
        const Color = carColor.length === 0 || product.color === undefined || carColor.some((prop) => product.color?.includes(prop));
        const Transmission = carTransmission.length === 0 || product.transmission === undefined || carTransmission.some((prop) => product.transmission === prop);
        const Owner = carOwner.length === 0 || product.owner === undefined || carOwner.some((prop) => product.owner === prop);
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

    ["brand-model", "budget", "categories", "fuel", "modal", "seats", "color", "transmission", "owner", "kilometers"].forEach((name) => params.delete(name));

    carBrandModel.forEach((brand) => params.append("brand-model", brand));
    if (budgetStatus) params.set("budget", `${budgetStatus[0]}-${budgetStatus[1]}`);
    if (carCategories.length !== 0) params.append("categories", carCategories);
    carFuelType.forEach((fuel) => params.append("fuel", fuel));
    if (carModalYear) params.append("modal", carModalYear);
    carSeats.forEach((seats) => params.append("seats", seats));
    carColor.forEach((color) => params.append("color", color));
    carTransmission.forEach((Transmission) => params.append("transmission", Transmission));
    carOwner.forEach((owner) => params.append("owner", owner));
    if (carKilometers) params.set("kilometers", `${carKilometers[0]}-${carKilometers[1]}`);

    router(`${pathname}?${params}`);
  }, [carBrandModel, pathname, budgetStatus, router, searchParams, value, carCategories, carFuelType, carModalYear, carSeats, carColor, carTransmission, carOwner, carKilometers, popular, sortBy]);

  return showProduct;
};

export default UseFilterCar;
