import { Card } from '@/components/Card';
import { ClipboardList, ScrollText } from 'lucide-react';

export default function Home() {
  return (
    <>
      <h1 className="items-center justify-center text-secondary-300 font-bold text-4xl flex max-sm:text-center">
        Welcome to Get Groceries
      </h1>

      <div className="mt-5">
        <h2 className="flex-col text-secondary-300 justify-center items-center font-bold text-2xl flex max-sm:items-center max-sm:text-center">
          Create your market list or chose a pre-made list
        </h2>
      </div>

      <section className="flex gap-5 justify-center max-lg:flex-wrap max-lg:justify-center">
        <Card
          title="New instant List"
          icon={<ScrollText width={60} height={60} />}
          link="/addProduct"
        />
        <Card
          title="New Later List"
          icon={<ClipboardList width={60} height={60} />}
          link="/" //TODO: Add link to later list
        />
      </section>
    </>
  );
}
