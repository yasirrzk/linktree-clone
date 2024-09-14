'use server';
import { authOptions } from "@/authOptions";
import { Page } from "@/models/page";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export default async function grabUsername(formData: any) {
  const username = formData.get('username');

  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    throw new Error("MONGO_URI is not defined in environment variables");
  }

  await mongoose.connect(mongoUri);

  const existingPageDoc = await Page.findOne({ uri: username });
  if (existingPageDoc) {
    return false;
  } else {
    const session = await getServerSession(authOptions);
    return await Page.create({
      uri: username,
      owner: session?.user?.email,
    });
  }
}
