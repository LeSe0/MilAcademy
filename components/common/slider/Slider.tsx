import { FC, MutableRefObject, ReactNode, useEffect, useRef } from "react";
// components
import { Button, Grid } from "@mui/material";
import Slider from "react-slick";
import { Settings } from "react-slick";
import Image from "next/image";
// images
import prevArrow from "@images/slider/prevArrow.svg";
import nextArrow from "@images/slider/nextArrow.svg";

interface ArrowProps {
  direction: "left" | "right";
  onClick?: () => void;
}

interface Props {
  children: ReactNode[] | ReactNode;
  customSettings?: Settings;
}

const CustomArrow: FC<ArrowProps> = ({ onClick, direction }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        position: "absolute",
        left: direction === "left" ? { xs: "calc(50% - 70px)", sm: "calc(50% - 80px)", md: "0px" } : "unset",
        right: direction === "right" ? { xs: "calc(50% - 70px)", sm: "calc(50% - 80px)", md: "0px" } : "unset",
        top: { md: "50%" },
        bottom: { xs: "-96px", sm: "-110px", md: "unset" },
        transform: { md: "translate(0%, -50%)" },
        width: { xs: "50px", md: "60px", lg: "76px" },
        height: { xs: "50px", md: "60px", lg: "76px" },
        backgroundColor: "primary.main",
        borderRadius: 0,
        color: "white",
        fontFamily: "Poppins, sans-serif",
        letterSpacing: "0.05em",
        zIndex: 5,
        "&:hover": {
          backgroundColor: "primary.main",
          color: "white"
        }
      }}
    >
      <Image width="10" height="20" src={direction === "right" ? nextArrow : prevArrow} alt="arrow" />
    </Button>
  );
};

export default function CustomSlider({ children, customSettings = {} }: Props) {
  const slider_ref: MutableRefObject<Slider | null> = useRef(null);

  const slickSliderSlideWithKeyboard = (e: KeyboardEvent) => {
    switch (e.code) {
      case "ArrowRight":
        return slider_ref.current?.slickNext();
      case "ArrowLeft":
        return slider_ref.current?.slickPrev();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", slickSliderSlideWithKeyboard);
    return () => document.removeEventListener("keydown", slickSliderSlideWithKeyboard);
  }, []);

  return (
    <Grid container>
      <Slider
        ref={slider => (slider_ref.current = slider)}
        nextArrow={<CustomArrow direction="right" />}
        prevArrow={<CustomArrow direction="left" />}
        slidesToShow={1}
        arrows={true}
        {...customSettings}
      >
        {children}
      </Slider>
    </Grid>
  );
}
