import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import mainImage from "@images/story/storyMainImage.png";
import Image from "next/image";
import { storyImageSlider } from "src/constant/data";
import Slider, { Settings } from "react-slick";
import CustomSlider from "components/common/slider/Slider";

type Props = {};

export default function StoryPage({}: Props) {
  const customSettings: Settings = {
    arrows: true
  };

  return (
    <Stack>
      <Stack px="10vw" my="100px" spacing={6}>
        <Typography variant="h3" color="black">
          Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի
          Հանրապետության Կառավարության թիվ 279 որոշմամբ, 1994 թվականի հունիսի 24-ին` որպես Հայաստանի Հանրապետության պաշտպանության
          նախարարության բազմաբնույթ ռազմական հրամանատարական ուսումնարան:
        </Typography>
        <Typography variant="h3" color="black">
          Հայաստանի Հանրապետության Կառավարության թիվ 24 որոշմամբ 1998 թվականի հունվարի 16-ից ՀՀ ՊՆ բարձրագույն զինվորական
          բազմաբնույթ հրամանատարական ուսումնարանը վերակազմավորվել է Ռազմական ինստիտուտի, որն էլ 1998թ. տվել է իր առաջինª 4-ամյա
          կրթությամբ շրջանավարտները:
          <br />
          Հայաստանի Հանրապետության Նախագահի թիվ 98 հրամանագրով 1999 թվականի դեկտեմբերի 27-ից èազմական ինստիտուտը անվանակոչվել է
          Հայաստանի Հանրապետության և Արցախի Հանրապետության ազգային հերոս, Սպարապետ Վազգեն Սարգսյանի անունով:
        </Typography>
      </Stack>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "300px", sm: "400px", xl: "800px" },
          backgroundImage: `url(${mainImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <Stack px="10vw" spacing={6} my="100px">
        <Typography variant="h3" color="black">
          2001թ-ից Ռազմական ինստիտուտն անցել է երկու՝ մոտոհրաձգային և հրետանային մասնագիտություններով սպայական կադրերի
          պատրաստմանը: 2004թ-ից Ռազմական ինստիտուտում գործում է նաև սպաների որակավորման բարձրացման և ռազմամասնագիտական ուսուցման
          կենտրոնը, որտեղ իրենց մասնագիտական գիտելիքներն են կատարելագործում ԶՈՒ-ում ծառայություն անցնող սպաները:
        </Typography>
        <Typography variant="h3" color="black">
          2003թ-ից ինտեգրվելով պետական բուհերի համակարգում՝ Ռազմական ինստիտուտը դարձել է հանրապետության պետական բուհերի լիիրավ
          անդամ: 2013թ-ից գործում է հրամանատարաշտաբային ֆակուլտետը (մագիստրատուրա), որտեղ մեկնարկել են «Միավորումների և զորամասերի
          կառավարում» մասնագիտությամբ՝ «Միավորումների և զորամասերի կառավարում» մագիստրոսի որակավորմամբ միամյա դասընթացները: ՀՀ
          պաշտպանության նախարարի 2017 թվականի դեկտեմբերի 18-ի թիվ 1356 հրամանով հրամանատարաշտաբային ֆակուլտետը վերանվանվել է
          «Մարշալ Հովհաննես Բաղրամյանի անվան հրամանատարաշտաբային ֆակուլտետ»:
        </Typography>
        <Typography variant="h3" color="black">
          2014-2015 ուստարում իր պատմության մեջ առաջին անգամ Ռազմական համալսարանը ունեցել է նաև իգական սեռի դիմորդներ, որոնց
          ընդունելության կարգը սահմանվել է ՀՀ պաշտպանության նախարարի հրամանով: Հայաստանի Հանրապետության Կառավարության 2016 թվականի
          ապրիլի 28-ի թիվ 446 որոշմամբ Ռազմական ինստիտուտը վերահայտարարվել է՝ դառնալով Հայաստանի Հանրապետության պաշտպանության
          նախարարության «Վազգեն Սարգսյանի անվան ռազմական համալսարան» պետական հիմնարկ:
        </Typography>
      </Stack>
      <Box
        position="relative"
        px={{ xs: 0, sm: "10vw" }}
        mb="100px"
        sx={{
          pb: { xs: "100px", md: 0 },
          "& .slick-slider": {
            px: { xs: 0, md: "120px" }
          }
        }}
      >
        <CustomSlider {...customSettings}>
          {storyImageSlider.map((el, i) => {
            return (
              <Box display="flex !important" justifyContent="center" key={i}>
                <Image src={el} alt="" />
              </Box>
            );
          })}
        </CustomSlider>
      </Box>
    </Stack>
  );
}