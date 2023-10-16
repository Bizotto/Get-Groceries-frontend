import Link from 'next/link';
import { ReactElement } from 'react';

interface RouteItemProps {
  className?: string;
  label: string;
  route: string;
  icon: ReactElement;
}

export function RouteItem({ label, route, icon, className }: RouteItemProps) {
  return (
    <Link className={className} href={route}>
      <p className="text-secondary-200">{icon}</p>
      <p className="text-secondary-200">{label}</p>
    </Link>
  );
}
