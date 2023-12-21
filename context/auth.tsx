"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "@/config/firebase";
import LoginForm from "@/app/components/LoginForm";
import RegisterForm from "@/app/components/RegisterForm";

export const AuthContext = createContext({
  userId: null as string | null,
  user: null,
  loading: true,
  complaints: [] as any[],
});

export const AuthProvider = ({ children }: any) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [complaints, setComplaints] = useState<any[]>([]);

  const API_URL = "http://localhost:8080";

  useEffect(() => {
    const fetchData = async (uid: string, authToken: string) => {
      try {
        const response = await fetch(
          `${API_URL}/api/complaint/userComplaints/${uid}`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          },
        );
        const data = await response.json();
        setComplaints(data);
      } catch (error) {
        console.error("Error fetching complaints:", error);
        setComplaints([]);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, async () => {
      if (auth.currentUser) {
        const uid = auth.currentUser.uid;

        setUserId(uid);
        setUser(auth.currentUser);
        setLoading(false);

        // Fetch user complaints with the authorization token
        const token = await auth.currentUser.getIdToken();
        fetchData(uid, token);
      } else {
        setUserId(null);
        setUser(null);
        setLoading(false);
        setComplaints([]);
      }
    });

    // Cleanup the subscription on component unmount
    return () => unsubscribe();
  }, []);

  const AuthValues = {
    userId: userId,
    user: user,
    loading: loading,
    complaints: complaints,
  };

  return (
    <AuthContext.Provider value={AuthValues}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {user ? (
            <>{children}</>
          ) : (
            <>
              {window.location.pathname === "/register" ? (
                <RegisterForm />
              ) : (
                <LoginForm />
              )}
            </>
          )}
        </>
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
