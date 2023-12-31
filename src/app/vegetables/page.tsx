import { InputProducts } from '@/components/InputProducts';
import ProductsView from '@/components/ProductsView';

export default function Vegetables() {
  return (
    <section className="mt-20 space-y-4">
      <div className="flex justify-center">
        <h1 className="text-secondary-300 text-2xl">
          Type your Vegetables bellow
        </h1>
      </div>
      <InputProducts categoryId="cllstqpz20000sp3gbbld9n52" />
      <ProductsView categoryId="cllstqpz20000sp3gbbld9n52" />
    </section>
  );
}
