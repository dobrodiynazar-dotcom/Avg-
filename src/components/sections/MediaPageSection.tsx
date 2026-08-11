"use client";

import Image from "next/image";
import { useState } from "react";

import type {
  MediaCategory,
  MediaCategoryKey,
  MediaGalleryImage,
} from "@/content/gallery";

import { Container } from "@/components/ui";
import { cn } from "@/lib/utils/cn";

type MediaPageSectionProps = {
  categories: MediaCategory[];
  initialCategoryKey?: MediaCategoryKey;
};

const galleryItemClassMap: Record<string, string> = {
  "competition-groundwork": "aspect-[4/3]",
  "competition-ukraine-flag": "aspect-[7/8]",
  "competition-kids-match": "aspect-[4/3]",
  "competition-award-moment": "aspect-[3/4]",
  "competition-coach-mat": "aspect-[16/10]",
  "competition-kids-medals": "aspect-[4/3]",
  "competition-adults-medals": "aspect-[16/10]",
  "competition-referee-win": "aspect-[4/3]",
  "competition-lineup": "aspect-[16/10]",
  "training-open-mat": "aspect-[16/9]",
  "training-logo-drill": "aspect-[3/4]",
  "training-kids-portrait": "aspect-[3/4]",
  "training-standup-drill": "aspect-[16/10]",
  "training-adults-smile": "aspect-[3/4]",
  "training-blue-gi-roll": "aspect-[16/10]",
  "training-kids-hug": "aspect-[4/5]",
  "veterans-action": "aspect-[4/3]",
  "veterans-handshake": "aspect-[3/4]",
  "veterans-seated": "aspect-[4/3]",
  "veterans-stance": "aspect-[4/3]",
  "veterans-podium": "aspect-[4/3]",
  "veterans-victory-walk": "aspect-[4/3]",
  "veterans-back-view": "aspect-[4/3]",
};

const galleryFitClassMap: Record<string, string> = {
  "competition-ukraine-flag": "object-cover",
  "competition-award-moment": "object-cover",
  "competition-kids-medals": "object-cover",
  "training-logo-drill": "object-cover",
  "training-kids-portrait": "object-cover",
  "training-adults-smile": "object-cover",
  "training-kids-hug": "object-cover",
  "veterans-action": "object-cover",
  "veterans-handshake": "object-cover",
  "veterans-podium": "object-cover",
};

const wideImageIds = new Set([
  "competition-ukraine-flag",
  "competition-coach-mat",
  "competition-adults-medals",
  "competition-lineup",
  "training-open-mat",
  "training-standup-drill",
  "training-blue-gi-roll",
  "training-kids-hug",
  "veterans-handshake",
  "veterans-podium",
  "veterans-back-view",
]);

const mobileHeroClassMap: Partial<Record<MediaCategoryKey, string>> = {
  competitions: "object-cover",
  training: "object-contain sm:object-cover",
  veterans: "object-contain sm:object-cover",
};

const heroSectionClassMap: Partial<Record<MediaCategoryKey, string>> = {
  competitions: "h-[42svh] min-h-[300px] max-h-[420px] sm:max-h-none sm:min-h-screen",
  training: "h-[58svh] min-h-[420px] max-h-[560px] sm:max-h-none sm:min-h-screen",
  veterans: "h-[46svh] min-h-[330px] max-h-[450px] sm:max-h-none sm:min-h-screen",
};

const accentColorMap: Partial<Record<MediaCategoryKey, string>> = {
  veterans: "rgb(143 150 98 / 0.62)",
};

const indicatorColorMap: Partial<Record<MediaCategoryKey, string>> = {
  veterans: "rgb(162 170 112 / 0.78)",
};

const arrowAccentColorMap: Partial<Record<MediaCategoryKey, string>> = {
  veterans: "rgb(162 170 112 / 0.82)",
};

function CategoryArrow({
  categoryKey,
  direction,
  href,
  label,
  onClick,
}: {
  categoryKey: MediaCategoryKey;
  direction: "previous" | "next";
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <a
      aria-label={label}
      className="group relative z-10 flex h-12 w-12 shrink-0 items-center justify-center text-white/86 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary-focus)] sm:h-14 sm:w-14"
      href={href}
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
    >
      <span
        aria-hidden="true"
        className={cn(
          "block h-5 w-5 rotate-45 border-white/82 transition group-hover:border-white sm:h-6 sm:w-6",
          direction === "previous"
            ? "border-b-2 border-l-2"
            : "border-r-2 border-t-2",
        )}
        style={
          arrowAccentColorMap[categoryKey]
            ? { borderColor: arrowAccentColorMap[categoryKey] }
            : undefined
        }
      />
    </a>
  );
}

