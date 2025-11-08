// El layout de servicios no define metadata por defecto
// Las páginas individuales manejan su propia metadata única

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}