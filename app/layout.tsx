import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';
import Navbar from '@/components/Navbar';
import AnimatedBackground from '@/components/AnimatedBackground'; // 👈 নতুন ব্যাকগ্রাউন্ড ইমপোর্ট

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rafy | Full Stack Web Developer',
  description: 'Premium Portfolio of Rafy, specializing in modern web development.',
  icons: {
    icon: "/rafy.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased relative`}>
        <Providers>
          
          {/* New Deep Space Neon Perspective Background */}
          <AnimatedBackground />
          
          <Navbar />
          <main className="min-h-screen pt-5 pb-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}