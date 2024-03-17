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

            <style>
                @import url('https://fonts.googleapis.com/css2?family=Ojuju:wght@200..400&display=swap')
            </style>

            <body style={{
                height: '100vh',
                margin: '0'
            }}>
                {children}
            </body>
        </html>
    );
}
