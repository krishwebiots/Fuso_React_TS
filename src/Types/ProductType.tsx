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
  emi: string;
  type: string;
  category: string[];
  features: Feature[];
  price: string;
  link: string;
  label?: Label;
  aos_duration?: number;
}

export interface CarProductCardType {
  data: ProductType;
}
