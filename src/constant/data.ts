// types
import { StaticImageData } from "next/image";

// images
import NewsTumbnail from "@images/NewsTumbnail.png";
import AboutNews1 from "@images/AboutNews1.png";
import AboutNews2 from "@images/AboutNews2.png";
import AboutNews3 from "@images/AboutNews3.png";
import AboutNews4 from "@images/AboutNews4.png";
import MainPartImage from "@images/MainPartImage.png";
import StorySliderImage from "@images/story/storySliderImage.png";

export interface INews {
  title: string;
  content: string;
  tumbnail: StaticImageData;
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
      "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
    tumbnail: NewsTumbnail
  },
  {
    title: "08/22/2022",
    content:
      "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
    tumbnail: NewsTumbnail
  },
  {
    title: "04/22/2022",
    content:
      "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
    tumbnail: NewsTumbnail
  },
  {
    title: "03/22/2022",
    content:
      "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
    tumbnail: NewsTumbnail
  },
  {
    title: "02/22/2022",
    content:
      "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
    tumbnail: NewsTumbnail
  },
  {
    title: "11/22/2022",
    content:
      "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
    tumbnail: NewsTumbnail
  },
  {
    title: "08/22/2022",
    content:
      "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
    tumbnail: NewsTumbnail
  },
  {
    title: "04/22/2022",
    content:
      "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
    tumbnail: NewsTumbnail
  },
  {
    title: "03/22/2022",
    content:
      "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
    tumbnail: NewsTumbnail
  },
  {
    title: "02/22/2022",
    content:
      "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
    tumbnail: NewsTumbnail
  },
  {
    title: "11/22/2022",
    content:
      "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
    tumbnail: NewsTumbnail
  },
  {
    title: "08/22/2022",
    content:
      "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
    tumbnail: NewsTumbnail
  },
  {
    title: "04/22/2022",
    content:
      "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
    tumbnail: NewsTumbnail
  },
  {
    title: "03/22/2022",
    content:
      "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
    tumbnail: NewsTumbnail
  },
  {
    title: "02/22/2022",
    content:
      "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
    tumbnail: NewsTumbnail
  },
  {
    title: "11/22/2022",
    content:
      "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
    tumbnail: NewsTumbnail
  },
  {
    title: "08/22/2022",
    content:
      "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
    tumbnail: NewsTumbnail
  },
  {
    title: "04/22/2022",
    content:
      "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
    tumbnail: NewsTumbnail
  },
  {
    title: "03/22/2022",
    content:
      "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
    tumbnail: NewsTumbnail
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

export const storyImageSlider: StaticImageData[] = [StorySliderImage, StorySliderImage, StorySliderImage];