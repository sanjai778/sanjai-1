import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ fontSize: '2em', marginBottom: '20px' }}>404 - Page Not Found</h1>
      <p style={{ marginBottom: '20px' }}>The page you are looking for does not exist.</p>
      <Link href="/" style={{
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f0f0f0',
        textDecoration: 'none',
        color: 'black'
      }}>
        Go back to Home
      </Link>
    </div>
  );
}
