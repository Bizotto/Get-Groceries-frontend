import { InputProducts } from '@/components/InputProducts';
import ProductsView from '@/components/ProductsView';

export default function Meat() {
  return (
    <section className="mt-20 space-y-4">
      <div className="flex justify-center">
        <h1 className="text-secondary-300 text-2xl">Type your Meats bellow</h1>
      </div>
      <InputProducts categoryId="clobu92oi0006spgenrz2tcdc" />
      <ProductsView categoryId="clobu92oi0006spgenrz2tcdc" />
    </section>
  );
}
