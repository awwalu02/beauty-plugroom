import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Beauty Plug',
  description: 'Your beauty products store',
};

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@1..144,144@1,9..144,400..900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}