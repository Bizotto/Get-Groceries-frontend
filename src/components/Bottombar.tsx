'use client';
import { routes } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Bottombar() {
  const pathname = usePathname();

  return (
    <section className="fixed bottom-0 z-10 w-full bg-greenTransparent p-4 backdrop-blur-lg xs:px-7 md:hidden">
      <div className="flex items-center justify-between gap-3 xs:gap-5">
        {routes.map(link => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`relative flex flex-col items-center gap-2 rounded-lg p-2 sm:flex-1 sm:px-2 sm:py-2.5 ${
                isActive && 'bg-greenTransparent'
              }`}
            >
              <div className="text-secondary-300">{link.icon}</div>
              <p className="text-subtle-medium text-secondary-300 max-sm:hidden">
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
