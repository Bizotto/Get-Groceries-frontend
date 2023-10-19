import { Products } from '@/components/Products';

export default async function List() {
  return (
    <section>
      <h1 className="items-center justify-center text-secondary-300 font-bold text-4xl flex">
        Market List
      </h1>
      <Products />
    </section>
  );
}
