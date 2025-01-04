import { JSX, Key } from "react";

export interface JobHomeType {
  image: string;
  type: string;
  class?: string;
  key?: Key;
}

export interface JobHomeImageData {
  image: string;
  type: string;
  class?: string;
}

export interface JobHomeMeanClassData {
  meanClass: string;
  multipleImage: (JobHomeImageData | { childrenClass: string; childrenImage: JobHomeImageData[] })[];
}

export interface LogoSectionType {
  sectionClass?: string;
  swiperClass?: string;
  title?: string;
  type?: string;
}

export interface DropdownMenu {
  title: string;
  icon?: JSX.Element;
}

export interface NavType {
  id: number;
  icon?: JSX.Element;
  dropdownMenu?: DropdownMenu[];
  rangeSlider?: boolean;
  label?: string;
  inputLabel: string;
}

export interface FeaturedType {
  title: string;
  data: number[];
  label: string;
}

export interface PropsType {
  type: string;
}

export interface TestimonialsType {
  type: string;
  animation?: boolean;
  title?: string;
}

export interface SearchTabListType {
  basicTab?: string | number;
  showTab?: number[];
  datePicker?: boolean;
  scrollDown?: boolean;
  form?: boolean;
  pills?: boolean;
  endPoint?: number;
  tabs?: boolean;
  showNav?: boolean;
  button?: boolean;
  icon?: boolean;
}
