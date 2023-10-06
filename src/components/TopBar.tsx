import { cookies } from 'next/headers';
import Image from 'next/image';
import logo from '../assets/Logo.png';
import { Login } from './Login';
import { Profile } from './Profile';

export default function TopBar() {
  const isAuthenticated = cookies().has('token');

  return (
    <nav className="fixed top-0 z-30 flex w-full items-center justify-between bg-primary border-b border-secondary-200 px-6 py-1">
      <Image src={logo} alt="Logo" height={120} width={120} />
      <div>{isAuthenticated ? <Profile /> : <Login />}</div>
    </nav>
  );
}
