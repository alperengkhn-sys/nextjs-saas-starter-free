import React from 'react';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#09090b', color: '#fff', fontFamily: 'sans-serif', padding: '20px' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid #27272a', borderRadius: '8px', backgroundColor: '#18181b' }}>
        <div style={{ fontWeight: 'bold', fontSize: '18px' }}>🚀 Next.js 14 SaaS Demo</div>
        <button style={{ padding: '8px 16px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Dashboard Active</button>
      </nav>
      <main style={{ maxWidth: '1000px', margin: '40px auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '12px', padding: '24px' }}>
          <h1 style={{ fontSize: '24px', marginBottom: '8px' }}>Interactive SaaS Dashboard Preview</h1>
          <p style={{ color: '#a1a1aa', fontSize: '14px' }}>Explore the live layout and components included in this boilerplate.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          <div style={{ backgroundColor: '#18181b', border: '1px solid #27272a', padding: '20px', borderRadius: '8px' }}>
            <div style={{ fontSize: '12px', color: '#a1a1aa' }}>Total Revenue</div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '4px' }}>$12,450.00</div>
          </div>
          <div style={{ backgroundColor: '#18181b', border: '1px solid #27272a', padding: '20px', borderRadius: '8px' }}>
            <div style={{ fontSize: '12px', color: '#a1a1aa' }}>Active Users</div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '4px' }}>+2,350</div>
          </div>
          <div style={{ backgroundColor: '#18181b', border: '1px solid #27272a', padding: '20px', borderRadius: '8px' }}>
            <div style={{ fontSize: '12px', color: '#a1a1aa' }}>Database Status</div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#22c55e', marginTop: '4px' }}>Connected</div>
          </div>
        </div>
      </main>
    </div>
  );
}
