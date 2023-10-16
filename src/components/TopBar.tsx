import Image from 'next/image';
import logo from '../assets/Logo.png';
import { TopBarItems } from './TopBarItems';
import { UserCard } from './UserCard';

export default function TopBar() {
  return (
    <nav className="fixed top-0 z-30 flex w-full items-center justify-between bg-primary border-b border-secondary-200 px-6 py-1">
      <Image src={logo} alt="Logo" height={120} width={120} />
      <TopBarItems />
      <UserCard />
    </nav>
  );
}
