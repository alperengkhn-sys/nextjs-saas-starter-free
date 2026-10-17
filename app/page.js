export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center', backgroundColor: '#09090b', color: '#fff' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        🚀 Next.js 14 SaaS Starter Kit <span style={{ opacity: 0.6 }}>(Free Edition)</span>
      </h1>
      <p style={{ maxWidth: '600px', fontSize: '1.125rem', color: '#a1a1aa', marginBottom: '2rem' }}>
        Production-ready Next.js 14 architecture for solopreneurs. Build and ship fast.
      </p>
      
      <div style={{ background: '#18181b', border: '1px solid #27272a', borderRadius: '12px', padding: '2rem', maxWidth: '500px', width: '100%' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Unlock Full Production Features</h2>
        <ul style={{ textAlign: 'left', color: '#a1a1aa', marginBottom: '1.5rem', lineHeight: '1.8' }}>
          <li>✅ Complete Auth System</li>
          <li>✅ Payment Gateway Integration (Stripe / Polar)</li>
          <li>✅ Database Schemas & Prisma ORM</li>
          <li>✅ Full Source Code & Commercial License</li>
        </ul>
        <a 
          href="https://gumroad.com/l/sbadzu" 
          target="_blank" 
          style={{ display: 'block', background: '#3b82f6', color: '#fff', fontWeight: '600', padding: '0.75rem 1.5rem', borderRadius: '8px', textDecoration: 'none' }}
        >
          Get Pro Boilerplate ($49) →
        </a>
      </div>
    </main>
  )
}
