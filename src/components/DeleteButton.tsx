'use client';
import { api } from '@/lib';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Trash } from 'lucide-react';

interface ButtonProps {
  id: string;
}

export function DeleteButton({ id }: ButtonProps) {
  const queryClient = useQueryClient();
  const { mutate: onDelete } = useMutation({
    mutationKey: ['products', 'delete', id],
    mutationFn: async () => {
      return api.ProductsGateway.delete(id);
    },
    onSuccess: async () => {
      await api.ProductsGateway.index();
      queryClient.invalidateQueries(['products']);
    },
  });

  return (
    <button
      onClick={() => {
        onDelete();
      }}
      className="hidden border rounded-md p-1 border-red-600 hover:bg-red-500 text-red-600 hover:text-zinc-100  transition-colors group-hover:flex"
    >
      <Trash width={15} height={15} />
    </button>
  );
}
