type SectionNavItem = {
  id: string;
  label: string;
};

type SectionNavProps = {
  items: SectionNavItem[];
  label: string;
  className?: string;
};

export function SectionNav({ items, label, className }: SectionNavProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav aria-label={label} className={className ? `section-nav ${className}` : "section-nav"}>
      <p className="section-nav__eyebrow">{label}</p>
      <ul className="section-nav__list">
        {items.map((item) => (
          <li key={item.id}>
            <a className="section-nav__link" href={`#${item.id}`}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}