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
            className="inline-flex justify-center items-center shadow-lg shadow-gray-500/20 flex-col md:flex-row mx-auto mt-4 ml-20">
            <span className="bg-white py-4 pl-4 pr-2 flex-grow w-full md:w-auto text-center border shadow-gray-400">
                LinkList.to
            </span>
            <input
                type="text"
                className="py-4 flex-grow w-full md:w-auto text-center"
                placeholder="username" />
            <button
                type="submit"
                className="bg-blue-500 text-white py-4 px-6 hover:bg-blue-700 w-full mt-4 md:mt-0 md:w-auto flex justify-center">
                Join for free
            </button>
        </form>
    );
}
