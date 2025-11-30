"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function singUpAction(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;

    await auth.api.signUpEmail({
        body: {
            email,
            password,
            name
        }
    });

    redirect("/");
}

export async function signInAction(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const response = await auth.api.signInEmail({
        body: {
            email,
            password
        },
    })

    if("twoFactorRedirect" in response){
        redirect("/login/two-factor");
    }

    redirect("/");
}

export async function signOutAction() {
    await auth.api.signOut({
        headers: await headers()
    });
    redirect("/login");
}

export async function enableTwoFactorAction(password: string) {
    await auth.api.enableTwoFactor({
        body: {
            password
        },
        headers: await headers()
    });
}