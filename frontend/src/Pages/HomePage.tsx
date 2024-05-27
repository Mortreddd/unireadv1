import { AuthProvider } from "@/Context/AuthContext";
import HomeLayout from "@/Layouts/HomeLayout";

export default function HomePage() {
  return (
    <AuthProvider>
      <main className="w-full h-[100vh] antialiased">
        <HomeLayout />
      </main>
    </AuthProvider>
  );
}
