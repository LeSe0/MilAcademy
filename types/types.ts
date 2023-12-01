import type { StaticImageData } from "next/image";

export interface INewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  image: StaticImageData | string;
}

export interface INewsById {
  id: number;
  title: string;
  description: string;
  date: string;
  images: string[];
}
