'use client';
import { DeleteButton } from '@/components/DeleteButton';
import { Product } from '@/interfaces/Product';
import { api } from '@/lib';
import { useQuery } from '@tanstack/react-query';

export default function Vegetables() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const data = await api.ProductsGateway.getProductsByCategoryId(
        'cllstqpz20000sp3gbbld9n52'
      );
      return data as Product[];
    },
  });

  if (isLoading) {
    return (
      <div className="w-full max-h-full border border-secondary-200 rounded-lg p-4 transition-opacity duration-300">
        {[...Array(10)].map((_, index) => (
          <div
            className="animate-pulse group flex items-center justify-between px-4 py-4 my-4 rounded-xl"
            key={index}
          >
            <div className="h-9 bg-secondary-200 rounded-xl w-full" />
          </div>
        ))}
      </div>
    );
  }
  if (isError) return <div>Error</div>;

  return data.length === 0 ? (
    <div className="flex justify-center">
      <p className="text-center text-secondary-300">
        Your Items will apear Here!!
      </p>
    </div>
  ) : (
    <div className="w-full max-h-full border border-secondary-200 rounded-lg p-4">
      {data?.map(vegetables => (
        <div
          className="group flex items-center justify-between px-4 py-4 my-4 rounded-xl hover:bg-secondary-200 transition ease-in-out duration-200"
          key={vegetables.id}
        >
          <div className="flex gap-3">
            <input type="checkbox" />
            <div className="flex gap-3">
              <h2 className="font-bold text-secondary-300">
                {vegetables.name}
              </h2>
            </div>
          </div>
          <div>
            <DeleteButton id={vegetables.id} />
          </div>
        </div>
      ))}
    </div>
  );
}
