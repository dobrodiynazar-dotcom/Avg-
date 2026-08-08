import type { MediaAsset, SectionIntro } from "@/types/content";

import Image from "next/image";

import { Container } from "@/components/ui";
import { cn } from "@/lib/utils/cn";

type GallerySectionProps = {
  intro: SectionIntro;
  assets: MediaAsset[];
};

const collageItemClassMap: Record<string, string> = {
  "academy-groundwork": "col-span-4",
  "academy-kids-match": "col-span-8",
  "academy-competition-back": "col-span-8",
  "academy-clinch": "col-span-4",
  "academy-team": "col-span-6",
  "academy-kid-focus": "col-span-6",
};

const collageAspectClassMap: Record<string, string> = {
  "academy-groundwork": "aspect-[2/3]",
  "academy-kids-match": "aspect-[3/2]",
  "academy-competition-back": "aspect-[3/2]",
  "academy-clinch": "aspect-[3/4]",
  "academy-team": "aspect-[16/9]",
  "academy-kid-focus": "aspect-[16/9]",
};

const collageImageFitClassMap: Record<string, string> = {
  "academy-kids-match": "object-cover scale-[1.06]",
  "academy-clinch": "object-cover scale-[1.025]",
  "academy-kid-focus": "object-cover",
};

export function GallerySection({ intro, assets }: GallerySectionProps) {
  return (
    <section className="border-b border-[rgb(255_255_255_/_0.08)] bg-[var(--color-surface-2)] py-14 text-white sm:py-16 lg:py-20">
      <Container className="space-y-8 sm:space-y-10" size="wide">
        <div className="max-w-[52rem] space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-primary)]">
            {intro.eyebrow}
          </p>
          <h2 className="text-balance text-[clamp(1.65rem,3.2vw,2.9rem)] font-medium leading-[1.12] tracking-[-0.025em] text-white sm:max-w-[20ch]">
            {intro.title}
          </h2>
        </div>

        <div aria-hidden="true" className="h-px w-full bg-[rgb(255_255_255_/_0.18)]" />

        <div className="grid w-full grid-cols-12 gap-2 sm:gap-3.5 lg:gap-4">
          {assets.map((asset) => (
            <figure
              className={cn("min-w-0", collageItemClassMap[asset.id])}
              key={asset.id}
            >
              <div
                className={cn(
                  collageAspectClassMap[asset.id] ?? "aspect-[4/3]",
                  "group relative h-full w-full overflow-hidden rounded-[var(--radius-card-lg)] bg-[var(--color-canvas)]",
                )}
              >
                {asset.imageSrc ? (
                  <Image
                    alt={asset.title}
                    className={cn(
                      collageImageFitClassMap[asset.id] ?? "object-contain",
                      "transition-transform duration-500 ease-out group-hover:scale-[1.01] motion-reduce:transition-none motion-reduce:group-hover:scale-100",
                    )}
                    fill
                    sizes={
                      asset.id === "academy-kids-match" ||
                      asset.id === "academy-competition-back"
                        ? "(min-width: 1280px) 62vw, (min-width: 768px) 66vw, 100vw"
                        : asset.id === "academy-team" ||
                            asset.id === "academy-kid-focus"
                          ? "(min-width: 1280px) 48vw, (min-width: 768px) 50vw, 100vw"
                          : "(min-width: 1280px) 30vw, (min-width: 768px) 34vw, 100vw"
                    }
                    src={asset.imageSrc}
                    style={{
                      objectPosition:
                        asset.id === "academy-kids-match"
                          ? "center center"
                          : asset.id === "academy-clinch"
                            ? "center 46%"
                            : asset.id === "academy-kid-focus"
                          ? "center 62%"
                          : asset.objectPosition,
                    }}
                  />
                ) : null}
              </div>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
