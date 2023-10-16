import Bottombar from '@/components/Bottombar';
import TopBar from '@/components/TopBar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Get Groceries',
  description: 'Your Groceries in one place',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const isAuthenticated = cookies().has("token");
  const isAuthenticated = true;
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary`}>
        <TopBar />
        {isAuthenticated ? (
          <>
            <main className="flex flex-row">
              <section className="flex min-h-screen flex-1 flex-col items-center bg-primary px-6 pb-10 pt-28 max-md:pb-32 sm:px-10">
                <div className="w-full max-w-4xl">{children}</div>
              </section>
            </main>
            <Bottombar />
          </>
        ) : (
          <section className="flex min-h-screen flex-1 flex-col items-center bg-primary px-6 pb-10 pt-28 max-md:pb-32 sm:px-10">
            oi
          </section>
        )}
      </body>
    </html>
  );
}
