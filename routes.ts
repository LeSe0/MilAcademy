export interface INavBar {
  title: string;
  path: string;
}

export const navbar: INavBar[] = [
  {
    title: `Գլխավոր`,
    path: "/"
  },
  {
    title: `Նորություններ`,
    path: "/news"
  },
  {
    title: `Կրթություն`,
    path: "/education"
  },
  {
    title: `Մեր առօրյան`,
    path: "/daily_life"
  },
  {
    title: "Գիտական հետազոտություններ",
    path: "/"
  },
  {
    title: `Մեր մասին`,
    path: "/about_us"
  },
  {
    title: "Համագործակցություն",
    path: "/"
  }
];
