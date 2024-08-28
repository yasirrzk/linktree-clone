import { getServerSession } from "next-auth";
import { authOptions } from "../../authOptions";
import { redirect } from "next/navigation";
import RightIcons from "../Component/icons/RightIcons";

export default async function Accountpage({ searchParams }: { searchParams: { [key: string]: string | string[] } }) {
    const session = await getServerSession(authOptions);
    const desiredUsername = searchParams?.desiredUsername;

    if (!session) {
        redirect('/'); 
    }

    return (
        <div>
            <form action="">
                <h1 className="text-4xl font-bold text-center mb-2">
                    grab your username
                </h1>
                <p className="text-center mb-6 text-gray-500">
                    choose your username
                </p>
                <div className="max-w-xs mx-auto">
                <input 
                className="block p-2 mx-auto border w-full mb-2 text-center"
                defaultValue={desiredUsername}
                type="text" placeholder="username"/>
                <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 block mx-auto w-full flex gap-2 items-center justify-center"
                >
                <span>Claim username</span>
                <RightIcons />
                </button>
                </div>
            </form>
        </div>
    );
}
