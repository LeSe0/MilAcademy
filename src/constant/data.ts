// types
import { StaticImageData } from "next/image";

// images
import NewsThumbnail from "@images/NewsThumbnail.png";
import AboutNews1 from "@images/AboutNews1.png";
import AboutNews2 from "@images/AboutNews2.png";
import AboutNews3 from "@images/AboutNews3.png";
import AboutNews4 from "@images/AboutNews4.png";
import MainPartImage from "@images/MainPartImage.png";

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

export interface IMilEducation {
  title: string;
  content: string;
}

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

export const milEducation: IMilEducation[] = [
  {
    title: "Հնգամյա Սպայական Դասեր",
    content: `Հինգամսյա սպայական դասընթացներ՝ բարձրագույն ուսումնական հաստատություններն ավարտած, զինված ուժերի ենթասպայական և պայմանագրային կազմի համար:<br />
    <strong>Մասնագիտությունները՝</strong> <br />
    <ul>
      <li>մոտոհրաձգային ստորաբաժանումների կառավարում,</li>
      <li>հրետանային ստորաբաժանումների կառավարում,</li>
      <li>տանկային ստորաբաժանումների կառավարում:</li>
    </ul>
    <strong>Ուսման տևողությունը</strong> հինգ ամիս է, անվճար:`
  },
  {
    title: "Մեկամյա սպայական դասընթացներ",
    content: `Մեկամյա սպայական դասընթացներ՝ քաղաքացիական բուհերի շրջանավարտների համար:<br />
      <strong>Մասնագիտությունները՝</strong><br />
    <ul>
      <li>մոտոհրաձգային ստորաբաժանումների կառավարում,</li>
      <li>հրետանային ստորաբաժանումների կառավարում,</li>
    </ul>
    <strong>Ուսման տևողությունը</strong> 1 տարի է, անվճար:`
  }
];
