"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nic, setNic] = useState("");
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
      alert("All fields are neccessary!");
      return;
    }

    try {
      // Check if user already exists
      const SERVER_URL = "http://localhost:8080";
      const nicResponse = await fetch(
        `${SERVER_URL}/api/user/publicUsers/${nic}/exists`,
      );
      const data = await nicResponse.json();
      const userExists = data.publicUserWithNicExists;
      if (userExists)
        throw new Error("There already exists a user with this NIC.");
      alert("User does not exist. Creating new account...");
      //Register with Firebase
      const registration = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const userId = registration.user.uid;
      alert("User created. Registering with server...");
      //Register with server
      const userName = name;
      const userNIC = nic;
      const userPhone = phoneNumber;
      const body = JSON.stringify({ userId, userNIC, userName, userPhone });
      console.log(body);
      const createResponse = await fetch(`${SERVER_URL}/api/user/publicUsers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });
      if (!createResponse.ok) throw new Error("Failed to create an account.");

      //Finish registration
      alert("Registration Complete!");
      router.push("./report-complaint");
    } catch (error: any) {
      alert(error.message);
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
