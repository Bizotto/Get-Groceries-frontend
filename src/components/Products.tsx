'use client';
import { Product } from '@/interfaces/Product';
import { api } from '@/lib';
import { DeleteButton } from './DeleteButton';

interface Props {
  data: Product[];
}

export function Products({ data }: Props) {
  async function onDelete(id: string) {
    try {
      await api.ProductsGateway.delete(id);
    } catch (error) {
      console.log(error);
    }
  }

  return data.map(product => (
    <div
      className={`border group border-secondary-200 flex items-center justify-between gap-2 px-4 py-4 my-4 rounded-xl hover:bg-secondary-300 hover:scale-105 transition ease-in-out duration-200 `}
      key={product.id}
    >
      <div className="flex gap-3">
        <h2 className="font-bold">{product.name}:</h2>
        <p>{product.description}</p>
      </div>
      <DeleteButton onClick={() => onDelete(product.id)} />
    </div>
  ));
}
