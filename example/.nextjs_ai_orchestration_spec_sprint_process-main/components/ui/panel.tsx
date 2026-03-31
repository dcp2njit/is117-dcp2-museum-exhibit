import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const panelVariants = cva(
  "rounded-2xl border shadow-[0_18px_52px_rgba(56,38,24,0.05)]",
  {
    variants: {
      variant: {
        default: "border-(--surface-border) bg-(--surface-warm-92)",
        warm: "border-(--surface-border) bg-[linear-gradient(180deg,var(--surface-warm-98),rgba(247,241,234,0.98))] shadow-[0_22px_68px_rgba(56,38,24,0.06)]",
        subtle:
          "border-(--surface-border) bg-[linear-gradient(180deg,var(--surface-warm-98),rgba(249,244,238,0.96))]",
      },
      size: {
        md: "p-6 sm:p-8",
        lg: "p-6 sm:p-8 xl:p-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "lg",
    },
  }
);

type PanelProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof panelVariants> & {
    asChild?: boolean;
  };

function Panel({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: PanelProps) {
  const Comp = asChild ? Slot : "section";

  return (
    <Comp
      className={cn(panelVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Panel, panelVariants };
