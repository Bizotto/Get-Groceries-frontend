import { LucidePencilLine } from 'lucide-react';
import Image from 'next/image';
import logo from '../assets/Logo.png';
import { RouteItem } from './NavigateItem';
import { TopBarItems } from './TopBarItems';
import { UserCard } from './UserCard';

export default function TopBar() {
  return (
    <nav className="fixed top-0 z-30 flex w-full items-center justify-between bg-primary border-b border-secondary-300 px-6 py-1">
      <Image src={logo} alt="Logo" height={120} width={120} />
      <TopBarItems />
      <div className="flex gap-4">
        <RouteItem
          className="flex h-10 w-10 items-center justify-center rounded-full bg-greenTransparent"
          icon={<LucidePencilLine className="h-5 w-5" />}
          label=""
          route="/addProduct"
        />
        <UserCard />
      </div>
    </nav>
  );
}
