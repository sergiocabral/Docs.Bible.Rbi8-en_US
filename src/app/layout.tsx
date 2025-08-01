import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/../public/theme.css';
import '@/../public/styles.css';
import './globals.css';
import { AuthProvider } from '@/components/AuthProvider';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

const og = process.env.NEXT_PUBLIC_OPEN_GRAPH
  ? JSON.parse(process.env.NEXT_PUBLIC_OPEN_GRAPH)
  : null;

export const metadata: Metadata = {
  title: 'sergiocabral.com',
  description: 'Estudo e Pesquisa',
  openGraph: {
    title: og.title,
    description: og.description,
    url: og.url,
    siteName: og.site_name,
    type: og.type,
    images: [
      {
        url: og.image.url,
        width: og.image.width,
        height: og.image.height,
        alt: og.image.alt,
      },
    ],
    locale: og.locale,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <Head>
        {process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL &&
          process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
            <script
              defer
              src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
              data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            />
          )}
      </Head>
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
