"use server";

import { redirect } from "next/navigation";

export async function requestSignup() {
  redirect("/signup?submitted=1");
}
