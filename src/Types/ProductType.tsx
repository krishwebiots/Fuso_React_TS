export interface Feature {
  icon: string;
  text: string;
}

export interface Label {
  text: string;
  icon?: string;
  class?: string;
}

export interface ProductType {
  id: number;
  image: string[];
  title: string;
  emi?: string;
  type: string;
  category?: string[] | string;
  features: Feature[];
  price?: number;
  label?: Label;
  description?: string;
  company?: string;
  jobType?: string[];
  location?: string;
  time?: string;
  salary?: number;
  applied?: string;
  rating?: number;
  jobTags: string[];
  bhk?: string;
  amenities?: string;
  squareFeet?: number;
  year?: number;
  productState?: string;
  video?: string;
  wishlist: boolean;
  fuel?: string;
  seats?: string;
  color?: string;
  transmission?: string;
  owner?: string;
  kilometers?: number;
  progress?: number;
  workType?: string;
  companyType?: string;
  education?: string;
  byJob?: string;
  jobLocation?: string;
  topCompanies?: string;
  moreDescription?: string;
  skills?: string[];
}

export interface ProductSliceProp {
  productItem: ProductType[];
  categoryItem: CategoryType[];
}

export interface CategoryType {
  id: number;
  type: string;
  value: string;
  label: string;
  categoryImage: string;
  categoryLogo: string;
  jobList?: string;
  propertyList?: string;
}

export interface GridViewType {
  type: string;
  side?: string;
  gridSize?: number;
  sectionClass?: string;
  gridType?: string;
  view?: string;
  topFilter?: boolean;
  topFilterSidebar?: boolean;
  offcanvasSide?: string;
  scrollType?: string;
  map?: boolean;
  mapSide?: string;
  modalType?: string;
  filterTagsClass?: string;
  carShow?: number;
  topCategory?: boolean;
  jobBoxStyle?: string;
  fullList?: boolean;
}

export interface GridLayoutType {
  value: ProductType[];
  type: string;
  gridSize?: number;
  gridType?: string;
  view?: string;
  scrollType?: string;
  map?: boolean;
  jobBoxStyle?: string;
  side?: string;
}

export interface FilterProductsType {
  value: ProductType[];
}

export interface TopPanelType {
  side?: string;
  topFilter?: boolean;
  topFilterSidebar?: boolean;
  mainClass?: string;
  type: string;
  jobBoxStyle?: string;
}

export interface FilterSidebarType {
  value: ProductType[];
  modalType?: string;
  type: string;
}

export interface FilterSliceType {
  propertyType: string[];
  bedsRooms: string[];
  amenities: string[];
  squareFeetStatus: number[];
  yearBuiltStatus: number[];
  priceStatus: number[];
  sortBy: null;
  popular: null;
  carBrandModel: string[];
  minAndMaxPrice: number[];
  budgetStatus: number[];
  carCategories: string;
  carFuelType: string[];
  carModalYear: any;
  carSeats: string[];
  carColor: string[];
  carTransmission: string[];
  carOwner: string[];
  carKilometers: number[];
  minAndMaxKilometers: number[];
  jobCategories: string[];
  jobSalary: number[];
  minAndMaxSalary: number[];
  jobWorkMode: string;
  jobCompanyType: string[];
  jobEducation: string[];
  jobBy: string[];
  jonLocation: string[];
  jobTopCompanies: string[];
  jobType: string[];
}

export interface PaginationType {
  totalPages1: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  type?: string;
}

export interface FilterDataType {
  id: string;
  label: string;
  type: string;
}

export interface CommonFilterType {
  title: string;
  id: string;
  data?: FilterDataType[];
  checkValue?: any;
  priceRange?: boolean;
  squareFeet?: boolean;
  values?: number[];
  modalType?: string;
  type?: string;
  radio?: boolean;
  subClass?: string;
}

export interface ProductBoxType {
  data: ProductType;
  view?: string;
  label?: string;
  index?: number;
  wishlist?: boolean;
}

export interface RangeInputFieldsType {
  type?: string;
}

export interface PropertyDetailType {
  type?: string;
  mainClass?: string;
  thumb?: boolean;
  multiple?: boolean;
}

export interface DetailBodyItemType {
  label?: boolean;
  type?: string;
}

export interface CarDetailType {
  detailImages?: boolean;
  type?: string;
  scrollspy?: boolean;
  classicSlider?: boolean;
  sliderStyle?: string;
}

export interface CarBreadcrumbType {
  mailClass?: string;
  multiple?: boolean;
  type?: string;
  detailImages?: boolean;
  modernSlider?: boolean;
}

export interface RenderImageType {
  item: number;
  type?: string;
  multiple?: boolean;
  key?: number;
}

export interface RightSidebarType {
  value: ProductType[];
}

export interface JobDescriptionBoxType {
  title: string;
  data: string[];
  list?: boolean;
}

export interface JobDetailType {
  detailType?: string;
}

export interface MainDetailType {
  type?: string;
  detailType?: string;
}
