import { User } from 'lucide-react';

export function Login() {
  return (
    <a
      href={`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`}
      className="flex items-center gap-3 text-left hover:text-secondary-200 transition-colors"
    >
      <div className=" flex h-10 w-10 items-center justify-center rounded-full bg-transparent">
        <User className="h-5 w-5 text-secondary-200" />
      </div>
      <p className="max-w-[140px] text-sm leading-snug text-black">
        <span className="underline"> Crie sua conta</span> e salve suas memorias
      </p>
    </a>
  );
}
