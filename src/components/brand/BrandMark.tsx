import Image from "next/image";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <span className={className}>
      <Image
        alt=""
        aria-hidden="true"
        className="h-full w-full object-contain"
        height={48}
        priority={false}
        src="/brand/avangard-valknut.png"
        width={48}
      />
    </span>
  );
}
