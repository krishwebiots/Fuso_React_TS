export interface BlogBoxType {
  title: string;
  author: string;
  date: string;
  views: string;
  summary: string;
  image: string;
  authorImage: string;
  fireBox?: boolean;
}

export interface BlogGridBoxType {
  data: BlogBoxType;
}

export interface BlogGridViewType {
  carShow?: number;
  side?: string;
}
