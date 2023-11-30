import React from "react";

// Components
import { Box, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageWithFallback from "components/common/ImageWithFallback";

import generalDefaultImage from "@images/general-default-info.jpg";
import { generals } from "./mock-data";

import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import theme from "src/theme";

export default function StoryPage() {
  return (
    <Stack rowGap={6}>
      <Typography variant="h3" color="black">
        &emsp;Հայաստանի Հանրապետության Պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական ակադեմիան կազմավորվել է Հայաստանի
        Հանրապետության Կառավարության թիվ 279 որոշմամբ, 1994 թվականի հունիսի 24-ին` որպես Հայաստանի Հանրապետության պաշտպանության
        նախարարության բազմաբնույթ ռազմական հրամանատարական ուսումնարան:
        <br />
        &emsp;Հայաստանի Հանրապետության Կառավարության թիվ 24 որոշմամբ 1998 թվականի հունվարի 16-ից ՀՀ ՊՆ բարձրագույն զինվորական
        բազմաբնույթ հրամանատարական ուսումնարանը վերակազմավորվել է Ռազմական ինստիտուտի, որն էլ 1998 թվականին տվել է իր առաջին՝
        4-ամյա կրթությամբ շրջանավարտները:
        <br />
        &emsp;Հայաստանի Հանրապետության Նախագահի թիվ 98 հրամանագրով 1999 թվականի դեկտեմբերի 27-ից Ռազմական ինստիտուտը անվանակոչվել
        է Հայաստանի Հանրապետության և Արցախի Հանրապետության ազգային հերոս, Սպարապետ Վազգեն Սարգսյանի անունով:
        <br />
        &emsp;2001 թվականից Ռազմական ինստիտուտն անցել է երկու՝ մոտոհրաձգային և հրետանային մասնագիտություններով սպայական կադրերի
        պատրաստմանը: 2004 թվականից Ռազմական ինստիտուտում գործում է նաև սպաների որակավորման բարձրացման և ռազմամասնագիտական
        ուսուցման կենտրոնը, որտեղ իրենց մասնագիտական գիտելիքներն են կատարելագործում ԶՈՒ-ում ծառայություն անցնող սպաները:
        <br />
        &emsp;2003 թվականից ինտեգրվելով պետական բուհերի համակարգում՝ Ռազմական ինստիտուտը դարձել է հանրապետության պետական բուհերի
        լիիրավ անդամ: 2013 թվականից գործում է հրամանատարաշտաբային ֆակուլտետը (մագիստրատուրա), որտեղ մեկնարկել են «Միավորումների և
        զորամասերի կառավարում» մասնագիտությամբ՝ «Միավորումների և զորամասերի կառավարում» մագիստրոսի որակավորմամբ միամյա
        դասընթացները: ՀՀ պաշտպանության նախարարի 2017 թվականի դեկտեմբերի 18-ի թիվ 1356 հրամանով հրամանատարաշտաբային ֆակուլտետը
        վերանվանվել է «Մարշալ Հովհաննես Բաղրամյանի անվան հրամանատարաշտաբային ֆակուլտետ»:
        <br />
        &emsp;2014-2015 ուստարում իր պատմության մեջ առաջին անգամ Ռազմական համալսարանը ունեցել է նաև իգական սեռի դիմորդներ, որոնց
        ընդունելության կարգը սահմանվել է ՀՀ պաշտպանության նախարարի հրամանով:
        <br />
        &emsp;Հայաստանի Հանրապետության Կառավարության 2016 թվականի ապրիլի 28-ի թիվ 446 որոշմամբ Ռազմական ինստիտուտը վերահայտարարվել
        է՝ դառնալով Հայաստանի Հանրապետության պաշտպանության նախարարության «Վազգեն Սարգսյանի անվան ռազմական համալսարան» պետական
        հիմնարկ:
        <br />
        &emsp;Հայաստանի Հանրապետության Կառավարության 2023 թվականի հունիսի 8-ի թիվ 917-Ա որոշմամբ Հայաստանի Հանրապետության
        պաշտպանության նախարարության Վազգեն Սարգսյանի անվան ռազմական և Հայաստանի Հանրապետության պաշտպանության նախարարության Մարշալ
        Արմենակ Խանփերյանցի անվան ռազմական ավիացիոն համալսարանների միաձուլման ձևով ստեղծվել է Հայաստանի Հանրապետության
        պաշտպանության նախարարության Վազգեն Սարգսյանի անվան ռազմական ակադեմիան:
      </Typography>
      <Box>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation
          modules={[Navigation]}
          breakpoints={{
            1350: {
              slidesPerView: 4,
              spaceBetween: 40
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            900: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            600: {
              slidesPerView: 1.6,
              spaceBetween: 15
            },
            450: {
              slidesPerView: 1.6,
              spaceBetween: 10
            },
            350: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          }}
        >
          {generals.map(({ date, name, image }) => (
            <SwiperSlide key={`general-info-slider-${date}-${name}`}>
              <Stack rowGap={1}>
                <ImageWithFallback
                  src={image || ""}
                  fallbackSrc={generalDefaultImage}
                  alt="general image"
                  style={{ objectFit: "cover", width: "100%", height: "300px" }}
                />
                <Stack alignItems="center" columnGap={1}>
                  <Typography
                    variant="h5"
                    sx={{
                      [theme.breakpoints.down("lg")]: {
                        fontSize: "18px"
                      },
                      [theme.breakpoints.down("md")]: {
                        fontSize: "16px"
                      }
                    }}
                    color="black"
                    textAlign="center"
                  >
                    {name}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="black"
                    textAlign="center"
                    sx={{
                      [theme.breakpoints.down("lg")]: {
                        fontSize: "17px"
                      },
                      [theme.breakpoints.down("md")]: {
                        fontSize: "15px"
                      }
                    }}
                  >
                    {date}
                  </Typography>
                </Stack>
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Stack>
  );
}
