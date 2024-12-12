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
  contentClass?: string;
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

export interface CitySelectMenuType {
  cityList: string[];
  selectedCity: string | null;
  onSelectCity: (city: string) => void;
  href: string;
  multiColumn?: boolean;
}

export interface BreadcrumbsType {
  title: string;
  subTitle?: string;
  url: string;
  mainClass?: string;
}

export interface FilterOffcanvasType {
  type: string;
  offcanvasSide?: string;
  modalType?: string;
}

export interface TooltipsType {
  title: string;
  target: string;
}
