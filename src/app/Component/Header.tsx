import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "../../authOptions";
import LogoutButton from "./buttons/LogoutButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <header className="bg-white border-b  p-4">
      <div className="max-w-4xl flex justify-between mx-auto px-6">
        <div className="flex items-center gap-6 px-8 text-blue-500">
          <Link href="/" className="flex items-center gap-2">
          <FontAwesomeIcon icon={faLink} className="text-blue-500 hover:text-blue-700"/>
          <span className="font-bold hover:text-blue-700">LinkList</span>
          </Link>
          <nav className="flex items-center gap-4 text-slate-500 text-sm">
            <Link
              href="/about"
              className="hover:text-slate-800 hover:underline"
            >
              About
            </Link>
            <Link
              href="/pricing"
              className="hover:text-slate-800 hover:underline"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="hover:text-slate-800 hover:underline"
            >
              Contact
            </Link>
          </nav>
        </div>
        <nav className="flex items-center gap-4 text-sm text-slate-500">
          {!!session && (
            <>
              <Link href={"/account"}>Hello, {session?.user?.name}</Link>
              <LogoutButton/>
            </>
          )}
          {!session && (
            <>
              <Link
                href="/Login"
                className="hover:text-slate-800 hover:underline"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="hover:text-slate-800 hover:underline"
              >
                Create Account
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
