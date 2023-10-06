'use client';
import { sidebar } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SideBar() {
  const pathname = usePathname();

  return (
    <section className="sticky left-0 top-0 z-20 flex h-screen w-48 flex-col justify-between overflow-auto border-r border-r-secondary-200 bg-primary pb-5 pt-28 max-md:hidden">
      <div className="flex w-full flex-1 flex-col pt-10 gap-6 pr-7">
        {sidebar.map(link => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`relative flex transition-colors justify-start gap-2 rounded-r-xl p-4 ${
                isActive
                  ? 'bg-secondary-100 border-r shadow-md border-secondary-200'
                  : 'backdrop-filter backdrop-blur-sm hover:bg-secondary-100 hover:border-r hover:shadow-md hover:border-secondary-200'
              }`}
            >
              <Image src={link.icon} alt={link.label} width={26} height={26} />
              <p className="text-secondary-200 max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>
      <div className="mt-10 px-6"></div>
    </section>
  );
}
