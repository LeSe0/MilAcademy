import React from "react";
import useStateFromProps from "providers/hooks/useStateFromProps";
import Image, { type StaticImageData, type ImageProps } from "next/image";

interface Props extends ImageProps {
  fallbackSrc?: string | StaticImageData;
  src: string | StaticImageData;
}

const ImageWithFallback = (props: Props) => {
  const { src, fallbackSrc, ...rest } = props;
  const [imgSrc, setImgSrc] = useStateFromProps(src);

  return (
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc || "/images/not-found.png");
      }}
      alt={rest.alt}
    />
  );
};

export default ImageWithFallback;
