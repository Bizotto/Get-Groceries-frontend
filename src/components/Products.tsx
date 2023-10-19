'use client';
import { Product } from '@/interfaces/Product';
import { api } from '@/lib';
import { useQuery } from '@tanstack/react-query';
import { DeleteButton } from './DeleteButton';

export function Products() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const data = await api.ProductsGateway.index();
      return data as Product[];
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return data.length === 0 ? (
    <div className="flex justify-center">
      <p className="text-center text-secondary-300">
        Your Items will apear Here!!
      </p>
    </div>
  ) : (
    <div className="w-full max-h-full border border-secondary-200 rounded-lg p-4">
      {data?.map(product => (
        <div
          className="group flex items-center justify-between px-4 py-4 my-4 rounded-xl hover:bg-secondary-200 transition ease-in-out duration-200"
          key={product.id}
        >
          <div className="flex gap-3">
            <input type="checkbox" />
            <div className="flex gap-3">
              <h2 className="font-bold text-secondary-300">{product.name}</h2>
            </div>
          </div>
          <div>
            <DeleteButton id={product.id} />
          </div>
        </div>
      ))}
    </div>
  );
}
