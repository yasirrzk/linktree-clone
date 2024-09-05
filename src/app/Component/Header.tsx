'use client'

import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import LogoutButton from "./buttons/LogoutButton";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white border-b p-4">
      <div className="max-w-4xl flex justify-between items-center mx-auto px-6">
        <div className="flex items-center gap-6 px-8 text-blue-500">
          <Link href="/" className="flex items-center gap-2">
            <FontAwesomeIcon icon={faLink} className="text-blue-500 hover:text-blue-700" />
            <span className="font-bold hover:text-blue-700">LinkList</span>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="text-blue-500 text-2xl" />
          </button>
        </div>
        <nav className={`md:flex md:items-center gap-4 text-sm text-slate-500 ${menuOpen ? "block" : "hidden"} md:block`}>
          <div className="flex flex-col md:flex-row md:gap-4">
            <Link href="/about" className="hover:text-slate-800 hover:underline">
              About
            </Link>
            <Link href="/pricing" className="hover:text-slate-800 hover:underline">
              Pricing
            </Link>
            <Link href="/contact" className="hover:text-slate-800 hover:underline">
              Contact
            </Link>
          </div>
          {!!session && (
            <div className="flex items-center flex-col md:flex-row md:gap-4 mt-4 md:mt-0">
              <Link href="/account">Hello, {session?.user?.name}</Link>
              <LogoutButton />
            </div>
          )}
          {!session && (
            <div className="flex flex-col md:flex-row md:gap-4 mt-4 md:mt-0">
              <Link href="/Login" className="hover:text-slate-800 hover:underline">
                Sign In
              </Link>
              <Link href="/register" className="hover:text-slate-800 hover:underline">
                Create Account
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
