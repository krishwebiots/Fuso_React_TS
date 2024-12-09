export interface BlogBoxType {
  title: string;
  author: string;
  date: string;
  views: string;
  summary: string;
  image: string;
  authorImage: string;
  fireBox?: boolean;
  masonry: string;
}

export interface BlogGridBoxType {
  data: BlogBoxType;
  type?: string;
  index?: number;
}

export interface BlogGridViewType {
  carShow?: number;
  side?: string;
  gridSize?: number;
  type?: string;
  sectionClass?: string;
}
