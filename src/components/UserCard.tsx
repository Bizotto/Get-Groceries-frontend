import { Login } from './Login';
import { Profile } from './Profile';

export function UserCard() {
  const isAuthenticated = false;
  return <div>{isAuthenticated ? <Profile /> : <Login />}</div>;
}
