import type { ContactChannel } from "@/types/content";

import { Button, Card } from "@/components/ui";

type ContactCardProps = {
  channel: ContactChannel;
};

export function ContactCard({ channel }: ContactCardProps) {
  return (
    <Card className="flex h-full flex-col justify-between gap-5" padding="md">
      <div className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-primary)]">
          {channel.label}
        </p>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
            {channel.value}
          </h3>
          {channel.description ? (
            <p className="text-sm leading-7 text-[var(--color-ink-muted)]">{channel.description}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-3">
        {channel.availability ? (
          <p className="text-xs leading-6 text-[var(--color-ink-subtle)]">
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
