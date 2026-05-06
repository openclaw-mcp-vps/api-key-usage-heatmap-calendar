import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Key Usage Heatmap Calendar',
  description: 'Visual calendar heatmap showing API key usage intensity with anomaly detection and suspicious pattern alerts for DevOps and security teams.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4f747268-fabe-4494-b146-9c7f6b74df7a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
