import type { MediaAsset } from "@/types/content";

import { Card } from "@/components/ui";

type MediaCardProps = {
  asset: MediaAsset;
};

const aspectRatioClassMap: Record<MediaAsset["aspectRatio"], string> = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

export function MediaCard({ asset }: MediaCardProps) {
  return (
    <Card className="flex h-full flex-col gap-4" padding="sm">
      <div
        className={`${aspectRatioClassMap[asset.aspectRatio]} rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface-2)] p-4`}
      >
        <div className="flex h-full items-end rounded-[calc(var(--radius-lg)-2px)] border border-dashed border-[var(--color-hairline-strong)] p-4">
          <div className="space-y-2">
            <span className="rounded-full border border-[var(--color-hairline-strong)] bg-[var(--color-surface-3)] px-2.5 py-1 text-[11px] uppercase tracking-[0.4px] text-[var(--color-ink-muted)]">
              {asset.kind}
            </span>
            <p className="text-sm text-[var(--color-ink-subtle)]">{asset.status}</p>
          </div>
        </div>
      </div>
      <div className="space-y-2 px-1 pb-1">
        <h3 className="text-lg font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
          {asset.title}
        </h3>
        <p className="text-sm leading-7 text-[var(--color-ink-muted)]">{asset.summary}</p>
      </div>
    </Card>
  );
}
