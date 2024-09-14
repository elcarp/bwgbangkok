import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: "British Women's Group",
//   description:
//     "The British Women's Group where friendships are made. Since 1969, the British Women's Group has served as a welcoming community for women, whether newcomers or long term residents. By joining our vibrant group you will discover new friendships, build lasting connections, and participate in engaging activities. Women of all age and nationalities are warmly.",
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
