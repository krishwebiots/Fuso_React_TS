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
  salary?: string;
  applied?: string;
  rating?: number;
  jobTags: string[];
  bhk?: string;
  amenities?: string;
  squareFeet?: number;
  year?: number;
  productState?: string;
  video?: string;
}

export interface ProductCardType {
  data: ProductType;
}

export interface JobCardType {
  jobData: ProductType;
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
  offcanvasSide?: string;
  scrollType?: string;
  map?: boolean;
  mapSide?: string;
  modalType?: string;
}

export interface GridLayoutType {
  value: ProductType[];
  type: string;
  gridSize?: number;
  gridType?: string;
  view?: string;
  scrollType?: string;
  map?: boolean;
}

export interface FilterProductsType {
  value: ProductType[];
}

export interface TopPanelType {
  side?: string;
  topFilter?: boolean;
}

export interface FilterSidebarType {
  value: ProductType[];
  modalType?: string;
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
}

export interface PaginationType {
  totalPages1: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
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
  checkValue?: string | string[];
  priceRange?: boolean;
  squareFeet?: boolean;
  values?: number[];
  minPrice?: number;
  maxPrice?: number;
}

export interface ProductBoxType {
  data: ProductType;
  view?: string;
  label?: string;
  index?: number;
}

export interface PropertyBoxSliderType {
  view?: string;
  data: ProductType;
}

export interface RangeInputFieldsType {
  min?: number;
  max?: number;
}

export interface PropertyDetailType {
  type?: string;
  mainClass?: string;
  thumb?: boolean;
}

export interface DetailBodyItemType {
  label?: boolean;
}
