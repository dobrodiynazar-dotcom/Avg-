import Image from "next/image";

import type { HeroBackgroundMedia } from "@/types/content";

type HeroBackgroundProps = {
  media: HeroBackgroundMedia;
};

export function HeroBackground({ media }: HeroBackgroundProps) {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <Image
        alt=""
        className="object-cover md:hidden"
        fill
        priority
        sizes="100vw"
        src={media.posterSrc}
      />
      <video
        autoPlay
        className="hidden h-full w-full object-cover md:block"
        loop
        muted
        playsInline
        poster={media.posterSrc}
        preload="metadata"
      >
        <source src={media.videoSrc} type="video/mp4" />
      </video>
      <div className="cinema-image absolute inset-0" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(24_24_24_/_0.12)_0%,rgb(24_24_24_/_0.58)_58%,rgb(24_24_24_/_0.9)_100%)]" />
      <span className="sr-only">{media.label}</span>
    </div>
  );
}
