'use client';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HeroForm() {
    const router = useRouter();

    useEffect(() => {
        if ('localStorage' in window && window.localStorage.getItem('desiredUsername')) {
            const username = window.localStorage.getItem('desiredUsername');
            window.localStorage.removeItem('desiredUsername');
            router.push('/account?desiredUsername=' + username);
        }
    }, [router]);

    async function handleSubmit(ev: any) {
        ev.preventDefault();
        const form = ev.target;
        const input = form.querySelector('input');
        const username = input.value;
        if (username.length > 0) {
            window.localStorage.setItem('desiredUsername', username);
            await signIn('google');
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="inline-flex items-center shadow-lg shadow-gray-500/20">
            <span className="bg-white py-4 pl-4 pr-2">
                LinkList.to
            </span>
            <input
                type="text" className="py-4"
                placeholder="username" />
            <button
                type="submit"
                className="bg-blue-500 text-white py-4 px-6 hover:bg-blue-700">
                Join for free
            </button>
        </form>
    );
}
