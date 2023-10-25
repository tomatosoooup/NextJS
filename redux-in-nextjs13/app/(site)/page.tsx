"use client";

import { useAppSelector } from "@/redux/store";
import LogIn from "./log-in";

export default function Home() {
  const username = useAppSelector((state) => state.authReducer.value.username);
  const isModer = useAppSelector(
    (state) => state.authReducer.value.isModerator
  );
  return (
    <>
      <h1 className="text-center pt-12">Username: {username}</h1>
      <h2 className="text-center pt-8">
        {isModer ? "User is a moderator" : "User is not a moderator"}
      </h2>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <LogIn />
      </main>
    </>
  );
}
