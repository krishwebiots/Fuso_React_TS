export interface ImageProps {
  className?: string;
  src: string;
  alt?: string;
  style?: Object;
  height?: number;
  id?: string;
  title?: string;
  width?: number;
}

export interface CommonHeaderType {
  title: string;
  content?: string;
  animation?: boolean;
  headClass?: string;
  titleClass?: string;
  view?: boolean;
  subClass?: string;
  url?: string;
}

export interface SvgType {
  iconId: string | undefined;
  className?: string;
  style?: {
    height?: number;
    width?: number;
    fill?: string;
    marginRight?: number;
  };
  onClick?: () => void;
}

export interface RatioImageType {
  className?: string;
  src: string;
  alt: string;
  style?: { height: number };
}

export interface SearchModalType {
  type: string;
}

export interface CitySelectMenuType {
  cityList: string[];
  selectedCity: string | null;
  onSelectCity: (city: string) => void;
  href: string;
  multiColumn?: boolean;
}

export interface BreadcrumbsType {
  title: string;
  subTitle: string;
  url: string;
}
