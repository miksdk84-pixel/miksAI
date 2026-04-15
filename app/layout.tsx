export const metadata = {
  title: 'MiksAI',
  description: 'Cyberpunk Morgen Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#0a0520' }}>
        {children}
      </body>
    </html>
  )
}
