'use client';

import { useEffect, useState } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    console.error(error);
  }, [error]);

  const handleCopy = () => {
    navigator.clipboard.writeText(error.message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
      <h2 style={{ marginBottom: '20px' }}>Something went wrong!</h2>
      <p style={{ marginBottom: '20px' }}>{error.message || 'An unexpected error occurred.'}</p>
      <button
        onClick={() => reset()}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          border: '1px solid #ccc',
          borderRadius: '5px',
          backgroundColor: '#f0f0f0'
        }}
      >
        Try again
      </button>
      <button
        onClick={handleCopy}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          border: '1px solid #ccc',
          borderRadius: '5px',
          backgroundColor: '#f0f0f0',
          marginLeft: '10px'
        }}
      >
        {copied ? 'Copied!' : 'Copy Error'}
      </button>
    </div>
  );
}
