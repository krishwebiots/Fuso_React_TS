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
  toggleSection: (title: string) => void;
  openSections: Record<string, boolean>;
}
