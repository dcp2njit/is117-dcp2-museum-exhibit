import {
  EditorialPanelSplit,
  EditorialSplit,
} from "@/components/content/editorial/editorial-layout";

export function HomeSectionSplit({
  className,
  left,
  right,
  leftClassName,
  rightClassName,
}: {
  className?: string;
  left: React.ReactNode;
  right: React.ReactNode;
  leftClassName?: string;
  rightClassName?: string;
}) {
  return (
    <EditorialSplit
      className={className}
      left={left}
      right={right}
      leftClassName={leftClassName}
      rightClassName={rightClassName}
    />
  );
}

export function HomePanelSplit({
  className,
  left,
  right,
  leftClassName,
  rightClassName,
}: {
  className?: string;
  left: React.ReactNode;
  right: React.ReactNode;
  leftClassName?: string;
  rightClassName?: string;
}) {
  return (
    <EditorialPanelSplit
      className={className}
      left={left}
      right={right}
      leftClassName={leftClassName}
      rightClassName={rightClassName}
    />
  );
}
