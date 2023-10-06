'use client';
import { Trash } from 'lucide-react';

interface ButtonProps {
  onClick: any;
}

export function DeleteButton({ onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className=" hidden border rounded-md p-1 border-red-600 hover:bg-red-700 transition-colors group-hover:flex"
    >
      <Trash color="red" width={15} height={15} />
    </button>
  );
}
