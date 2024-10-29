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
}

export interface CarProductCardType {
  data: ProductType;
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
}
