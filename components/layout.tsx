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
      //  This inline style prevents the page from shifting when the scrollbar appears
      // https://stackoverflow.com/a/30293718
      style={{ paddingLeft: "calc(100vw - 100%);" }}
      className={
        "px-4 py-7 flex flex-col items-center justify-between dark:bg-background dark:text-primary min-h-screen " +
        inter.className
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
        className="flex flex-col sm:flex-row sm:w-2/3 sm:max-w-3xl"
      >
        <Navigation />
        <main className="px-3" id="page-content">
          {children}
        </main>
      </div>
      <footer>Hunter Heston @{new Date().getFullYear()}</footer>
    </div>
  );
}
