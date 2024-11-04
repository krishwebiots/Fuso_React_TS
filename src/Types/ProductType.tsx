export interface Feature {
  icon: string;
  text: string;
}

export interface Label {
  text: string;
  icon: string;
  class?: string;
}

export interface ProductType {
  id: number;
  image: string[];
  title: string;
  emi?: string;
  type: string;
  category: string[];
  features: Feature[];
  price: string;
  label?: Label;
  description?: string;
  company?: string;
  jobType?: string;
  location?: string;
  time?: string;
  salary?: string;
  applied?: string;
  rating?: number;
  jobTags: string[];
}

export interface CarProductCardType {
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
  value: string;
  label: string;
  categoryImage: string;
  categoryLogo: string;
  jobList?: string;
}
