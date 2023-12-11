"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Skeleton from "../skeleton/Skeleton";

interface ImageLoaderProps
  extends React.ComponentPropsWithoutRef<typeof Image> {
  src: StaticImageData;
  alt: string;
}

const ImageLoader = ({ src, alt, ...props }: ImageLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false); // new state for error tracking

  const handleImageLoad = () => {
    setIsLoading(false);
    setHasError(false); // reset error state on successful load
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true); // set error state on image load failure
  };

  return (
    <>
      {isLoading && <Skeleton />}

      {src && (
        <Image
          src={src} // use fallback image if main image fails to load
          alt={alt || "image"}
          onLoad={handleImageLoad}
          onError={handleImageError} // handle image load failure
          {...props}
        />
      )}
    </>
  );
};

export default ImageLoader;
