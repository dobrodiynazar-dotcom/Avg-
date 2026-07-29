import Image from "next/image";

import type { TransitionImageContent } from "@/types/content";

type AboutCoachesTransitionProps = {
  image: TransitionImageContent;
};

export function AboutCoachesTransition({ image }: AboutCoachesTransitionProps) {
  return (
    <div className="relative h-[clamp(15rem,32vw,27rem)] overflow-hidden border-b border-[rgb(255_255_255_/_0.08)]">
      <Image
        alt={image.alt}
        className="h-full w-full object-cover object-[center_42%] opacity-90 saturate-[0.9]"
        height={image.height}
        sizes="100vw"
        src={image.src}
        width={image.width}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgb(10_10_10_/_0.12),rgb(10_10_10_/_0.02)_45%,rgb(10_10_10_/_0.2))]"
      />
    </div>
  );
}