function GalleryImage({
  className,
  image,
}: {
  className?: string;
  image: MediaGalleryImage;
}) {
  return (
    <figure
      className={cn(
        "min-w-0",
        className ?? galleryItemClassMap[image.id] ?? "aspect-[4/3]",
      )}
    >
      <div className="group relative h-full w-full overflow-hidden rounded-[var(--radius-card-md)] bg-[var(--color-canvas)]">
        <Image
          alt={image.alt}
          className={cn(
            galleryFitClassMap[image.id] ?? "object-cover",
            "transition-transform duration-500 ease-out group-hover:scale-[1.015] motion-reduce:transition-none motion-reduce:group-hover:scale-100",
          )}
          fill
          loading="eager"
          sizes={
            wideImageIds.has(image.id)
              ? "(min-width: 1280px) 44vw, (min-width: 768px) 52vw, 58vw"
              : "(min-width: 1280px) 34vw, (min-width: 768px) 38vw, 42vw"
          }
          src={image.src}
          style={{ objectPosition: image.objectPosition ?? "center center" }}
        />
      </div>
    </figure>
  );
}

function GalleryLayout({
  category,
  images,
}: {
  category: MediaCategory;
  images: MediaGalleryImage[];
}) {
  const imageMap = new Map(images.map((image) => [image.id, image]));

  const renderImage = (imageId: string, className: string) => {
    const image = imageMap.get(imageId);

    return image ? <GalleryImage className={className} image={image} key={image.id} /> : null;
  };

  if (category.key === "competitions") {
    return (
      <div className="mx-auto grid w-full max-w-[980px] grid-cols-12 items-start gap-2 sm:gap-2.5 lg:gap-3">
        <div className="col-span-5 flex min-w-0 flex-col gap-2 sm:gap-2.5 lg:gap-3">
          {renderImage("competition-groundwork", "aspect-[4/3]")}
          {renderImage("competition-kids-match", "aspect-[4/3]")}
          {renderImage("competition-award-moment", "aspect-[3/4]")}
          {renderImage("competition-kids-medals", "aspect-[4/3]")}
          {renderImage("competition-referee-win", "aspect-[4/3]")}
        </div>
        <div className="col-span-7 flex min-w-0 -translate-x-1 flex-col gap-2 sm:-translate-x-1.5 sm:gap-2.5 lg:-translate-x-2 lg:gap-3">
          {renderImage("competition-ukraine-flag", "aspect-[7/8]")}
          {renderImage("competition-coach-mat", "aspect-[16/9]")}
          {renderImage("competition-adults-medals", "aspect-[16/9]")}
          {renderImage("competition-lineup", "aspect-[16/9]")}
        </div>
      </div>
    );
  }

  if (category.key === "training") {
    return (
      <div className="mx-auto flex w-full max-w-[980px] flex-col gap-2 sm:gap-2.5 lg:gap-3">
        <div className="grid grid-cols-12 items-start gap-2 sm:gap-2.5 lg:gap-3">
          <div className="col-span-8 min-w-0">
            {renderImage("training-open-mat", "aspect-[16/9]")}
          </div>
          <div className="col-span-4 min-w-0">
            {renderImage("training-logo-drill", "aspect-[5/6]")}
          </div>
        </div>

        <div className="grid grid-cols-12 items-start gap-2 sm:gap-2.5 lg:gap-3">
          <div className="col-span-5 flex min-w-0 flex-col gap-2 sm:gap-2.5 lg:gap-3">
            {renderImage("training-kids-portrait", "aspect-[3/4]")}
            {renderImage("training-adults-smile", "aspect-[3/4]")}
          </div>
          <div className="col-span-7 flex min-w-0 flex-col gap-2 sm:gap-2.5 lg:gap-3">
            {renderImage("training-standup-drill", "aspect-[16/10]")}
            {renderImage("training-blue-gi-roll", "aspect-[16/10]")}
            {renderImage("training-kids-hug", "aspect-[4/5]")}
          </div>
        </div>
      </div>
    );
  }

  if (category.key === "veterans") {
    return (
      <div className="mx-auto flex w-full max-w-[980px] flex-col gap-2 sm:gap-2.5 lg:gap-3">
        <div className="grid grid-cols-12 items-start gap-2 sm:gap-2.5 lg:gap-3">
          <div className="col-span-6 flex min-w-0 flex-col gap-2 sm:gap-2.5 lg:gap-3">
            {renderImage("veterans-action", "aspect-[3/2]")}
            {renderImage("veterans-seated", "aspect-[3/2]")}
          </div>
          <div className="col-span-6 min-w-0">
            {renderImage("veterans-handshake", "aspect-[2/3]")}
          </div>
        </div>

        <div className="grid grid-cols-12 items-start gap-2 sm:gap-2.5 lg:gap-3">
          <div className="col-span-5 min-w-0">
            {renderImage("veterans-stance", "aspect-[4/5]")}
          </div>
          <div className="col-span-7 min-w-0">
            {renderImage("veterans-podium", "aspect-[4/3]")}
          </div>
        </div>

        <div className="grid grid-cols-12 items-start gap-2 sm:gap-2.5 lg:gap-3">
          <div className="col-span-7 min-w-0">
            {renderImage("veterans-victory-walk", "aspect-[3/2]")}
          </div>
          <div className="col-span-5 min-w-0">
            {renderImage("veterans-back-view", "aspect-[8/7]")}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto grid w-full max-w-[980px] grid-cols-12 items-start gap-2 sm:gap-2.5 lg:gap-3">
      {images.map((image) => (
        <div className="col-span-6" key={image.id}>
          <GalleryImage image={image} />
        </div>
      ))}
    </div>
  );
}

export function MediaPageSection({
  categories,
  initialCategoryKey,
}: MediaPageSectionProps) {
  const initialIndex = Math.max(
    categories.findIndex(
      (category) =>
        category.key === initialCategoryKey &&
        category.gallery.length > 0 &&
        category.heroImage,
    ),
    0,
  );
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const activeCategory = categories[activeIndex] ?? categories[0];

  const getSiblingIndex = (direction: -1 | 1) => {
    const availableCategoryIndices = categories
      .map((category, index) =>
        category.gallery.length > 0 && category.heroImage ? index : -1,
      )
      .filter((index) => index >= 0);

    if (availableCategoryIndices.length <= 1 || !activeCategory) {
      return activeIndex;
    }

    const currentAvailableIndex = Math.max(
      availableCategoryIndices.indexOf(activeIndex),
      0,
    );
    const nextIndex =
      (currentAvailableIndex + direction + availableCategoryIndices.length) %
      availableCategoryIndices.length;
    return availableCategoryIndices[nextIndex];
  };

  const getSiblingHref = (direction: -1 | 1) => {
    const siblingCategory = categories[getSiblingIndex(direction)];

    return siblingCategory?.key === "competitions"
      ? "/gallery"
      : `/gallery?category=${siblingCategory?.key ?? "competitions"}`;
  };

  const goToSibling = (direction: -1 | 1) => {
    setActiveIndex(getSiblingIndex(direction));
  };

  if (!activeCategory?.heroImage) {
    return null;
  }

  return (
    <div className="overflow-hidden bg-[var(--color-canvas)] text-white">
      <section
        className={cn(
          "relative isolate overflow-hidden border-b border-white/10 bg-black",
          heroSectionClassMap[activeCategory.key] ?? "min-h-screen",
        )}
      >
        <Image
          alt={activeCategory.heroImage.alt}
          className={cn(
            mobileHeroClassMap[activeCategory.key] ?? "object-cover",
            "bg-black",
          )}
          fill
          priority
          sizes="100vw"
          src={activeCategory.heroImage.src}
          style={{ objectPosition: activeCategory.heroImage.objectPosition }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(4_6_8_/_0.18)_0%,rgb(4_6_8_/_0.24)_42%,rgb(4_6_8_/_0.62)_100%)] sm:bg-[linear-gradient(180deg,rgb(4_6_8_/_0.28)_0%,rgb(4_6_8_/_0.34)_42%,rgb(4_6_8_/_0.74)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(8_8_8_/_0.18)_0%,transparent_48%,rgb(8_8_8_/_0.14)_100%)] sm:bg-[linear-gradient(90deg,rgb(8_8_8_/_0.32)_0%,transparent_48%,rgb(8_8_8_/_0.24)_100%)]" />
      </section>

      <section className="border-b border-white/10 bg-[var(--color-surface-2)] py-8 sm:py-10 lg:py-12">
        <Container className="space-y-8 sm:space-y-9 lg:space-y-10" size="wide">
          <div
            className="h-px w-full bg-white/18"
            style={
              accentColorMap[activeCategory.key]
                ? { backgroundColor: accentColorMap[activeCategory.key] }
                : undefined
            }
            aria-hidden="true"
          />

          <div className="mx-auto flex max-w-[76rem] flex-col items-center gap-4 text-center">
            <div className="grid w-full grid-cols-[3rem_minmax(0,1fr)_3rem] items-center gap-2 sm:grid-cols-[4rem_minmax(0,1fr)_4rem] sm:gap-6 lg:gap-10">
              <CategoryArrow
                categoryKey={activeCategory.key}
                direction="previous"
                href={getSiblingHref(-1)}
                label="Попередня категорія медіа"
                onClick={() => goToSibling(-1)}
              />
              <h1 className="mx-auto min-w-0 max-w-[24ch] text-balance text-center text-[clamp(1.85rem,5.6vw,4.65rem)] font-medium leading-[1.02] tracking-[-0.045em] text-white">
                {activeCategory.title}
              </h1>
              <CategoryArrow
                categoryKey={activeCategory.key}
                direction="next"
                href={getSiblingHref(1)}
                label="Наступна категорія медіа"
                onClick={() => goToSibling(1)}
              />
            </div>
            <p
              className="text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-white/48"
              style={
                indicatorColorMap[activeCategory.key]
                  ? { color: indicatorColorMap[activeCategory.key] }
                  : undefined
              }
            >
              {activeIndex + 1} / {categories.length}
            </p>
          </div>

          <div
            className="h-px w-full bg-white/18"
            style={
              accentColorMap[activeCategory.key]
                ? { backgroundColor: accentColorMap[activeCategory.key] }
                : undefined
            }
            aria-hidden="true"
          />

          <GalleryLayout category={activeCategory} images={activeCategory.gallery} />
        </Container>
      </section>
    </div>
  );
}
