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
      <style
        //@ts-ignore
        precedence="default" href="unique-style-identifier"
      >
        @import url(&#39;https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@100;200;300;400;500;600;700;800;900&family=Gruppo&display=swap&#39;)
      </style>
      <body>
        {children}
      </body>
    </html>
  );
}
