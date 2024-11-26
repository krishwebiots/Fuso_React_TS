export interface MenuItemtype {
  title?: string;
  children?: MenuItemtype[];
  type?: string;
  active?: boolean;
  section?: MenuItemtype[];
  url?: string;
  megaMenuImage?: boolean;
  path?: string;
  image?: string;
  megaMenu?: boolean;
}

export interface MenuListType {
  menu: MenuItemtype[] | undefined;
  level: number;
}

export interface ChildMenuType {
  mainMenu: MenuItemtype[];
}

export interface LoaderConfig {
  src?: string;
  text?: string;
  svg?: JSX.Element;
}

export interface PathTypes {
  part?: string;
}

export interface PathSettingsType {
  className: string;
  favicon: string;
}

export interface HeaderType {
  part?: string;
  isJobOrProperty?: boolean;
}

export interface LogoAndSocialMediaType {
  description: string;
  endPoint: number;
}

export interface FooterListType {
  title: string;
  url?: string;
  icon?: string;
}

export interface FooterDetailType {
  title: string;
  contactList?: boolean;
  links: FooterListType[];
}

export interface DetailType {
  data: FooterDetailType[];
  footerMenu?: boolean;
}
