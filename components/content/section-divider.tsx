type SectionDividerProps = {
  label: string;
};

export function SectionDivider({ label }: SectionDividerProps) {
  return (
    <div className="section-divider" aria-hidden="true">
      <span className="section-divider__rule" />
      <span className="section-divider__label">{label}</span>
      <span className="section-divider__rule" />
    </div>
  );
}
