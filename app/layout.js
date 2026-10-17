export const metadata = {
  title: 'Next.js 14 SaaS Starter Kit (Free Edition)',
  description: 'Launch your SaaS in days with Next.js 14 architecture.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', backgroundColor: '#09090b', color: '#fff' }}>
        {children}
      </body>
    </html>
  )
}
