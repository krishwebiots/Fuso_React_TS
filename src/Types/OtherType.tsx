import { InputType } from "reactstrap/types/lib/Input";

export interface InputBoxType {
  label: string;
  placeholder: string;
  inputType?: InputType;
  review?: boolean;
}

export interface DropdownType {
  label: string;
  placeholder: string;
  items: string[];
}

export interface RadioGroupType {
  name: string;
  labels: string[];
  ids: string[];
  label: string;
}

export interface FeatureItemType {
  label: string;
  name: string;
}

export interface TextInputType {
  label: string;
  value: string;
}

export interface SwitchItemProps {
  title: string;
  description: string;
  checked?: boolean;
}

export interface PrivacyPolicySubItem {
  title?: string;
  content: string;
}

export interface PrivacyPolicyItem {
  id: string;
  title: string;
  content?: string;
  subsections?: boolean;
  subList?: PrivacyPolicySubItem[];
}

export interface PrivacyNavItem {
  id?: string;
  title?: string;
  subList?: PrivacyNavItem[];
}

export interface ScrollspyType {
  title?: string;
  list?: PrivacyNavItem[];
  content?: PrivacyPolicyItem[];
}
