import Image from "next/image";

import type { TransitionImageContent } from "@/types/content";

type AboutCoachesTransitionProps = {
  image: TransitionImageContent;
};

export function AboutCoachesTransition({ image }: AboutCoachesTransitionProps) {
  return (
    <div className="relative w-full overflow-hidden border-b border-[rgb(255_255_255_/_0.08)] bg-black">
      <Image
        alt={image.alt}
        className="h-auto w-full"
        height={image.height}
        sizes="100vw"
        src={image.src}
        width={image.width}
      />
    </div>
  );
}
