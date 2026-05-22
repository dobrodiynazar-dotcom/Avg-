import type { ContactChannel } from "@/types/content";

import { Button, Card } from "@/components/ui";

type ContactCardProps = {
  channel: ContactChannel;
};

export function ContactCard({ channel }: ContactCardProps) {
  return (
    <Card className="flex h-full flex-col justify-between gap-6" padding="md" variant="default">
      <div className="space-y-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-ink-subtle)]">
          {channel.label}
        </p>

        <div className="space-y-3">
          <h3 className="text-[1.05rem] font-semibold tracking-[-0.03rem] text-[var(--color-ink)]">
            {channel.value}
          </h3>
          {channel.description ? (
            <p className="text-[0.8125rem] leading-6 text-[var(--color-ink-muted)]">{channel.description}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-4 border-t border-[rgb(255_255_255_/_0.08)] pt-4">
        {channel.availability ? (
          <p className="text-[0.75rem] leading-6 text-[var(--color-ink-subtle)]">
            {channel.availability}
          </p>
        ) : null}
        <Button
          className="w-full"
          href={channel.href}
          rel={channel.external ? "noreferrer" : undefined}
          target={channel.external ? "_blank" : undefined}
          variant={channel.variant}
        >
          {channel.ctaLabel ?? "Відкрити канал"}
        </Button>
      </div>
    </Card>
  );
}
