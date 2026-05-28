import Image from "next/image";

import type { HeroBackgroundMedia } from "@/types/content";

type HeroBackgroundProps = {
  media: HeroBackgroundMedia;
};

export function HeroBackground({ media }: HeroBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden bg-[rgb(8_8_8)]"
    >
      <Image
        alt=""
        className="object-contain object-center"
        fill
        priority
        sizes="100vw"
        src={media.posterSrc}
      />
      <video
        autoPlay
        className="absolute inset-0 h-full w-full object-contain object-center"
        loop
        muted
        playsInline
        poster={media.posterSrc}
        preload="metadata"
      >
        <source src={media.videoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgb(0_0_0_/_0.02)_0%,rgb(0_0_0_/_0.12)_42%,rgb(0_0_0_/_0.4)_100%),linear-gradient(180deg,rgb(10_10_10_/_0.18)_0%,rgb(10_10_10_/_0.42)_40%,rgb(10_10_10_/_0.68)_72%,rgb(10_10_10_/_0.88)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[30%] bg-[linear-gradient(180deg,transparent_0%,rgb(12_12_12_/_0.88)_100%)]" />
      <span className="sr-only">{media.label}</span>
    </div>
  );
}
