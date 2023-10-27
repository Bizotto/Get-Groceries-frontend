import Link from 'next/link';
import { ReactElement } from 'react';

interface CardProps {
  link: string;
  title: string;
  icon: ReactElement;
}

export function Card({ title, link, icon }: CardProps) {
  return (
    <Link
      className="flex-col border gap-10 items-center mt-10 flex border-secondary-300 rounded-2xl bg-secondary-200 p-4 w-56 h-56 hover:scale-90 transition"
      href={link}
    >
      <h1 className="font-bold text-lg text-secondary-300">{title}</h1>
      <p className="text-secondary-300">{icon}</p>
    </Link>
  );
}
