import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="w-screen text-center">
        <h1 className="text-3xl font-semibold text-accent">Hunter Heston</h1>
        <p>Welcome to my website.</p>
      </main>
    </>
  );
}
