import Image from "next/image";

import type { MediaAsset } from "@/types/content";

type MediaCardProps = {
  asset: MediaAsset;
  featured?: boolean;
};

const aspectRatioClassMap: Record<MediaAsset["aspectRatio"], string> = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

export function MediaCard({ asset, featured = false }: MediaCardProps) {
  return (
    <article className={`${featured ? "md:col-span-2 xl:row-span-2" : ""}`}>
      <div
        className={`${aspectRatioClassMap[asset.aspectRatio]} cinema-image relative overflow-hidden rounded-[var(--radius-card-lg)] ${
          featured ? "min-h-[17rem] sm:min-h-[21rem] lg:min-h-[23rem]" : ""
        } border border-[rgb(255_255_255_/_0.08)]`}
      >
        {asset.imageSrc ? (
          <Image
            alt=""
            className="object-cover"
            fill
            sizes={
              featured
                ? "(min-width: 1280px) 50vw, 100vw"
                : "(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
            }
            src={asset.imageSrc}
          />
        ) : null}
      </div>
    </article>
  );
}
