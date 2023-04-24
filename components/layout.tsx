import { Inter, Open_Sans } from "@next/font/google";
import Head from "next/head";
import Navigation from "./navigation";

type LayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      id="layout"
      className={
        // the `calc` function here prevents the page from shifting when scroll bars appear and disappear
        // https://stackoverflow.com/a/30293718
        [
          " min-h-screen flex flex-col justify-between sm:items-center sm:pl-[calc(100vw-100%)]",
          inter.className,
        ].join(" ")
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
        className="flex flex-col sm:flex-row sm:w-3/4 sm:max-w-3xl sm:pt-24 px-4 py-7"
      >
        <Navigation />
        <main className="px-3 sm:ml-6 w-full" id="page-content">
          {children}
        </main>
      </div>
    </div>
  );
}
