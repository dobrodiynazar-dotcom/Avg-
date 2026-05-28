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
        className="object-cover object-center"
        fill
        priority
        sizes="100vw"
        src={media.posterSrc}
      />
      <video
        autoPlay
        className="absolute inset-0 h-full w-full object-cover object-center"
        loop
        muted
        playsInline
        poster={media.posterSrc}
        preload="metadata"
      >
        <source src={media.videoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgb(255_255_255_/_0.08),transparent_0_24%),linear-gradient(180deg,rgb(10_10_10_/_0.26)_0%,rgb(10_10_10_/_0.48)_38%,rgb(10_10_10_/_0.72)_70%,rgb(10_10_10_/_0.9)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[28%] bg-[linear-gradient(180deg,transparent_0%,rgb(12_12_12_/_0.86)_100%)]" />
      <span className="sr-only">{media.label}</span>
    </div>
  );
}
