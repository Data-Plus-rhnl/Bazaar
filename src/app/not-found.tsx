import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px 20px',
      position: 'relative',
      zIndex: 1
    }}>
      <h1 style={{ fontSize: '5rem', fontWeight: 900, color: 'var(--accent-primary)', marginBottom: '16px' }}>404</h1>
      <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>Page Not Found</h2>
      <p style={{ color: 'var(--text-muted)', maxWidth: '460px', marginBottom: '32px', lineHeight: 1.6 }}>
        The page you are looking for might have been moved, removed, or is temporarily unavailable.
      </p>
      <Link href="/" className="btn-accent" style={{ padding: '12px 28px', textDecoration: 'none' }}>
        Return to Homepage
      </Link>
    </div>
  );
}
