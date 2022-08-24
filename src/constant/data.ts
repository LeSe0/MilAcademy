// types
import { StaticImageData } from "next/image";

// images
import NewsThumbnail from "@images/NewsThumbnail.png";
import AboutNews1 from "@images/AboutNews1.png";
import AboutNews2 from "@images/AboutNews2.png";
import AboutNews3 from "@images/AboutNews3.png";
import AboutNews4 from "@images/AboutNews4.png";
import MainPartImage from "@images/MainPartImage.png";

export interface INews {
  title: string;
  content: string;
  thumbnail: StaticImageData;
  path: string;
}

export interface IAboutNewsData {
  image1: StaticImageData;
  image2: StaticImageData;
}

export interface IMainPartData {
  image: StaticImageData;
  title: string;
  content: string;
  path: string;
}

export const NewsData: INews[] = [
  {
    title: "11/22/2022",
    content:
      "Հայաստանի Հանրապետության Կառավարության թիվ 24 որոշմամբ 1998 թվականի հունվարի 16-ից ՀՀ ՊՆ բարձրագույն զինվորական բազմաբնույթ հրամանատարական ուսումնարանը վերակազմավորվել է Ռազմական ինստիտուտի, որն էլ 1998թ. տվել է իր առաջին 4-ամյա կրթությամբ շրջանավարտները:",
    thumbnail: NewsThumbnail,
    path: "news/1"
  },
  {
    title: "08/22/2022",
    content:
      "Հայաստանի Հանրապետության Կառավարության թիվ 24 որոշմամբ 1998 թվականի հունվարի 16-ից ՀՀ ՊՆ բարձրագույն զինվորական բազմաբնույթ հրամանատարական ուսումնարանը վերակազմավորվել է Ռազմական ինստիտուտի, որն էլ 1998թ. տվել է իր առաջին 4-ամյա կրթությամբ շրջանավարտները:",
    thumbnail: NewsThumbnail,
    path: "news/1"
  },
  {
    title: "04/22/2022",
    content:
      "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
    thumbnail: NewsThumbnail,
    path: "news/1"
  },
  {
    title: "03/22/2022",
    content:
      "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
    thumbnail: NewsThumbnail,
    path: "news/1"
  },
  {
    title: "02/22/2022",
    content:
      "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
    thumbnail: NewsThumbnail,
    path: "news/1"
  }
];

export const AboutNewsData: IAboutNewsData[] = [
  {
    image1: AboutNews1,
    image2: AboutNews2
  },
  {
    image1: AboutNews4,
    image2: AboutNews3
  }
];

export const MainPartsData: IMainPartData[] = [
  {
    image: MainPartImage,
    title: "Մեր առօրյան",
    content: `- Սպորտ<br />
    - Մշակույթ և ժամանց <br />
    - Կացության պայմաններ`,
    path: "/ourDailyLife"
  },
  {
    image: MainPartImage,
    title: "Կրթություն",
    content: `- Ռազմական կրթություն <br />
		- Համալսարանական կրթություն <br />
		- Դիմորդ`,
    path: "/education"
  },
  {
    image: MainPartImage,
    title: "Մեր մասին",
    content: `-  Ուսումնական ծրագրեր </br>
    - Մասնաշենքեր </br>
    - Ապագայի պլանների և բարեփոխումների
    հատված`,
    path: "/about"
  }
];
