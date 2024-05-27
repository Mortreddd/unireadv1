import Navbar from "@/Components/Common/Navbar";
import Jumbotron from "@/Components/Jumbotron";
import { AuthProvider } from "@/Context/AuthContext";
import React from "react";

export default function HomePage() {
  return (
    <AuthProvider>
      <main className="w-full h-[100vh] antialiased font-sans">
        <Navbar />
        <section className="w-full h-full px-8 md:px-10 lg:px-16">
          <Jumbotron />
        </section>
      </main>
    </AuthProvider>
  );
}
