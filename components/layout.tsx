import { Inter } from "@next/font/google";
import Head from "next/head";
import Navigation from "./navigation";

type LayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={"dark:bg-background dark:text-primary " + inter.className}>
      <Head>
        <title>Hunter Heston</title>
        <meta name="description" content="Hunter Heston's personal website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      {children}
    </div>
  );
}
