export default function ErasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main id="main-content" className="shell shell--wide era-shell">{children}</main>;
}