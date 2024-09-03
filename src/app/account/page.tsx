
import { getServerSession } from "next-auth";
import { authOptions } from "../../authOptions";
import { redirect } from "next/navigation";
import UsernameForm from "../Component/Forms/UsernameForm";
import mongoose from "mongoose";
import { page } from "@/models/page";
import PageSettingsForm from "../Component/Forms/PageSettingForm";
import PageButtonsForm from "../Component/Forms/PageButtonForm";
import PageLinksForm from "../Component/Forms/PageLinkForm";


export default async function Accountpage({ searchParams}: { searchParams: { [key: string]: string | string[] } }) {
    
    const session = await getServerSession(authOptions);
  const desiredUsername = searchParams?.desiredUsername;
  if (!session || !session.user || !session.user.name || !session.user.email || !session.user.image) {
    return redirect('/');
  }
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    throw new Error("MONGO_URI is not defined in environment variables");
  }

  await mongoose.connect(mongoUri);
  const  pageDocument = await page.findOne({owner: session?.user?.email});

const leanPage = pageDocument ? pageDocument.toObject() : { _id: 'default-id', /* other default properties */ };
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
