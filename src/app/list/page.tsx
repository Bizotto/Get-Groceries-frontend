import { Products } from '@/components/Products';
import { api } from '@/lib';

export default async function List() {
  const products = await api.ProductsGateway.index();

  return (
    <section>
      <h1 className="items-center justify-center text-secondary-200 font-bold text-4xl flex">
        Market List
      </h1>
      <Products data={products} />
    </section>
  );
}
