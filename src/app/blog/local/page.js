import Link from "next/link";

export const metadata = {
  title: "Podología Local en Quito | Blog de Podoclinic",
  description: "Artículos y recursos sobre podología local en Quito. Encuentra información sobre servicios, consejos y casos reales en tu zona.",
};

export default function BlogLocalPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">Podología Local en Quito</h1>
      <p className="mb-6">Explora artículos y recursos sobre podología local, servicios y experiencias en tu sector.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Link href="/blog/local/podologo-la-florida-quito-norte/" className="text-blue-600 hover:underline">
            Podólogo en La Florida, Quito Norte
          </Link>
        </li>
        {/* Agrega aquí más enlaces a artículos locales si los tienes */}
      </ul>
    </div>
  );
}
