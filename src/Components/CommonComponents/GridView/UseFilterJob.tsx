import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../../ReduxToolkit/Hooks";
import { FilterProductsType, ProductType } from "../../../Types/ProductType";

const UseFilterJob = ({ value }: FilterProductsType) => {
  const [showProduct, setShowProduct] = useState<ProductType[]>(value);
  const { jobCategories, jobSalary, jobWorkMode, jobCompanyType, jobEducation, jobBy, jonLocation, jobTopCompanies, jobType, popular, sortBy } = useAppSelector((state) => state.filter);
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const router = useNavigate();

  useEffect(() => {
    const filteredProducts = value
      ?.filter((product) => {
        const Categories = jobCategories.length === 0 || product.category === undefined || jobCategories.some((prop) => product.category?.includes(prop));
        const Salary = product.salary !== undefined && jobSalary ? jobSalary[0] <= product.salary && jobSalary[1] >= product.salary && true : true;
        const WorkMode = jobWorkMode.length === 0 || product.workType === undefined || product.workType?.includes(jobWorkMode);
        const Company = jobCompanyType.length === 0 || product.companyType === undefined || jobCompanyType.includes(product.companyType);
        const Education = jobEducation.length === 0 || product.education === undefined || jobEducation.includes(product.education);
        const ByJob = jobBy.length === 0 || product.byJob === undefined || jobBy.includes(product.byJob);
        const Location = jonLocation.length === 0 || product.jobLocation === undefined || jonLocation.includes(product.jobLocation);
        const TopCompanies = jobTopCompanies.length === 0 || product.topCompanies === undefined || jobTopCompanies.includes(product.topCompanies);
        const JobType = jobType.length === 0 || product.jobType === undefined || jobType.some((prop) => product.jobType?.includes(prop));
        const MostPopular = !popular || product.productState === popular;

        return Categories && Salary && WorkMode && Company && Education && ByJob && Location && TopCompanies && JobType && MostPopular;
      })
      .sort((product1, product2) => {
        if (sortBy === "$ High To Low") return (product2.salary ?? 0) - (product1.salary ?? 0);
        if (sortBy === "Alphabetical A-Z") return product1.title.localeCompare(product2.title);
        if (sortBy === "Alphabetical Z-A") return product2.title.localeCompare(product1.title);
        return 0;
      });
    setShowProduct(filteredProducts);

    const params = new URLSearchParams(searchParams);
    ["jobCategories", "jobSalary", "jobWorkMode", "jobCompanyType", "jobEducation", "jobBy", "jonLocation", "jobTopCompanies", "jobType"].forEach((name) => params.delete(name));

    if (jobCategories.length !== 0) params.set("jobCategories", jobCategories.join(","));
    if (jobSalary) params.set("jobSalary", `${jobSalary[0]}-${jobSalary[1]}`);
    if (jobWorkMode.length !== 0) params.set("jobWorkMode", jobWorkMode);
    if (jobCompanyType.length !== 0) params.set("jobCompanyType", jobCompanyType.join(","));
    if (jobEducation.length !== 0) params.set("jobEducation", jobEducation.join(","));
    if (jobBy.length !== 0) params.set("jobBy", jobBy.join(","));
    if (jonLocation.length !== 0) params.set("jonLocation", jonLocation.join(","));
    if (jobTopCompanies.length !== 0) params.set("jobTopCompanies", jobTopCompanies.join(","));
    if (jobType.length !== 0) params.set("jobType", jobType.join(","));

    router(`${pathname}?${params}`);
  }, [pathname, jobCategories, router, searchParams, value, jobSalary, jobWorkMode, jobCompanyType, jobEducation, jobBy, jonLocation, jobTopCompanies, jobType, popular, sortBy]);

  return showProduct;
};

export default UseFilterJob;
