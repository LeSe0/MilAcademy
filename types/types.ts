export interface INewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

export interface INewsById {
  id: number;
  title: string;
  description: string;
  date: string;
  images: string[];
}
