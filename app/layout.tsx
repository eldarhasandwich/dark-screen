'use client'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html style={{
      background: 'black'
    }}>
      <body style={{
        height: '100vh',
        margin: '0'
      }}>
        {children}
      </body>
    </html>
  );
}
