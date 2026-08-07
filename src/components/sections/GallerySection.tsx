import type { MediaAsset, SectionIntro } from "@/types/content";

import Image from "next/image";

import { Container } from "@/components/ui";

type GallerySectionProps = {
  intro: SectionIntro;
  assets: MediaAsset[];
};

const collageItemClassMap: Record<string, string> = {
  "academy-training": "col-span-2 md:col-span-8 md:h-[21rem]",
  "academy-throw": "md:col-span-4 md:h-[21rem]",
  "academy-competition": "md:col-span-5 md:h-[19rem]",
  "academy-team": "col-span-2 md:col-span-7 md:h-[19rem]",
};

const collageAspectClassMap: Record<string, string> = {
  "academy-training": "aspect-[4/3] md:aspect-auto",
  "academy-throw": "aspect-[4/5] md:aspect-auto",
  "academy-competition": "aspect-[3/4] md:aspect-auto",
  "academy-team": "aspect-[16/9] md:aspect-auto",
};

export function GallerySection({ intro, assets }: GallerySectionProps) {
  return (
    <section className="border-b border-[rgb(10_10_10_/_0.08)] bg-[var(--color-surface-3)] py-14 text-[var(--color-inverse-ink)] sm:py-16 lg:py-20">
      <Container className="space-y-8 sm:space-y-10" size="wide">
        <div className="max-w-[52rem] space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-primary)]">
            {intro.eyebrow}
          </p>
          <h2 className="text-balance text-[clamp(1.65rem,3.2vw,2.9rem)] font-medium leading-[1.12] tracking-[-0.025em] text-[var(--color-inverse-ink)] sm:max-w-[20ch]">
            {intro.title}
          </h2>
        </div>

        <div className="grid w-full grid-cols-2 gap-3 sm:gap-3.5 md:grid-cols-12 lg:gap-4">
          {assets.map((asset) => (
            <figure
              className={`min-w-0 ${collageItemClassMap[asset.id] ?? ""} ${
                asset.id === "academy-training" || asset.id === "academy-team" ? "sm:col-span-2" : ""
              }`}
              key={asset.id}
            >
              <div
                className={`${
                  collageAspectClassMap[asset.id] ?? "aspect-[4/3]"
                } group relative w-full overflow-hidden rounded-[0.65rem] bg-[rgb(238_238_238)] md:h-full`}
              >
                {asset.imageSrc ? (
                  <Image
                    alt={asset.title}
                    className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    fill
                    sizes={
                      asset.id === "academy-training"
                        ? "(min-width: 1280px) 58vw, (min-width: 768px) 64vw, 100vw"
                        : asset.id === "academy-team"
                          ? "(min-width: 1280px) 48vw, (min-width: 768px) 50vw, 100vw"
                          : "(min-width: 1280px) 34vw, (min-width: 768px) 36vw, 50vw"
                    }
                    src={asset.imageSrc}
                    style={{ objectPosition: asset.objectPosition }}
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
