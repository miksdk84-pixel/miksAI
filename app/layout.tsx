
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
