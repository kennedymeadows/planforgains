"use client";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";
import { getCurrentUser } from "@/firebase/auth/getCurrentUser";

const metadata = {
  title: "Home",
  description: "Home page",
}

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const fetchUser = async () => {
      const { result, error } = await getCurrentUser();
      if (!error && result) {
        // If the user is already logged in, redirect to the dashboard.
        router.push("/dashboard");
      }
    };

    fetchUser();
  }, [router]);
  
  return (
    <main className="">
      <Header />
      <Hero />
      <CTA />
    </main>
  );
}
