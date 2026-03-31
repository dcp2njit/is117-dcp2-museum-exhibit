import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function EditorialSplit({
  className,
  left,
  right,
  leftClassName,
  rightClassName,
}: {
  className?: string;
  left: ReactNode;
  right: ReactNode;
  leftClassName?: string;
  rightClassName?: string;
}) {
  return (
    <div className={cn("grid gap-4 xl:items-start xl:gap-5", className)}>
      <div className={leftClassName}>{left}</div>
      <div className={rightClassName}>{right}</div>
    </div>
  );
}

export function EditorialPanelSplit({
  className,
  left,
  right,
  leftClassName,
  rightClassName,
}: {
  className?: string;
  left: ReactNode;
  right: ReactNode;
  leftClassName?: string;
  rightClassName?: string;
}) {
  return (
    <div className={cn("grid gap-0", className)}>
      <div className={leftClassName}>{left}</div>
      <div className={rightClassName}>{right}</div>
    </div>
  );
}
