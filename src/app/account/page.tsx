
import { getServerSession } from "next-auth";
import { authOptions } from "../../authOptions";
import { redirect } from "next/navigation";
import UsernameForm from "../Component/Forms/UsernameForm";
import mongoose from "mongoose";
import { page } from "@/models/page";


export default async function Accountpage({ searchParams}: { searchParams: { [key: string]: string | string[] } }) {
    
    const session = await getServerSession(authOptions);
  const desiredUsername = searchParams?.desiredUsername;
  if (!session) {
    return redirect('/');
  }
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    throw new Error("MONGO_URI is not defined in environment variables");
  }

  await mongoose.connect(mongoUri);
  const Page = await page.findOne({owner: session?.user?.email});

  const leanPage = cloneDeep(page.toJSON());
  leanPage._id = leanPage._id.toString();
  if (page) {
    return (
      <>
        <PageSettingsForm page={leanPage} user={session.user} />
        <PageButtonsForm page={leanPage} user={session.user} />
        <PageLinksForm page={leanPage} user={session.user} />
      </>
    );
  }

  return (
    <div>
      <UsernameForm desiredUsername={desiredUsername} />
    </div>
  );
}
