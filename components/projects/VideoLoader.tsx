"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { StaticImageData } from "next/image";

import { BiError } from "react-icons/bi";
import Skeleton from "../skeleton/Skeleton";
import ImageLoader from "./ImageLoader";

interface Props {
  // Define your component props here
  webm?: string;
  mp4: string;
  videoTitle: string;
  imageSrc?: StaticImageData | undefined;
}

const VideoLoader: React.FC<Props> = ({ mp4, webm, videoTitle, imageSrc }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const handleLoadedData = useCallback(() => {
    setVideoLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setVideoError(true);
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("loadeddata", handleLoadedData);
      videoElement.addEventListener("error", handleError);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("loadeddata", handleLoadedData);
        videoElement.removeEventListener("error", handleError);
      }
    };
  }, [handleLoadedData, handleError]);

  return (
    <>
      {!videoLoaded && !videoError && (
        // if there is an imageSrc prop, show the image instead of the skeleton, otherwise show the skeleton
        <>
          {imageSrc ? (
            <ImageLoader src={imageSrc} alt="project image" />
          ) : (
            <Skeleton />
          )}
        </>
      )}

      {videoError && (
        <div className="flex h-full w-full flex-col items-center justify-center border-[1px]">
          <BiError className="text-4xl text-red-500" aria-hidden={true} />
          <p className="text-xl font-semibold text-white md:text-2xl">
            Failed to load media. <br /> Unable to play the file
          </p>
        </div>
      )}

      <video
        ref={videoRef}
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
        title={videoTitle}
        className="h-full w-full rounded-none object-cover"
        onError={handleError}
      >
        {webm && <source src={webm} type="video/webm" />}
        <source src={mp4} type="video/mp4" />
        <p className="text-white">
          Your browser does not support the video tag.
        </p>
      </video>
    </>
  );
};

export default VideoLoader;
