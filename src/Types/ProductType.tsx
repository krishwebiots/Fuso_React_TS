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
}

export interface GridLayoutType {
  value: ProductType[];
  type: string;
  setTotalProduct: (temp: number) => void;
}

export interface FilterProductsType {
  value: ProductType[];
}

export interface TopPanelType {
  totalProduct: number;
}

export interface FilterSidebarType {
  value: ProductType[];
  type: string;
}

export interface PriceType {
  value: any;
  price: number;
}

export interface FilterSliceType {
  propertyType: string[];
  bedsRooms: string[];
  amenities: string[];
  squareFeetStatus: { min: number; max: number };
  yserBuiltStatus: { min: number; max: number };
  priceStatus: { min: number; max: number };
  sortBy: null;
  popular: null;
}
