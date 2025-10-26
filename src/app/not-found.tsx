export default function NotFound() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#F0F4F8' }}>
      <h1 style={{ fontSize: '3rem', color: '#60BEC3', marginBottom: '1rem' }}>¡Uy! 404</h1>
      <p style={{ fontSize: '1.5rem', color: '#333', marginBottom: '2rem' }}>
        Esta página se fue a hacer un <span style={{ color: '#60BEC3', fontWeight: 'bold' }}>pedicure</span>...<br />
        Pero no te preocupes, tus pies (y tus enlaces) están en buenas manos.
      </p>
      <a href="/" style={{
        background: '#60BEC3',
        color: '#fff',
        padding: '0.75rem 2rem',
        borderRadius: '999px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        boxShadow: '0 2px 8px rgba(96,190,195,0.15)'
      }}>
        Volver al inicio
      </a>
      <div style={{ marginTop: '2rem', fontSize: '2.5rem' }}>🦶🦶</div>
    </div>
  );
}
