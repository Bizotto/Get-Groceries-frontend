import { Products } from '@/components/Products';
import { api } from '@/lib';

export default async function AddProduct() {
  const products = await api.ProductsGateway.index();

  return (
    <section className="mt-20 space-y-4">
      <div className="flex justify-center">
        <h1 className="text-secondary-200 text-2xl">Type your items below</h1>
      </div>
      <div className="flex justify-center items-center gap-1">
        <input
          className="pl-4 border w-full h-12 rounded-lg border-secondary-200 bg-greenTransparent focus:outline-none"
          type="text"
        />
        <button
          className="w-20 rounded-lg h-12 text-secondary-200 hover:bg-greenTransparent
          hover:border border-secondary-200 transition-colors"
          type="submit"
        >
          Add
        </button>
      </div>

      <div className="w-full max-h-full border border-secondary-200 rounded-lg p-4">
        <Products data={products} />
      </div>
    </section>
  );
}
