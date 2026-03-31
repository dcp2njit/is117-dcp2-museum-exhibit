export default function ErasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="page-shell exemplar-shell">{children}</main>;
}
