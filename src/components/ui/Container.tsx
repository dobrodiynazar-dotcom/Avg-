import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type ContainerSize = "narrow" | "default" | "wide" | "full";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  size?: ContainerSize;
  bleedOnMobile?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

const sizeClassMap: Record<ContainerSize, string> = {
  narrow: "max-w-[840px]",
  default: "max-w-[1280px]",
  wide: "max-w-[1440px]",
  full: "max-w-none",
};

export function Container<T extends ElementType = "div">({
  as,
  children,
  className,
  size = "default",
  bleedOnMobile = false,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "mx-auto w-full",
        sizeClassMap[size],
        bleedOnMobile ? "px-0 sm:px-6 lg:px-8" : "px-4 sm:px-6 lg:px-8",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
