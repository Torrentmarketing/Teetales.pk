import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TeeTales – Every Tee Tells a Story',
  description:
    'High-quality plain & statement cotton tees. Minimalist. Bold. Timeless. Shop packs at fair prices with fast delivery across Pakistan.',
  keywords: 'tshirts pakistan, cotton tees peshawar, plain tshirts, teetales',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
