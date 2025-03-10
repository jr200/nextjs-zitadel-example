"use client";

import { redirect } from "next/navigation"
import { flattenObject } from "../../utils"
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const session = useSession()
  let data = flattenObject(session)

  if (session.status == "unauthenticated") {
    return redirect("/signin")
  }

  return (
    <div className="p-10">
      {Object.entries(data).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {String(value)}
        </div>
      ))}
      <div className="p-10"/>

      <button className="bg-red-500" type="submit" onClick={() => { signOut(); }}>Sign Out</button>
    </div>
  );
}
