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
