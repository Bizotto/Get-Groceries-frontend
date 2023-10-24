'use client';

import { api } from '@/lib';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Check } from 'lucide-react';
import { useState } from 'react';
import CategorySelector from './CategorySelector';

export function InputProducts() {
  const [input, setInput] = useState('');
  const queryClient = useQueryClient();

  const { mutate: onSubmit } = useMutation({
    mutationFn: async () => {
      const data = await api.ProductsGateway.store({
        name: input,
      });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);
      setInput('');
    },
  });

  return (
    <div className="flex justify-center items-center gap-2">
      <input
        className="pl-4 border w-full h-12 rounded-lg placeholder:text-secondary-200 border-secondary-200 bg-greenTransparent focus:outline-none"
        type="text"
        placeholder="Type your items here"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <CategorySelector />
      <button
        className="w-20 rounded-lg h-12 items-center justify-center flex text-secondary-300 hover:bg-secondary-300 hover:text-white hover:border border-secondary-300 transition-colors"
        type="submit"
        onClick={() => {
          onSubmit();
        }}
      >
        <Check height={24} width={24} />
      </button>
    </div>
  );
}
