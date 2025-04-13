"use server";

import { redirect } from "next/navigation";

import { post } from "@/app/common/util/fetch";
import { FormError } from "@/app/common/interfaces/form-error.interface";

export const createUser = async (_prevState: FormError, formData: FormData) => {
  const { error } = await post("users", formData);
  if (error) {
    return { error };
  }

  redirect("/");
};
