import { UserRole } from "@/core/auth/roles";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const CreatorPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || session.user.role !== UserRole.CREATOR) {
    return redirect("/error");
  }

  return (
    <div>
      <p>{session.user.email}</p>
    </div>
  );
};

export default CreatorPage;
