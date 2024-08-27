import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";



export default async function Header() {
  const session = await getServerSession(authOptions)
  console.log(session);
  return (
    <header className="bg-white border-b  p-4">
        <div className="max-w-4xl flex justify-between mx-auto px-6">

      <div className="flex gap-6 px-8">
        <Link href="/">LinkList</Link>
        <nav className="flex items-center gap-4 text-slate-500 text-sm">
          <Link href="/about" className="hover:text-slate-800 hover:underline">About</Link>
          <Link href="/pricing" className="hover:text-slate-800 hover:underline">Pricing</Link>
          <Link href="/contact" className="hover:text-slate-800 hover:underline">Contact</Link>
        </nav>
      </div>
      <nav className="flex gap-4 text-sm text-slate-500">
        <Link href="/Login" className="hover:text-slate-800 hover:underline">Sign In</Link>
        <Link href="/register"className="hover:text-slate-800 hover:underline">Create Account</Link>
      </nav>
        </div>
    </header>
  );
}
