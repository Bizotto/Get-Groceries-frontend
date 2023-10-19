import { InputProducts } from '@/components/InputProducts';
import { Products } from '@/components/Products';

export default async function AddProduct() {
  return (
    <section className="mt-20 space-y-4">
      <div className="flex justify-center">
        <h1 className="text-secondary-300 text-2xl">Type your items below</h1>
      </div>
      <InputProducts />
      <Products />
    </section>
  );
}
