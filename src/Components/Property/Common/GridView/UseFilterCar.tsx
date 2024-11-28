import { useEffect, useState } from "react";
import { FilterProductsType, ProductType } from "../../../../Types/ProductType";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const UseFilterCar = ({ value }: FilterProductsType) => {
  const [showProduct, setShowProduct] = useState<ProductType[]>(value);
  const { carBrandModel, budgetStatus } = useAppSelector((state) => state.filter);
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const router = useNavigate();

  useEffect(() => {
    const filteredProducts = value?.filter((product) => {
      const brandModel = carBrandModel.length === 0 || product.category === undefined || carBrandModel.some((prop) => product.category?.includes(prop));
      const filteredPrice = product.price !== undefined && budgetStatus ? budgetStatus[0] <= product.price && budgetStatus[1] >= product.price && true : true;

      return brandModel && filteredPrice;
    });

    setShowProduct(filteredProducts);

    const params = new URLSearchParams(searchParams);

    ["brand-model", "budget"].forEach((name) => params.delete(name));

    carBrandModel.forEach((brand) => params.append("brand-model", brand));
    if (budgetStatus) params.set("budget", `${budgetStatus[0]}-${budgetStatus[1]}`);

    router(`${pathname}?${params}`);
  }, [carBrandModel, pathname, budgetStatus, router, searchParams, value]);

  return showProduct;
};

export default UseFilterCar;
