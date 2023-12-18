"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/config/firebaseStorage";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nic, setNic] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      router.push("../report-complaint");
    }
  });

  const register = async (e: any) => {
    e.preventDefault();

    if (!name || !email || !password || !phoneNumber || !nic) {
      setError("All fields are necessary.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration Complete!");
      router.push("../report-complaint");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex h-screen place-items-center justify-center">
      <div className="rounded-lg border-t-4 border-green-400 p-5 shadow-lg">
        <h1 className="my-4 flex justify-center text-xl font-bold">Register</h1>

        <form onSubmit={register} className="flex flex-col gap-3">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setNic(e.target.value)}
            type="text"
            placeholder="National ID number"
          />
          <input
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text"
            placeholder="Phone Number"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="cursor-pointer bg-green-600 px-6 py-2 font-bold text-white">
            Register
          </button>

          {error && (
            <div className="mt-2 w-fit rounded-md bg-red-500 px-3 py-1 text-sm text-white">
              {error}
            </div>
          )}

          <Link
            className="mt-3 flex justify-center text-right text-sm"
            href={"/"}
          >
            Already have an account?&nbsp;
            <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
