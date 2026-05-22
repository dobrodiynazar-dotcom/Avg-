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

const kindLabelMap: Record<MediaAsset["kind"], string> = {
  photo: "Фото",
  video: "Відео",
};

export function MediaCard({ asset, featured = false }: MediaCardProps) {
  return (
    <article
      className={`${featured ? "md:col-span-2 xl:row-span-2" : ""}`}
    >
      <div
        className={`${aspectRatioClassMap[asset.aspectRatio]} cinema-image ${
          featured ? "min-h-[22rem] sm:min-h-[28rem]" : ""
        } border border-[rgb(255_255_255_/_0.08)]`}
      >
        <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="border border-[rgb(255_255_255_/_0.12)] bg-[rgb(24_24_24_/_0.46)] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-ink)] backdrop-blur-sm">
              {kindLabelMap[asset.kind]}
            </span>
            <span className="border border-[rgb(255_255_255_/_0.08)] bg-[rgb(24_24_24_/_0.32)] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-ink-subtle)] backdrop-blur-sm">
              {asset.statusLabel}
            </span>
          </div>

          <div className="max-w-[24rem] space-y-3">
            <h3
              className={`text-[var(--color-ink)] ${
                featured
                  ? "text-[clamp(1.75rem,3vw,2.75rem)] font-medium leading-[1.08] tracking-[-0.05rem]"
                  : "text-[1.2rem] font-semibold tracking-[-0.03rem]"
              }`}
            >
              {asset.title}
            </h3>
            <p className="text-[0.8125rem] leading-6 text-[rgb(255_255_255_/_0.76)]">
              {asset.summary}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
