import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Accountpage({ searchParams }: { searchParams: { [key: string]: string | string[] } }) {
    const session = await getServerSession(authOptions);
    const desiredUsername = searchParams?.desiredUsername;

    return (
        <div>
            account {session?.user?.name}<br />
            desired username: {desiredUsername}
        </div>
    );
}
