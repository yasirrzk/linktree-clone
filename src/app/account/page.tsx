
import { getServerSession } from "next-auth";
import { authOptions } from "../../authOptions";
import { redirect } from "next/navigation";
import UsernameForm from "../Component/Forms/UsernameForm";

export default async function Accountpage({ searchParams}: { searchParams: { [key: string]: string | string[] } }) {
    
    const session = await getServerSession(authOptions);
    const desiredUsername = searchParams?.desiredUsername;
    
    if (!session) {
        redirect('/'); 
    }

    return (
        <div>
            <UsernameForm desiredUsername={desiredUsername}/>
        </div>
    );
}
