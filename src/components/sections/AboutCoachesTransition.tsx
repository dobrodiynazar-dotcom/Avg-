import Image from "next/image";

import type { TransitionImageContent } from "@/types/content";

import { Container } from "@/components/ui";

type AboutCoachesTransitionProps = {
  image: TransitionImageContent;
};

export function AboutCoachesTransition({ image }: AboutCoachesTransitionProps) {
  return (
    <div className="border-b border-[rgb(255_255_255_/_0.08)] py-8 sm:py-9 lg:py-10">
      <Container size="wide">
        <div className="mx-auto flex max-w-[58rem] justify-center overflow-hidden rounded-[var(--radius-card-md)] border border-[rgb(255_255_255_/_0.08)] bg-[rgb(255_255_255_/_0.025)] p-2 shadow-[0_24px_70px_rgb(0_0_0_/_0.28)]">
          <Image
            alt={image.alt}
            className="h-auto max-h-[34rem] w-full object-contain opacity-95 saturate-[0.92]"
            height={image.height}
            sizes="(min-width: 1280px) 928px, (min-width: 768px) 86vw, 92vw"
            src={image.src}
            width={image.width}
          />
        </div>
      </Container>
    </div>
  );
}
