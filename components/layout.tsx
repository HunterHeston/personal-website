import { Inter } from "@next/font/google";
import Head from "next/head";
import Navigation from "./navigation";

type LayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className={
        "dark:bg-background dark:text-primary min-h-screen " + inter.className
      }
    >
      <Head>
        <title>Hunter Heston</title>
        <meta name="description" content="Hunter Heston's personal website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* column container */}
      <div
        id="application"
        className="pl-7 pt-7 flex flex-col sm:flex-row max-w-full"
      >
        <Navigation />
        <div id="page-content">{children}</div>
      </div>
    </div>
  );
}
