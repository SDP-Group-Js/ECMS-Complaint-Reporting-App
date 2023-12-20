"use client";
import { useEffect, useState } from "react";
import { auth } from "@/config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import Link from "next/link";
import { useRouter } from "next/navigation";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isComponentMounted, setComponentMounted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      router.push("../report-complaint");
    }
  }, []);

  const login = async (e: any) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful");
      router.push("../report-complaint");
    } catch (error: any) {
      setError(error.message);
      alert(error);
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="rounded-lg border-t-4 border-green-400 p-5 shadow-lg">
        <h1 className="my-4 flex justify-center text-xl font-bold">Login</h1>

        <form onSubmit={login} className="flex flex-col gap-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="cursor-pointer bg-green-600 px-6 py-2 font-bold text-white">
            Login
          </button>
          {error && (
            <div className="mt-2 w-fit rounded-md bg-red-500 px-3 py-1 text-sm text-white">
              {error}
            </div>
          )}

          <Link
            className="mt-3 flex justify-center text-right text-sm"
            href={"../register"}
          >
            Don't have an account?&nbsp;
            <span className="underline">Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
