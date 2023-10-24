'use client';

import { Category } from '@/interfaces/Category';
import { api } from '@/lib';
import { useQuery } from '@tanstack/react-query';

export default function CategorySelector() {
  const categories = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const data = await api.CategoriesGateway.index();
      return data as Category[];
    },
  });

  return (
    <div>
      <select
        className="flex items-center px-2 text-secondary-300 bg-secondary-100 h-12 rounded-lg"
        id="categories"
        name="categories"
      >
        <option value="" disabled selected>
          Categories
        </option>
        {categories.data?.map(category => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}
