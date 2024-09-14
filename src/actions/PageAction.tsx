'use server';
import { authOptions } from "@/authOptions";
import { Page } from "@/models/page";
import { User } from "@/models/User";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";


export async function savePageSettings(formData: FormData) {
  await mongoose.connect(process.env.MONGO_URI || "");

  const session = await getServerSession(authOptions);
  if (session) {
    const dataKeys: string[] = [
      'displayName', 'location',
      'bio', 'bgType', 'bgColor', 'bgImage',
    ];

    const dataToUpdate: Record<string, string | null> = {};
    for (const key of dataKeys) {
      if (formData.has(key)) {
        dataToUpdate[key] = formData.get(key) as string | null;
      }
    }

    await Page.updateOne(
      { owner: session.user?.email as string },
      dataToUpdate,
    );

    if (formData.has('avatar')) {
      const avatarLink = formData.get('avatar') as string | null;
      if (avatarLink) {
        await User.updateOne(
          { email: session.user?.email as string },
          { image: avatarLink },
        );
      }
    }

    return true;
  }

  return false;
}


export async function savePageButtons(formData: FormData) {
  await mongoose.connect(process.env.MONGO_URI || "");

  const session = await getServerSession(authOptions);
  if (session) {
    const buttonsValues: Record<string, string> = {};
    formData.forEach((value, key) => {
      buttonsValues[key] = value as string;
    });

    const dataToUpdate = { buttons: buttonsValues };
    await Page.updateOne(
      { owner: session.user?.email as string },
      dataToUpdate,
    );

    return true;
  }

  return false;
}


export async function savePageLinks(links: string[]) {
  await mongoose.connect(process.env.MONGO_URI || "");

  const session = await getServerSession(authOptions);
  if (session) {
    await Page.updateOne(
      { owner: session.user?.email as string },
      { links },
    );
    return true;
  } else {
    return false;
  }
}
