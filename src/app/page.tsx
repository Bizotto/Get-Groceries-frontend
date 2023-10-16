import { Card } from '@/components/Card';
import { Beef, Carrot, Fish, StickyNote } from 'lucide-react';

export default function Home() {
  return (
    <>
      <h1 className="items-center justify-center text-secondary-200 font-bold text-4xl flex max-sm:text-center">
        Welcome to Get Groceries
      </h1>

      <div className="mt-5">
        <h2 className="flex-col text-secondary-200 justify-center items-center font-bold text-2xl flex max-sm:items-center max-sm:text-center">
          Create your market list or chose a pre-made list
        </h2>
      </div>

      <section className="flex gap-5 max-lg:flex-wrap max-lg:justify-center">
        <Card title="Create a List" link="/addProduct">
          <StickyNote color="#015E1C" width={60} height={60} />
        </Card>
        <Card title="Pescatarian List" link="/">
          <Fish color="#015E1C" width={60} height={60} />
        </Card>
        <Card title="Vegetarian List" link="/vegetables">
          <Carrot color="#015E1C" width={60} height={60} />
        </Card>
        <Card title="Carnivore List" link="/meat">
          <Beef color="#015E1C" width={60} height={60} />
        </Card>
      </section>
    </>
  );
}
