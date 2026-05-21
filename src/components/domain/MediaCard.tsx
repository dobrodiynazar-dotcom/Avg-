import type { MediaAsset } from "@/types/content";

type MediaCardProps = {
  asset: MediaAsset;
};

const aspectRatioClassMap: Record<MediaAsset["aspectRatio"], string> = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

const kindLabelMap: Record<MediaAsset["kind"], string> = {
  photo: "Р¤РѕС‚Рѕ",
  video: "Р’С–РґРµРѕ",
};

export function MediaCard({ asset }: MediaCardProps) {
  return (
    <article className="pin-card-shell mb-5 break-inside-avoid">
      <div className={`${aspectRatioClassMap[asset.aspectRatio]} pin-image-fill`}>
        <div className="relative z-10 flex h-full flex-col justify-between p-4">
          <span className="w-fit rounded-full bg-[var(--color-canvas)] px-3 py-1 text-[11px] font-bold text-[var(--color-ink)]">
            {kindLabelMap[asset.kind]}
          </span>
          <div className="space-y-2">
            <span className="w-fit rounded-full bg-[rgb(255_255_255_/_0.76)] px-3 py-1 text-[11px] font-medium text-[var(--color-ink-subtle)]">
              {asset.statusLabel}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2 p-4">
        <h3 className="text-lg font-semibold tracking-[-0.03rem] text-[var(--color-ink)]">
          {asset.title}
        </h3>
        <p className="text-sm leading-7 text-[var(--color-ink-muted)]">{asset.summary}</p>
      </div>
    </article>
  );
}
