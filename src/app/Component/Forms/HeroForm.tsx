'use client';

import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Session } from "next-auth"; 

interface HeroFormProps {
  user?: Session["user"] | null;  
}

export default function HeroForm({ user = null }: HeroFormProps) { 
  const router = useRouter();

  useEffect(() => {
    if (
      'localStorage' in window &&
      window.localStorage.getItem('desiredUsername')
    ) {
      const username = window.localStorage.getItem('desiredUsername');
      window.localStorage.removeItem('desiredUsername');
      redirect('/account?desiredUsername=' + username);
    }
  }, []);

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    const input = form.querySelector('input') as HTMLInputElement;
    const username = input.value;

    if (username.length > 0) {
      if (user) {
        router.push('/account?desiredUsername=' + username);
      } else {
        window.localStorage.setItem('desiredUsername', username);
        await signIn('google');
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="ml-20 inline-flex items-center shadow-lg bg-white shadow-gray-500/20"
    >
      <span className="bg-white py-4 pl-4">linklist.to/</span>
      <input
        type="text"
        className=""
        style={{ backgroundColor: 'white', marginBottom: 0, paddingLeft: 0 }}
        placeholder="username"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-4 px-6 whitespace-nowrap"
      >
        Join for Free
      </button>
    </form>
  );
}
