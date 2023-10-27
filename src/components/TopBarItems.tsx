'use client';
import { routes } from '@/constants';
import { usePathname } from 'next/navigation';
import { RouteItem } from './NavigateItem';

export function TopBarItems() {
  const pathname = usePathname();

  return routes.map(route => {
    const isActive =
      (pathname.includes(route.route) && route.route.length > 1) ||
      pathname === route.route;
    return (
      <RouteItem
        className={`flex items-center justify-center gap-1 rounded-lg p-2 hover:bg-greenTransparent max-md:hidden max-sm:hidden hover:border-greenTransparent hover:shadow-none transition-colors 
        ${
          isActive && 'bg-greenTransparent border-greenTransparent shadow-none'
        }`}
        key={route.label}
        icon={route.icon}
        label={route.label}
        route={route.route}
      />
    );
  });
}
