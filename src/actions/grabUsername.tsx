"use server";
import { page } from "@/models/page";
import mongoose from "mongoose";
import { redirect } from "next/navigation";
export default async function grabUsername(formData: any) {
  const username = formData.get("username");
  mongoose.connect("process.env.MONGO_URI");
  const existingPageDoc = await page.findOne({uri:username});

  if(existingPageDoc) {
   return redirect('/account?usernameTaken=1')
  } else {
   await page.create({uri:username});
   return redirect('/account/'+username)
  }
//   try {
//     await page.create({ uri: username });
//     return redirect("/account/" + username);
//   } catch (e) {
//     return redirect("/account?usernameTaken=1");
//   }
}
